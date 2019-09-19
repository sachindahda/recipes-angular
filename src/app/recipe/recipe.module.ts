import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeComponent } from './recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';

import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    declarations: [RecipeStartComponent,
        RecipeEditComponent,
        RecipeComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
    ]
    , imports: [ 
        ReactiveFormsModule,
        RecipeRoutingModule,
        SharedModule
    ]
}
)
export class RecipeModule {

}  