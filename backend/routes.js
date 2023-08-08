const express = require("express");
const router = express.Router();
const xml2js = require("xml2js");
const axios = require("axios");
const cheerio = require("cheerio");

//URL for the provided XML file
const sitemap = "https://www.christianbook.com/sitemap4.xml";

//Helper function to parse XML data
async function parseXmlData(xmlData) {
    return new Promise((resolve, reject) => {
      xml2js.parseString(xmlData, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}


//Route: Get all SKUs from the sitemap
router.get("/allskus", async (req, res) => {
    try {
        //Fetch the sitemap data
        const response = await axios.get(sitemap);
        const data = response.data;
        //Parse the XML data
        const result = await parseXmlData(data);
        
        //Extract and map all SKUs from the sitemap
        const skus = result.urlset.url.map((obj) => {
            const url = obj.loc[0];
            const parts = url.split("/");
            return parts[parts.length - 1];
        });

        //Return the list of SKUs
        res.json(skus);

    } catch (error) {
        //Handle errors
        console.error("Error fetching XML:", error);
        return res.status(500).json({ message: "Internal Server Error"});
    }
});

//Route: Get all URLs from the sitemap
router.get("/allurls", async (req, res) => {
    try {
        //Fetch the sitemap data
        const response = await axios.get(sitemap);
        const data = response.data;
        //Parse the XML data
        const result = await parseXmlData(data);
        
        //Extract and map all URLs from the sitemap
        const urls = result.urlset.url.map((urlObj) => urlObj.loc[0]);
        
        //Return the list of URLs
        res.json(urls);

    } catch (error) {
        //Handle errors
        console.error("Error fetching XML:", error);
        return res.status(500).json({ message: "Internal Server Error"});
    }
});

//Route: Get data for a specific SKU
router.get("/sku/:sku", async (req, res) => {
    try {
        //Fetch the sitemap data
        const response = await axios.get(sitemap);
        const data = response.data;
        //Parse the XML data
        const result = await parseXmlData(data);

        //Get the requested SKU from the route parameter
        const skuReq = req.params.sku;
        const urls = result.urlset.url;
        let urlRes;
        for (const obj of urls) {
            const url = obj.loc[0];
            const parts = url.split("/");
            const sku = parts[parts.length - 1];

            if (sku === skuReq) {
                urlRes = url;
                break;
            }
        }

        if (urlRes) {
            //Fetch the HTML content of the product page
            const response = await axios.get(urlRes);
            const htmlContent = response.data;
            const $ = cheerio.load(htmlContent);

            //Extract title, author, and price data from the HTML
            const title = $("h1.CBD-ProductDetailTitle").first().text().trim();
            const author = $("a.CBD-ProductDetailAuthorLink").first().text().trim();
            const priceData = $("span.CBD-ProductDetailPriceBox").first().text().trim();

            //Parse the price data
            const ourPrice = priceData.match(/Our Price\$([\d.]+)/)[1];
            let retailPrice;
            try {
                retailPrice = priceData.match(/Retail:\s+\$([\d.]+)/)[1];
            } catch (error) {
                console.error("Error parsing price data:", error);
                retailPrice = "N/A";
            }

            //Return the product details
            res.json({ title, author, ourPrice, retailPrice });
        } else {
            //SKU not found in the sitemap
            res.status(404).json({ message: "SKU not found" });
        }
    } catch (error) {
        //Handle errors
        console.error("Error fetching XML:", error);
        return res.status(500).json({ message: "Internal Server Error"});
    }
});

module.exports = router;