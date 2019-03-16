const mongoose = require("mongoose");
const { batchData } = require("./mockDataGenerator");
const { ItemFeature } = require("./Schema");
require("dotenv").config({ path: __dirname + "/../.env" });
const { FEATURES_URL } = process.env;

const dataList = batchData(1000);

mongoose.connect(FEATURES_URL, {
  useNewUrlParser: true
});
console.log(FEATURES_URL);

const con = mongoose.connection;

const batchInsert = data => {
  console.log("in batch-insert");
  ItemFeature.insertMany(data)
    .then(() => console.log("All done with the insert boss"))
    .then(() => mongoose.disconnect())
    .catch(err => console.error(err));
};

con.on("error", () => console.error("connection error boss"));
con.on("connected", () => batchInsert(dataList));
con.on("disconnected", () => {
  con.close(() => {
    console.log("done with this DB, bye now");
    process.exit(0);
  });
});
