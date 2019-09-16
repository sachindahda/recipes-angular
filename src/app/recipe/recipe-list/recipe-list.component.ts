import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    recipes: Recipe[];
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    constructor(private recipeService: RecipesService) { }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipes();
        this.subscription = this.recipeService.recipeChanged.subscribe(
            (recipes: Recipe[]) => {
                this.recipes = recipes;
            }
        )
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
