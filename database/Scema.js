const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const featureSchema = new Schema({
  featureId: Number,
  feature: String,
  featureDescription: String
});

const ItemFeature = mongoose.model("ItemFeature", featureSchema);

module.exports = { ItemFeature };
