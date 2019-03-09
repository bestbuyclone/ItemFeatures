const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 5002;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

app.listen(PORT, () =>
  console.log(`Features service listening on port: ${PORT}`)
);
