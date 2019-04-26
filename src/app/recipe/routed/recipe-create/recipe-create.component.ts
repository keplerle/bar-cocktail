import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/recipe.service';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { Ingredient } from 'src/app/shared/model/ingredient.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {

recipe: Recipe;


  constructor(private _recipeService: RecipeService,
    private _router: Router) {
    this.recipe = new Recipe();
  }

  ngOnInit() {}

  createRecipe() {
    this.recipe.ingredients = [{'ingredientId': 1 } as Ingredient];
    this._recipeService.createRecipe(this.recipe).subscribe(response =>
      this._router.navigate(['/recipes'])
    );

  }
}
