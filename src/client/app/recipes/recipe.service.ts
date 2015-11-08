declare var falcor;

import {Recipe} from './recipe';
import {Injectable} from 'angular2/core';

@Injectable()
export class RecipeService {
	getRecipes() {
		// var model = new falcor.Model({
		// 	source: new falcor.HttpDataSource('/model.json')
		// });

		// return model.get('recipes[0..9]["recipeId", "recipeTitle", "notes", "sourceURL"]').then(function(response) {
		// 	return response.json.recipes;
		// });
		
		var recipes = [
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
		];
		
		return Promise.resolve(recipes);
	}
}