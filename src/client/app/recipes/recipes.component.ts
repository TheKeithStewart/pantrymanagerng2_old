import {Component, View, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {CanActivate, ROUTER_DIRECTIVES} from 'angular2/router';
import {RecipeService} from './recipe.service';
import {Recipe} from './recipe'
import {RecipeCardComponent} from './recipeCard.component';
import {RecipeFormComponent} from './recipeForm.component';
import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';

// interface IRecipeHash {
//     [index: number]: Recipe;
// }

@Component({
    selector: 'recipes'
})
@View({
    templateUrl: 'app/recipes/recipes.component.html',
    directives: [
        CORE_DIRECTIVES,
        RecipeCardComponent,
        ROUTER_DIRECTIVES,
        RecipeFormComponent
    ]
})
@CanActivate(() => tokenNotExpired())
export class RecipesComponent implements OnInit {
    public recipes: Array<Recipe>;

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
        // 		// 	new RecipeCardComponent(
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
    
    // @TODO: use this function on the template
    chooseRecipe(id: number) {
        // this._recipesService.getRecipe(id).then(recipe => this.recipe = recipe);
    }
    
    // onSubmit() {
    //     this.recipes.push(this.recipe);
    //     this.recipe = new Recipe();
    // }
}