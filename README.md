# WebDevCodingChallenge

How does your system work?
The system uses Node.js with a React frontend and an Express backend. The frontend provides a search bar and displays product details. Users can search for products by SKU, and the system fetches data from the backend. The backend parses URL data from the XML sitemap provided in the problem description and then uses Cheerio for HTML parsing.

How could you scale your system to search across all sitemap files?
To scale the system to search across all sitemap files we could have the backend fetch multiple sitemaps and merge the data. We can do this by keeping a list of sitemap URLs, parsing each of them and then aggregating the data.

How will your system perform with 100 users? 10,000 users? 1,000,000 users?
The performance depends on several factors including server capacity and network speeds. With 100 users it should be fine, but with larger numbers like 10000 users, we would likely start to have issues such as slow response times or server overload. To fix this issue we could scale the system horizontally with more servers and a load balancer.

What documentation, websites, papers, etc did you consult in doing this assignment?
React: https://reactjs.org/
Express: https://expressjs.com/
Axios: https://axios-http.com/
Cheerio: https://cheerio.js.org/
XML2JS: https://www.npmjs.com/package/xml2js
Tailwind CSS: https://tailwindcss.com/

How long did you spend on this exercise? If you had unlimited more time to spend on this, how would you spend it and how would you prioritize each item?
I spent 2 nights working on the project. I started Friday night after work and got the backend completed that night. I did the frontend code on Monday night. I left today (Tuesday night) to review the code for any issues, write up some basic documentation, and answer the questions provided in the problem. If I had more time to work on this I would have created a faster way to access the title author and price data. Perhaps instead of parsing it from the live web page every time an API call is made, we could run a scraper that will crawl through each URL and save that data in a SQL database or even just a JSON file to keep things simple for the scope of this project. This way it would be much faster on future API calls. This has the downside of not being updated when there is a change to any of that data such as a sale price. Other than that I could improve error handling for edge cases and improve UI/UX. This was my first time trying out tailwind CSS and I've only scratched the surface with that I'm sure I could do a lot better with the UI given more time. The highest priority for me would be to improve the API performance, then it would be error handling, then UI/UX would be the lowest priority for me.

If you were to critique your code, what would you have to say about it?
I think overall the code is pretty solid. It's pretty basic but I purposely didn't want to overcomplicate this project given the small scope of the problem. The backend handles requests as expected based on the requierments of the problem, however, I'm sure it can be made more efficient if you don't need to parse the HTML page. There is also room for better error handling in the backend, given more time I would test for edge cases. The user interface is functional but could be better in terms of the appearance. There is always something that can be improved on and I am constantly working on making my work better.

How can you change your system be updated to support simple keyword searches?
To do this we would want an easier way to access title and author data. We would need to create a database with this data and possibly more data such as a description field. Then we can create a new backend route to accept keyword parameters. Then we can query the database and create parsing logic to search the title author and description fields and return those results. This new functionality would of course need to be implemented in the front end as well.