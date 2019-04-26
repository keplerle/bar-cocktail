import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../shared/model/recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  animations: [
    trigger('explainerAnim', [
    transition('* => *', [
      query('.col', style({ opacity: 0, transform: 'translateX(-40px)' }), {optional: true}),
      query('.col', stagger('500ms', [
        animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]), {optional: true}),
      query('.col', [
        animate(1000, style('*'))
      ], {optional: true})
    ])
  ])]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private _recipeService: RecipeService) {}

  ngOnInit() {
    this._recipeService.getRecipes().subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
        console.log(this.recipes);
      },
      error => console.log(error)
    );
  }

  onDeleteHandler(event: Recipe) {
    this.recipes.splice(this.recipes.indexOf(event));
  }
}
