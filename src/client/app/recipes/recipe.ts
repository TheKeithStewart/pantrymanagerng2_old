/// <reference path="./../../../../typings/tsd.d.ts" />

export class Recipe {
	recipeId: string;
	recipeTitle: string;
	notes: string;
	sourceURL: string;
}




// export interface IRecipe {
// 		recipeId: string;
// 		recipeTitle: string;
// 		ingredients: IPantryItem[];
// 		instructions: IRecipeInstructions[];
// 		prepTime: ITime;
// 		cookTime: ITime;
// 		notes: string;
// 		sourceURL: string;
// 		calculateTotalTime(): ITime;
// 	}

// 	export interface IPantryItem {
// 		itemId: string;
// 		itemName: string;
// 	}

// 	export interface IRecipeInstructions {
// 		order: number;
// 		description: string;
// 	}

// 	export interface ITime {
// 		amount: number;
// 		unit: string;
// 	}

// 	export class Recipe implements IRecipe {

// 		constructor(public recipeId: string,
// 			public recipeTitle: string,
// 			public ingredients: IPantryItem[],
// 			public instructions: IRecipeInstructions[],
// 			public prepTime: ITime,
// 			public cookTime: ITime,
// 			public notes: string,
// 			public sourceURL: string) {

// 		}
		
// 		/**
// 		 * Adds the prep time to the cook time to calculate the total time to complete the recipe
// 		 * 
// 		 * @return	{ITime} - total time to complete the recipe 
// 		 */
// 		calculateTotalTime() {
// 			var totalTime: ITime;
			
// 			totalTime.amount = this.prepTime.amount + this.cookTime.amount;
// 			totalTime.unit = this.prepTime.unit;
			
// 			return totalTime;
// 		}

// 	}