const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let age = Number(req.body.yourAge) / 15;
  console.log("Your Age is : " + age.toFixed(1) + " Dog Years");

  res.send("<br /><h3> Your Age is : " + age.toFixed(1) + " Dog Years </h3>");
});

app.listen(port);
