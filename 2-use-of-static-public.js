const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./public"))


app.all("*", (req, res) => {
  res.status(404).send("resources not found");
});

app.listen(5000, () => {
  console.log("server is listening in port 5000");
});
