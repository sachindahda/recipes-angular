import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('apple', 5),
        new Ingredient('tomatoes', 10),
    ];
    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index:number,newIngredient: Ingredient) {
        this.getIngredient(index);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]) {
        // ingredients.forEach((ingredient: Ingredient) => {
        //     this.addIngredient(ingredient);
        // });
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}