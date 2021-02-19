const CMA = require("contentful-management");
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/.env` });

client = CMA.createClient({
  accessToken: process.env.ACCESS_TOKEN,
});

module.exports = { client };
