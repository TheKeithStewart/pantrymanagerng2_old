import {RecipeListComponent} from './recipes/recipeList.component';
import {PantryComponent} from './pantry/pantry.component';

export var Routes = {
	recipes: {
		path: '/',
		as: 'RecipeList',
		component: RecipeListComponent
	},
	pantry: {
		path: '/pantry',
		as: 'Pantry',
		component: PantryComponent
	}
}

export const APP_ROUTES = Object.keys(Routes).map(r => Routes[r]);