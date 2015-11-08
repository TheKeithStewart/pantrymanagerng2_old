import {Component} from 'angular2/angular2';
import {Recipe} from './recipe'

@Component({
	selector: 'recipe-item',
	properties: ['recipe'],
	templateUrl: "app/recipes/recipeItem.component.html",
	bindings: [Recipe]
})
export class RecipeItemComponent {

}
