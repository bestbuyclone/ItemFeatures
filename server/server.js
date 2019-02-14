const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 1338;
const app = express();

app.use(bodyParser.json());
app.use(express.static("dist"));

app.listen(PORT, () =>
  console.log(`Features service listening on port: ${PORT}`)
);
