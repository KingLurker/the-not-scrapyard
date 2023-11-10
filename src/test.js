// test-env.js
require("dotenv").config();

const secret = process.env.REACT_APP_FAUNADB_SECRET;
console.log("The FAUNADB_SECRET is:", secret);
