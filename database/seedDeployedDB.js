const { db } = require("./connection");
require("dotenv").config({ path: __dirname + "/../.env" });
const { ATLAS_URL } = process.env;
const { batchData } = require("./mockDataGenerator");
const { batchInsert } = require("./handlers");

db(ATLAS_URL);

const dataList = batchData(1000);

batchInsert(dataList);
