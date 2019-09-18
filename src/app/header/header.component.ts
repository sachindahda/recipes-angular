import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { RecipesService } from '../recipe/recipes.service';
import { Recipe } from '../recipe/recipe.model';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() featureSelected = new EventEmitter<string>();
    constructor(private dataStorageRecipe: DataStorageService,private recipeService:RecipesService,private authService:AuthService) { }

    ngOnInit() {
    }
    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }

    OnSaveData() {
        this.dataStorageRecipe.storeRecipes().subscribe(
            (response: Response) => {
                console.log(response);
            }
        )
    }
    onFetchData(){
        this.dataStorageRecipe.getRecipes().subscribe(
            (recipes:Recipe[])=>{
                this.recipeService.recipeChanged.next(recipes);
            }
        )
    }
    onLogOut(){
        this.authService.logOut();
    }

}
