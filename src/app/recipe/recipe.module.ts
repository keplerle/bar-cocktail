import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeDetailComponent } from './routed/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './routed/recipe-list/recipe-list.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { StrToArrayPipe } from '../shared/pipe/str-to-array.pipe';
import { RecipeOverviewComponent } from './routed/recipe-overview/recipe-overview.component';
import { RouterModule } from '@angular/router';
import { RecipeCreateComponent } from './routed/recipe-create/recipe-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeEditComponent } from './routed/recipe-edit/recipe-edit.component';
@NgModule({
  declarations: [
    RecipeDetailComponent,
    RecipeListComponent,
    StrToArrayPipe,
    RecipeOverviewComponent,
    RecipeCreateComponent,
    RecipeEditComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecipeModule { }
