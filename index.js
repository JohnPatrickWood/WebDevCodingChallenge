const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const routes = require("./routes");

//Enable CORS for requests from "http://localhost:8000"
app.use(cors({
    origin: "http://localhost:8000",
  }));

//Set up routes
app.use("/", routes);

//Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
