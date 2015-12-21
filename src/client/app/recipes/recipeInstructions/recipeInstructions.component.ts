import {Component, OnInit, Input} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RecipeInstructions} from './recipeInstructions';

@Component({
	selector: 'recipe-instructions',
	templateUrl: 'app/recipes/recipeInstructions/recipeInstructions.component.html',
	directives: [FORM_DIRECTIVES]
})
export class RecipeInstructionsComponent implements OnInit {
	@Input() instruction: RecipeInstructions;
	
	constructor() { }

	onInit() { }
}