import {Component, View} from 'angular2/angular2';
import {Recipe} from './recipe';
import {Ng2DurationPipe} from './../common/ng2-duration/ng2-duration.pipe';

@Component({
	selector: 'recipe-card',
	inputs: ['recipe'],
	templateUrl: "app/recipes/recipeCard.component.html",
	pipes: [Ng2DurationPipe]
})
export class RecipeCardComponent {

}
