//jshint esversion:6

//add express.js to out dependences
const express = require("express");

//app is associated with our instance of express.js
const app = express();

//when we get a request, return "hello". "/" is root.
// req is request, res is response. (It could be anything)
// cause its function parameters. It's best practice.
app.get("/", function (req, res) {
  response.send("<h1>Hello World!</h1>");
});

//server is listening to port 3000
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
