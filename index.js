const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotnev= require("dotenv")
const dataBase=require("./config/data")


dotnev.config({path :"config/config.env "})
const app = express();

// use this before any routes
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// home page
app.get("/", (req, res) => {
   res.sendStatus(200)
});


app.use("/data",require("./routes/data"))

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
