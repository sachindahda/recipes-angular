import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeComponent } from './recipe.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from './../auth/auth-guard.service';

const recipes: Routes = [
    {
        path: '', component: RecipeComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
        ]
    },
]

@NgModule(
    {
        imports: [
            RouterModule.forChild(recipes)
        ],
        exports: [RouterModule],
        providers:[AuthGuard]
    }
)

export class RecipeRoutingModule {

}