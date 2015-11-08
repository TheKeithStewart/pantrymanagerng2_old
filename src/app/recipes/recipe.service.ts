//import * as falcor from 'falcor';
import {Recipe} from './recipe';

export class RecipeService {
	getRecipes() {
		var model = new falcor.Model({
			cache: {
				recipes: [
					{
						recipeId: "1",
						recipeTitle: "Recipe 1",
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
				]
			}
		});

		var test = model.get('recipes[0..9]["recipeId", "recipeTitle", "notes", "sourceURL"]').then(function(response) {
			return response.json.recipes;
		});

		return test;

		// var RECIPES: Recipe[] = [
		// 	{ name: "Recipe 1" },
		// 	{ name: "Recipe 2" }
		// ]

		// return Promise.resolve(RECIPES);
	}
}