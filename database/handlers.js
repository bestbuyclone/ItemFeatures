require("dotenv").config({ path: __dirname + "/../.env" });
const mongoose = require("mongoose");
const { ItemFeature } = require("./Schema");
const { db } = require("./connection");
const { DBURI, DBPORT, DBNAME } = process.env;

db(`mongodb://${DBURI}:${DBPORT}/${DBNAME}`);

const batchInsert = data => {
  ItemFeature.insertMany(data)
    .then(() => console.log("All done with the insert boss"))
    .then(mongoose.disconnect())
    .catch(err => console.error(err));
};

const getItemFeature = (id, cb) => {
  ItemFeature.findOne({ featureId: id }).exec(cb);
};

module.exports = { batchInsert, getItemFeature };
