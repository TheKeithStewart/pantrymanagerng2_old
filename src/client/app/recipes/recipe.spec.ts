import {Recipe} from './recipe';
import {RecipeInstructions} from './recipeInstructions/recipeInstructions';

describe('Recipe', () => {

	let recipe: Recipe;

	beforeEach(() => {
		recipe = new Recipe(
			1,
			'Apple Pie',
			'Notes',
			'www.google.com',
			[
				new RecipeInstructions(1, "First Step"),
				new RecipeInstructions(2, "Second Step")
			],
			20,
			30
		);
	});

	it('has the id given in the constructor', () => {
		expect(recipe.recipeId).toEqual(1);
	});

	it('has title given in constructor', () => {
		expect(recipe.recipeTitle).toEqual('Apple Pie');
	});

	it('has the notes given in the constructor', () => {
		expect(recipe.notes).toEqual('Notes');
	})

	it('has the sourceURL given in the constructor', () => {
		expect(recipe.sourceURL).toEqual('www.google.com');
	})

	it('has the number of instructions given in the constructor', () => {
		expect(recipe.instructions.length).toEqual(2);
	})

	it('has the prepTime given in the constructor', () => {
		expect(recipe.prepTime).toEqual(20);
	});

	it('has the cookTime given in the constructor', () => {
		expect(recipe.cookTime).toEqual(30);

	});

	describe('calcTotalTime()', () => {
		it('should add the amount of the prepTime and cookTime together if both properties are numbers', () => {
			recipe.prepTime = 20;
			recipe.cookTime = 30;
			let totalTime = recipe.calcTotalTime();
			expect(totalTime).toEqual(50);
		});
		
		it('should return null if prepTime is null and totalTime is null', () => {
			recipe.prepTime = null;
			recipe.totalTime = null;
			let totalTime = recipe.calcTotalTime();
			expect(totalTime).toBeNull();
		});
		
		it('should return null if cookTime is null and totalTime is null', () => {
			recipe.cookTime = null;
			recipe.totalTime = null;
			let totalTime = recipe.calcTotalTime();
			expect(totalTime).toBeNull();
		});
		
		it('should return null if prepTime is not a number and totalTime is null', () => {
			recipe.prepTime = "not a number";
			recipe.totalTime = null;
			let totalTime = recipe.calcTotalTime();
			expect(totalTime).toBeNull();
		});
		
		it('should return null if cookTime is not a number and totalTime is null', () => {
			recipe.cookTime = "not a number";
			recipe.totalTime = null;
			let totalTime = recipe.calcTotalTime();
			expect(totalTime).toBeNull();
		});
				
		it('should return the value of totalTime if totalTime is not null and prepTime is null', () => {
			recipe.prepTime = null;
			recipe.totalTime = "35 minutes";
			let totalTime = recipe.calcTotalTime();
			expect(totalTime).toEqual("35 minutes");
		});
		
		it('should return the value of totalTime if totalTime is not null and cookTime is null', () => {
			recipe.cookTime = null;
			recipe.totalTime = "45 minutes";
			let totalTime = recipe.calcTotalTime();
			expect(totalTime).toEqual("45 minutes");
		});
	});
});