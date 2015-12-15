var scrapyard = require('scrapyard');

export function getRecipe(recipeUrl: string, cb: Function) {
    var recipeScraper = new RecipeScraper();
    recipeScraper.getRecipe(recipeUrl, function(recipeDom) {
        var recipe = new Recipe(recipeDom, recipeUrl);

        cb(recipe);
    });
}

class Recipe {
    sourceUrl: string;
    title: string;
    ingredients: Array<string> = [];
    instructions: Array<string> = [];

    constructor(public recipePageDom: any, url: string) {
        this.sourceUrl = url;
        this.getIngredients();
        // this.getInstructions();
        this.getTitle();
    }
    
    getIngredients() {
        if (this.recipePageDom('li.ingredient').length > 0) {
            var ingredientElements = this.recipePageDom('li.ingredient');
            for (var i = 0; i < ingredientElements.length; i++) {
                this.ingredients.push(ingredientElements[i].children[0].data);
            }
        }
    }
    
    // getInstructions() {
    //     if (this.recipePageDom('h4').length > 0) {
    //         var instructions = this.recipePageDom('h4');
    //         for (var i = 0; i < instructions.length; i++) {
    //             if (instructions[i].children.length === 1 && instructions[i].next.next.name === 'p'
    //             ) {
    //                 this.instructions.push(instructions[i].children[0].data);
                    
    //                 var next = instructions[i].next;
    //                 // This is not getting all of the instructions
    //                 while (next && next.next && next.next.name === 'p') {
    //                     next = next.next;
    //                     this.instructions.push(next.children[0].data);
    //                 }
    //             }
    //         }
    //     }
    // }
    
    getTitle() {
        if (this.recipePageDom('h1').length > 0) {
            // most likely the first H1 on the page is the title of the recipe
            var title = this.recipePageDom('h1').text();
            this.title = title.replace(/(\n|\t)/g, '')
        }
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
                //                   // var next = instructions[i].next.next;
                //                   // while (next.next.next && next.next.next.name == 'p') {
                //                   // 	next = next.next.next;
                //                   // 	if (next.children.length === 1) {
                //                   // 		console.log(next.children[0].data);
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