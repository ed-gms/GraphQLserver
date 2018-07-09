const express = require("express");
const app = express();
const port = process.argv[2] || 8080;

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});