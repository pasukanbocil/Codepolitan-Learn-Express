const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("we got request");
//   res.send(`ini string dari respon`);
// });

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.get("/cats", (req, res) => {
  res.send("This is cats page");
});

app.post("/cats", (req, res) => {
  res.send("this is cats page from post");
});

app.get("/about", (req, res) => {
  res.send("This is about page");
});

app.get("*", (req, res) => {
  res.send("Halaman Tidak Ditemukan");
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
