import {Component, OnInit, FORM_DIRECTIVES, Input} from 'angular2/angular2';
import {CanActivate, RouteParams} from 'angular2/router';
import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';

import {Recipe} from './recipe';
import {RecipeService} from './recipe.service';
import {RecipeInstructionsComponent} from './recipeInstructions/recipeInstructions.component';
import {RecipeInstructions} from './recipeInstructions/recipeInstructions';

@Component({
	selector: 'recipe-form',
	templateUrl: 'app/recipes/recipeForm.component.html',
	directives: [FORM_DIRECTIVES, RecipeInstructionsComponent],
	inputs: ['recipes']
})
@CanActivate(() => tokenNotExpired())
export class RecipeFormComponent implements OnInit {
	recipe: Recipe;
	@Input() recipes: Array<Recipe>;

	constructor(private _recipeService: RecipeService, private _routeParams: RouteParams) { }

	onInit() {
		let id = +this._routeParams.get('id');
		if (id) {
			this._recipeService.getRecipe(id).then(recipe => this.recipe = recipe);
		} else {
			this.recipe = new Recipe();
		}
	}
	
	onSubmit() {
        this.recipes.push(this.recipe);
        this.recipe = new Recipe();
	}
	
	addInstruction() {
		let instruction = new RecipeInstructions();
		this.recipe.instructions.push(instruction);
	}
}