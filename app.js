const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json(
    [{ name: "john", age: 18 },
    { company: "amazon", dedication: "being evil" }]
  );
});

app.listen(5000, () => {
  console.log("server listening port 5000");
});
