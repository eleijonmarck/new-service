require("dotenv").config();

const DIR = process.env.NODE_ENV === "production" ? "./dist" : "./src";
module.exports = require(DIR + "/knexfile");
