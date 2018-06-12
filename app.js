var express = require("express");
var app = express();
var db = require("./db");

var UserController = require("./user/UserController");
app.use("/users", UserController);

var AuthCOntroller = require('./auth/AuthController');
app.use('/api/auth', AuthCOntroller);

module.exports = app;
