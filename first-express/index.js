const express = require("express");
const app = express();

app.use(() => {
  console.log("we got request");
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
