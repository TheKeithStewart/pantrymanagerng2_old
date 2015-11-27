import {Component, View, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {CanActivate} from 'angular2/router';
import {RecipeService} from './recipe.service';
import {Recipe} from './recipe'
import {RecipeItemComponent} from './recipeItem.component';
import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';

// interface IRecipeHash {
//     [index: number]: Recipe;
// }

@Component({
    selector: 'recipes'
})
@View({
    templateUrl: 'app/recipes/recipeList.component.html',
    directives: [CORE_DIRECTIVES, RecipeItemComponent]
})
@CanActivate(() => tokenNotExpired())
export class RecipeListComponent implements OnInit {
    recipes: Array<Recipe>;

    constructor(private _recipesService: RecipeService) { }

    getRecipes() {
        this.recipes = [];

        this._recipesService.getRecipes()
            .then((response) => {
                for (var i in response) {
                    this.recipes.push(response[i]);
                }
            });
        
        
        

            
        // this._recipesService.getRecipes()
        //     .then(response => {
        //         let recipeArray: Array<Recipe> = [];
        //         for (var i in response) {
        //             recipeArray.push(response[i]);
        //         }
        //         return recipeArray;
        //     }).then((recipeArray: Array<Recipe>) => {
        //         console.log(recipeArray);
        //         this.recipes = recipeArray;
        //     })
        
        // return this.recipes;


		

        // this._recipesService.getRecipes()
        // 	.then((recipeHash: IRecipeHash) => {
        // 		console.log(recipeHash);
        // 		for (var i in recipeHash) {
        // 			this.recipes.push(recipeHash[i]);		

        // 			// this.recipes.push(recipeHash[i])
        // 		}
        // 		console.log('this.recipes', this.recipes);
				
        // 		// 				this.recipes.push(
        // 		// 	new RecipeItemComponent(
        // 		// 		recipeHash[i].recipeId,
        // 		// 		recipeHash[i].recipeTitle,
        // 		// 		recipeHash[i].notes,
        // 		// 		recipeHash[i].sourceURL
        // 		// 	)
        // 		// )
        // 	});

    }

    onInit() {
        this.getRecipes();
    }
}