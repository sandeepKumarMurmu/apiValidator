const express = require("express");
const check = require("../controller/check");

const route = express.Router();

route.get("/home", check);

module.exports = route;
