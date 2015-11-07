import {Component, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {RecipeService} from './recipe.service';
import {Recipe} from './recipe';

interface IRecipeHash {
	[index: number]: Recipe;
}

@Component({
	selector: 'recipes',
	templateUrl: 'app/recipes/recipeList.component.html',
	directives: [CORE_DIRECTIVES]
})
export class RecipeListComponent implements OnInit {
	public recipes: Recipe[];

	constructor(private _recipesService: RecipeService) { }

	getRecipes() {
		this.recipes = [];

		this._recipesService.getRecipes()
			.then((recipeHash: IRecipeHash) => {
				for (var i in recipeHash) {
					this.recipes.push(recipeHash[i])
				}
			});

		return this.recipes;
	}

	onInit() {
		this.recipes = this.getRecipes();
	}
}