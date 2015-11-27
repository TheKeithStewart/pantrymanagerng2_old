import {Component, View} from 'angular2/angular2';
import {Recipe} from './recipe'

@Component({
	selector: 'recipe-item',
	inputs: ['recipe']
})
@View({
	templateUrl: "app/recipes/recipeItem.component.html"
})
export class RecipeItemComponent {

}
