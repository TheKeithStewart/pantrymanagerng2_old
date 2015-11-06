import {RecipesComponent} from './recipes.component';
import {PantryComponent} from './pantry.component';

export var Routes = {
	recipes: {
		path: '/',
		as: 'Recipes',
		component: RecipesComponent
	},
	pantry: {
		path: '/pantry',
		as: 'Pantry',
		component: PantryComponent
	}
}

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);