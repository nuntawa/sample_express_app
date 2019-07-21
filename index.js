const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
var contact_page = require('./contact');

app.set("view engine","ejs");

app.get("/", (req, res) => {

    res.render("index",{page:"index"});
    
});

app.get("/about", (req, res) => {

    res.render("about",{page:"about"});
    
});

contact_page.contact(app);


app.listen(port);