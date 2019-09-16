import { Recipe } from './recipe.model'
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipesService {
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe('Prontha', 'test teksjafdldfs', 'https://recipes.timesofindia.com/thumb/53109843.cms?imgsize=244340&width=800&height=800', [
            new Ingredient('onion', 1),
            new Ingredient('curd', 1)
        ]),
        new Recipe('Panneer', 'test 2222', 'https://images.britcdn.com/wp-content/uploads/2014/08/indian-recipes.jpg',
            [
                new Ingredient('gobi', 1),
                new Ingredient('cheese', 2),
            ]),
    ];
    constructor(private shoppingListServie: ShoppingListService) {

    }
    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListServie.addIngredients(ingredients);
    }

    getRecipe(id: number) {
        return this.getRecipes()[id];
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());

    }
    deleteServie(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}