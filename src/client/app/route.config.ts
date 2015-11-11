import {RecipeListComponent} from './recipes/recipeList.component';
import {PantryComponent} from './pantry/pantry.component';
import {HomeComponent} from './home/home.component';

export var Routes = {
	home: {
		path: '/',
		as: 'Home',
		component: HomeComponent
	},	
	recipes: {
		path: '/recipes',
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