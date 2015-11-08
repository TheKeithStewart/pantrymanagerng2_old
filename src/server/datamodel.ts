/// <reference path="./typings/tsd.d.ts" />

var falcorExpress = require('falcor-express');
var falcor = require('falcor');

var model = new falcor.Model({
	cache: {
		recipes: [
			{
				recipeId: "1",
				recipeTitle: "Recipe 1 test",
				notes: "Notes about recipe",
				sourceURL: "http://www.google.com"
			},
			{
				recipeId: "2",
				recipeTitle: "Recipe 2",
				notes: "Notes about recipe",
				sourceURL: "http://www.google.com"
			},
			{
				recipeId: "3",
				recipeTitle: "Recipe 3",
				notes: "Notes about recipe",
				sourceURL: "http://www.google.com"
			},
			{
				recipeId: "4",
				recipeTitle: "Recipe 4",
				notes: "Notes about recipe",
				sourceURL: "http://www.google.com"
			},
			{
				recipeId: "5",
				recipeTitle: "Recipe 5",
				notes: "Notes about recipe",
				sourceURL: "http://www.google.com"
			}
		]
	}
});

module.exports = falcorExpress.dataSourceRoute(function(req, res) {
	return model.asDataSource();
});