import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  @Input()
  recipe: Recipe;

  recipeForm = this.fb.group({
    name: [''],
    picture: [''],
    description: ['']
  });

  constructor(
    private _recipeService: RecipeService,
    private _route: ActivatedRoute,
    private fb: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit() {
    this._recipeService
      .getRecipeById(this._route.snapshot.paramMap.get('id'))
      .subscribe(recipe => {
        this.recipe = recipe;
        this.recipeForm.patchValue({
          name: this.recipe.name,
          picture: this.recipe.picture,
          description: this.recipe.description
        });
      });
  }

  editRecipe() {
    this.recipe.name = this.recipeForm.get('name').value;
    this.recipe.picture = this.recipeForm.get('picture').value;
    this.recipe.description = this.recipeForm.get('description').value;
    this._recipeService.updateRecipe(this.recipe).subscribe(response => {
      this._router.navigate(['/recipes']);
    });
  }
}
