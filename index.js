const dotEnv = require("dotenv/config");
const express = require("express");
const app = express();
const db = require("./config/mySql")
const port = process.env.PORT || 8000;


app.listen(port , (err) => {
    if(err){
        console.log("Error In Running Server", err);
    }
    console.log(`Server is running on port ${port}`);
});