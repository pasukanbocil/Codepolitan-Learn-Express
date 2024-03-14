const express = require("express");
const app = express();

app.use((req, res) => {
  console.log("we got request");
  res.send(`ini string dari respon`);
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
