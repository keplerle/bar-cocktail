import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe/routed/recipe-list/recipe-list.component';
import { RecipeOverviewComponent } from './recipe/routed/recipe-overview/recipe-overview.component';
import { RecipeCreateComponent } from './recipe/routed/recipe-create/recipe-create.component';
import { RecipeEditComponent } from './recipe/routed/recipe-edit/recipe-edit.component';

const routes: Routes = [
{
  path: 'recipes',
  component: RecipeListComponent
},
{
  path: 'recipes/create',
  component: RecipeCreateComponent
},
{
  path: 'recipes/edit/:id',
  component: RecipeEditComponent
},
{
  path: 'recipes/:id',
  component: RecipeOverviewComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
