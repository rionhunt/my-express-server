//jshint esversion:6

// add express.js to out dependences
const { response } = require("express");
const express = require("express");

// app is associated with our instance of express.js
const app = express();

// when we get a request, return "hello". "/" is root.
// req is request, res is response. (It could be anything)
// cause its function parameters. It's best practice.
// response if client is going to the home page.
app.get("/", function (req, res) {
  res.send("<h1>Hey All!</h1>");
});

// getting a request from a different route: root as opposed
// to /contact. Response if client is going to contact page.
app.get("/contact", function (req, res) {
  res.send("Contact me at: rionhunt2@gmail.com");
});

// using the about route
app.get("/about", function (req, res) {
  res.send("Hi! My name is Rion Hunt. I'm a budding software engineer.");
});

// using the about route
app.get("/hobbies", function (req, res) {
  res.send("<ul><li>beer</li><li>more beer</li></ul>");
});

// server is listening to port 3000
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
