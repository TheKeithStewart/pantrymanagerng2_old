import {Component, OnInit, Input, FORM_DIRECTIVES} from 'angular2/angular2';
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