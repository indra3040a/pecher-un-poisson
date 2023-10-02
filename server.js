var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
app.use(function (req, res, next) {
  console.log("Request IP: " + req.url);
  console.log("Request date: " + new Date());
  next();
});
app.use(function (req, res, next) {
  res.send("Un poisson tres bizarre");
  res.sendStatus(200);
});
app.use(function (req, res) {
  res.status(404);
  res.send("File not found!");
});
app.listen(3000, function () {
  console.log("App started on port 3000");
});
