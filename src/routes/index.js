const express = require("express");

const app = express();

app.use("/api", require("./check"));

module.exports = app;
