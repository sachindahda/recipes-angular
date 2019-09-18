import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipesService } from '../recipe/recipes.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Recipe } from '../recipe/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private httpService: Http, private recipeService: RecipesService, private authService: AuthService) {

    }
    storeRecipes() {
        const token = this.authService.getToken();

        return this.httpService.put(
            'https://recipebook-1f698.firebaseio.com/recipes.json?auth=' + token,
            this.recipeService.getRecipes()
        );
    }
    getRecipes() {
        const token = this.authService.getToken();
        return this.httpService.get('https://recipebook-1f698.firebaseio.com/recipes.json?auth=' + token).map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log('nader');
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
        )
    }
}  