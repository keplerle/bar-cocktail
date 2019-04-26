import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss']
})
export class RecipeOverviewComponent implements OnInit {
recipe: Recipe;
  constructor(
    private _recipeService: RecipeService,
    private _route: ActivatedRoute
    ) { }

  ngOnInit() {
    this._recipeService.getRecipeById(this._route.snapshot.paramMap.get('id')).subscribe(recipe => {
      this.recipe = recipe;
    });
  }

}
