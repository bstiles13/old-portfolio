//Dependecies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const nodemailer = require('nodemailer');



//Define server and middleware
var PORT = process.env.PORT || 8080;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.get("/portfolio", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/portfolio.html"));
});
app.get("/contact", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/contact.html"));
});

// Start the server
app.listen(PORT, function() {
  console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});
