import { Component, OnInit, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
    selectedRecipe :Recipe;
    constructor() { }

    ngOnInit() {
    }
    recipeSelectedItemFunction(recipe: Recipe) {
        this.selectedRecipe=recipe;
        console.log('ik vari hor');
    }
}
