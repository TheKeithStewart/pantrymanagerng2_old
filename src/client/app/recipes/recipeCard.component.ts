import {Component, View} from 'angular2/angular2';
import {Recipe} from './recipe'

@Component({
	selector: 'recipe-card',
	inputs: ['recipe']
})
@View({
	templateUrl: "app/recipes/recipeCard.component.html"
})
export class RecipeCardComponent {

}
