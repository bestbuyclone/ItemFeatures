require("dotenv").config({ path: __dirname + "/../.env" });
const mongoose = require("mongoose");
const { ItemFeature } = require("./Schema");
const { FEATURES_URL } = process.env;

mongoose
  .connect(FEATURES_URL, {
    useNewUrlParser: true,
    authSource: "admin"
  })
  .then(() => console.log("success!"))
  .catch(console.error);

const con = mongoose.connection;

con.on("error", () => console.error("connection error boss"));
con.on("connected", () => console.log("connected to DB boss!"));
con.on("disconnected", () => {
  con.close(() => {
    console.log("done with this DB, bye now");
    process.exit(0);
  });
});

const batchInsert = data => {
  ItemFeature.insertMany(data)
    .then(() => console.log("All done with the insert boss"))
    .then(mongoose.disconnect())
    .catch(err => console.error(err));
};

const getItemFeatures = (id, cb) => {
  ItemFeature.findOne({ featureId: id }).exec(cb);
};

module.exports = { batchInsert, getItemFeatures };
