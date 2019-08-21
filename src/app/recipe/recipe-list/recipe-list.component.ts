import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Prontha', 'test teksjafdldfs', 'https://recipes.timesofindia.com/thumb/53109843.cms?imgsize=244340&width=800&height=800'),
        new Recipe('Panneer', 'test 2222', 'https://images.britcdn.com/wp-content/uploads/2014/08/indian-recipes.jpg'),
    ];
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    constructor() { }

    ngOnInit() {
    }

    onRecipeSelectedEventEmitted(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
        console.log('fir tn emitted');
    }
}
