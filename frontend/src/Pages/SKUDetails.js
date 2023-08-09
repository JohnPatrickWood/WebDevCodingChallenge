import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SKUDetails() {
    const {sku} = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = `http://localhost:5000/sku/${sku}`;

    //Fetch data on component mount
    useEffect(() => {
        fetchData(url, setData, setLoading)
    }, [url]);

    if (loading) {
        return(
            //Loading message
            <div>loading...</div>
        );
    }

    return (
        //SKU details with title, author, SKU, and price info
        <>
            {data !== null ?
            <div className="flex">
                <div className="fixed left-4 top-12" >
                    <div>Title: {data.title}</div>
                    {data.author !== "" ? <div>Author: {data.author}</div> : <div>Author: N/A</div>}
                    <div>SKU: {sku}</div>
                </div>
                <div className="w-50 h-60 bg-gray-300 p-4 rounded fixed right-4 text-center top-12">
                    <div>Our Price: ${data.ourPrice}</div>
                    <div>Retail Price: ${data.retailPrice}</div>
                    <button className="rounded bg-blue-700 p-4 hover:bg-blue-500 text-white transition-all duration-300">Buy now!</button>
                </div>
            </div> : <div>SKU "{sku}" not found</div> }
        </>
    );
}

//Fetch data function using axios
async function fetchData(url, setData, setLoading) {
    setLoading(true)
    await axios
        .get(url)
        .then((res) => {
            setData(res.data);
        })
        .catch((error) => setData(null));
    setLoading(false);
}