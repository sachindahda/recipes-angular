import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    @Input() recipe: Recipe;
    id: number;

    constructor(private recipeService: RecipesService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                    this.recipe = this.recipeService.getRecipe(this.id);
                }
            );
    }
    OnEdit(){
        this.router.navigate(['edit'],{relativeTo:this.route});
        // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
    }
    // addIngredientsToShoppingList(){
    //     this.shoppingListServiceingredientsService.addIngredients(this.recipe.ingredients);
    // }
    addIngredientsToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
            ;
    }
    onDeleteRecipe(){
        this.recipeService.deleteServie(this.id);
        this.router.navigate(['/recipes']);
    }
}
