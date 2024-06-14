const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/profile", (req, res) => {
  res.send("halaman profile");
});

app.get("/beranda", (req, res) => {
  res.send("halaman beranda");
});

app.listen(port, () => {
  console.log(` server siap !!!! buka localhost ${port}`);
});