import { Component, OnInit, EventEmitter } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css'],
    providers: [RecipesService]
})
export class RecipeComponent implements OnInit {
    constructor() { }

    ngOnInit() {
      
    }
}
