import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css'],
    providers: [RecipesService]
})
export class RecipeComponent implements OnInit {
    selectedRecipe: Recipe;
    constructor(private recipeService: RecipesService) { }

    ngOnInit() {
        this.recipeService.recipeSelected.
            subscribe(
                (recipe: Recipe) => {
                    this.selectedRecipe = recipe;
                }
            )
    }
}
