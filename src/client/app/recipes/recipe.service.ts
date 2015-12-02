// declare var falcor;

import {Recipe} from './recipe';
import {Injectable} from 'angular2/core';

var RECIPES = [
	new Recipe(1, "Recipe 1", "Notes about recipe", "http://www.google.com", null, 10, 25),
	new Recipe(2, "Recipe 2", "Notes about recipe", "http://www.google.com", null, 8, 12),
	new Recipe(3, "Recipe 3", "Notes about recipe", "http://www.google.com", null, null, null, "1 1/2 hours"),
	new Recipe(4, "Recipe 4", "Notes about recipe", "http://www.google.com"),
	new Recipe(5, "Recipe 5", "Notes about recipe", "http://www.google.com")
];

// probably should use the Injectable keyword
export class RecipeService {
	
	
	getRecipes() {
		// var model = new falcor.Model({
		// 	source: new falcor.HttpDataSource('/model.json')
		// });

		// return model.get('recipes[0..9]["recipeId", "recipeTitle", "notes", "sourceURL"]').then(function(response) {
		// 	return response.json.recipes;
		// });
		
		return Promise.resolve(RECIPES);
	}
	
	getRecipe(id: number) {
		return Promise.resolve(RECIPES)
			.then(recipes => recipes.filter(r => r.recipeId === id)[0]);
	}
}