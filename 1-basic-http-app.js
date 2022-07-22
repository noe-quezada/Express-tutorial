const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit resource");
  res.status(200).send("home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

app.listen(5000, () => {
  console.log("server is listeninig on port 5000");
});
