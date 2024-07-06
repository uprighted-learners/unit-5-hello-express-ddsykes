const express = require("express");
const app = express();
const PORT = 4000;

app.get("/home", (req, res) => {
  res.send("Hello from Home");
});

app.get("/about", (req, res) => {
  res.send("Hello from About");
});

app.get("/contact", (req, res) => {
  res.send("Hello from contact");
});

app.get("/", (req, res) => {
  res.send("Hello, home!");
});

app.listen(PORT, () => {
  console.log(`Server is running on the http://localhost:${PORT}`);
});
