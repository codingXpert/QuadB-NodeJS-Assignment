const dotEnv = require("dotenv/config");
const express = require("express");
const app = express();
const db = require("./config/mySql");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); 


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(__dirname + "/assets"));

app.use('/', require('./routes'));

app.listen(port , (err) => {
    if(err){
        console.log("Error In Running Server", err);
    }
    console.log(`Server is running on port ${port}`);
});