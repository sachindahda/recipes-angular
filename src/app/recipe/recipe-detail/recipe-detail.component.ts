import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipesService } from '../recipes.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    @Input() recipe: Recipe;
    // constructor(private shoppingListServiceingredientsService:ShoppingListService) { }

    constructor(private recipeService: RecipesService) {

    }
    ngOnInit() {
        console.log('recipe', this.recipe);
    }

    // addIngredientsToShoppingList(){
    //     this.shoppingListServiceingredientsService.addIngredients(this.recipe.ingredients);
    // }
    addIngredientsToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
            ;
    }
}
