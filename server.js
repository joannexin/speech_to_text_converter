'use strict';

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// allow parsing json and url
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//load static files
app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/node_modules`));

// set up port for server to linsten on
var port = process.env.PORT || 8000;

// Fire up server
app.listen(port);

// print friendly message to console
console.log("Server is listening on port " + port);
