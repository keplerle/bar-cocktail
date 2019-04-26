import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  toggleFlag: boolean;

  @Input()
  recipe: Recipe;
  @Input()
  showDetailFlag = false;

  @Output() eventDelete: EventEmitter<Recipe> = new EventEmitter();
  constructor(private _recipeService: RecipeService) {
    this.toggleFlag = false;
  }

  ngOnInit() {
    console.log(this.showDetailFlag);
  }

  toggle() {
    this.toggleFlag = !this.toggleFlag;
  }

  deleteRecipe(id: string) {
    this._recipeService.deleteRecipe(id).subscribe(response => {
      this.eventDelete.emit(this.recipe);
    });
  }
}
