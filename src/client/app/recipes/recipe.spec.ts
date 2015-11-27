import {Recipe} from './recipe';

describe('Recipe', () => {
	
	it('has title given in constructor', () => {
		let recipe = new Recipe('1', 'Apple Pie');
		expect(recipe.recipeTitle).toEqual('Apple Pie');
	});
	
	it('has the id given in the constructor', () => {
		let recipe = new Recipe('1', 'Apple Pie');
		expect(recipe.recipeId).toEqual('1');
	});
});