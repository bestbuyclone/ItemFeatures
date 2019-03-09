const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5001;
const { getItemFeatures } = require("../database/handlers");

app.use(express.static(path.join(__dirname, "../dist")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ strict: false }));
app.use(cors());

app.get("/api/features/:id", (req, res) => {
  const id = req.params.id;
  if (id === undefined) {
    req.status(400).send("ERROR: request must contain an item id.");
  } else {
    getItemFeatures(id, (err, itemFeatures) => {
      err ? console.error(err) : res.status(200).send(itemFeatures);
    });
  }
});

app.listen(PORT, () => console.log(`Service listening on port: ${PORT}`));
