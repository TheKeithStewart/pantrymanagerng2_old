// interface IIngredients {
	
// }

// export default class RecipeScraper {
// 	constructor() {
// 		console.log('RecipeScraper');
// 	}
	
// 	getIngredients() {
// 		return "getIngredients";
// 	}
// }

var scrapyard = require('scrapyard');

export function getRecipe(recipeUrl: string, cb: Function) {
      var recipeScraper = new RecipeScraper();
      recipeScraper.getRecipe(recipeUrl, function(recipeDom) {
            // console.log('## Ingredients')
            // if (recipeDom('li.ingredient').length > 0) {
            //       var ingredientElements = recipeDom('li.ingredient');
            //       for (var i = 0; i < ingredientElements.length; i++) {
            //             this.ingredients.push(ingredientElements[i].children[0].data);
            //       }
            // }
            
            cb();
      });
}

class Recipe {
      ingredients: Array<string>;
      instructions: Array<string>;
      
      constructor(public recipePageDom: any) {
            
      }
}

class RecipeScraper {

      getRecipe(recipeUrl: string, cb: Function) {
            var scraper = new scrapyard({
                  timeout: 300000,
                  retries: 5,
                  connections: 10
            });
            scraper.scrape(recipeUrl, function(err, recipeDom) {
                  if (err) {
                        console.error(err);
                  } else {
                        cb(recipeDom);
                        
                        
                        // console.log('## Ingredients')
                        // if ($('li.ingredient').length > 0) {
                        //       var ingredientElements = $('li.ingredient');
                        //       for (var i = 0; i < ingredientElements.length; i++) {
                        //             this.ingredients.push(ingredientElements[i].children[0].data);
                        //       }
                        // }

                        // console.log('', '## Procedures');
                        // if ($('h4').length > 0) {
                        //       var instructions = $('h4');
                        //       for (var i = 0; i < instructions.length; i++) {
                        //             if (instructions[i].children.length === 1 && instructions[i].next.next.name === 'p'
                        //             ) {
                        //                   // console.log("1. " + instructions[i].children[0].data, instructions[i].next.next.children[0].data);
                        //                   console.log("1. " + instructions[i].children[0].data);
                        //                   console.log(instructions[i].next);
                        //                   // var nextP = instructions[i].next.next;
                        //                   // while (nextP.next.next && nextP.next.next.name == 'p') {
                        //                   // 	nextP = nextP.next.next;
                        //                   // 	if (nextP.children.length === 1) {
                        //                   // 		console.log(nextP.children[0].data);
                        //                   // 	}
                        //                   // }
                        //             }
                        //       }
                        // }
                  }
            });
      }

      getIngredients() {





      }
}