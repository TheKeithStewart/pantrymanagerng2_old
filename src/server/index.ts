/// <reference path="./typings/tsd.d.ts" />

var Router = require('falcor-router');

import express = require('express');
var app = express();

var datamodel = require(__dirname + '/datamodel.js');
app.use('/model.json', datamodel);

// serve static files from current directory
app.use(express.static('./src/client'));
app.use(express.static('./'))

var server = app.listen(3000);