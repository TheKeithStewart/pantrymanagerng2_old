/// <reference path="./server/typings/tsd.d.ts" />

// var Router = require('falcor-router');



import recipescraper = require('./server/recipescraper');
//obj.myMethod("test");

//import recipescraper = require('./server/recipescraper');



import express = require('express');
var app = express();

var datamodel = require(__dirname + '/server/datamodel.js');
app.use('/model.json', datamodel);

// serve static files from current directory
app.use(express.static('./src/client'));
app.use(express.static('./'));
process.chdir('./');


app.get('/scraperecipe', function(req, res) {
	var recipeUrl = req.query.recipeUrl;
	recipescraper.getRecipe(recipeUrl, function(recipe) {
		res.send(200, recipe);
	})
});


app.get('*', function(req, res) {
	res.sendFile(__dirname + '/client/index.html')
});

var server = app.listen(3000);