import {RecipeInstructions} from './recipeInstructions/recipeInstructions';

export class Recipe {
	constructor(
		public recipeId?: number,
		public recipeTitle?: string,
		public notes?: string,
		public sourceURL?: string,
		public instructions?: Array<RecipeInstructions>,
		public prepTime?: any,
		public cookTime?: any,
		public totalTime?: string
	) {
		if (!instructions) {
			this.instructions = [];
		}
	}

	calcTotalTime(): number | string {
		if (this.prepTime && this.cookTime && !isNaN(this.prepTime) && !isNaN(this.cookTime)) {
			return this.prepTime + this.cookTime;
		} else if ((!this.prepTime || !this.cookTime) && this.totalTime) {
			return this.totalTime;
		} else {
			return null;
		}
	}
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