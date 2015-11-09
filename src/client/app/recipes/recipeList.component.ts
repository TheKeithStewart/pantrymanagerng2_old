import {Component, View, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';
import {RecipeService} from './recipe.service';
import {Recipe} from './recipe'
import {RecipeItemComponent} from './recipeItem.component';

interface IRecipeHash {
    [index: number]: Recipe;
}

@Component({
    selector: 'recipes'
})
@View({
    templateUrl: 'app/recipes/recipeList.component.html',
    directives: [CORE_DIRECTIVES, RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
    public recipes: Recipe[];

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