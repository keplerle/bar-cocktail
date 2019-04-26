import { Injectable } from '@angular/core';
import { Recipe } from '../../shared/model/recipe.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RecipeService {

private SERVER_URL = 'http://10.0.1.35:8080/api/v1/recipes';

  constructor(private _httpClient: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this._httpClient.get<Recipe[]>(this.SERVER_URL);
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this._httpClient.get<Recipe>(`${this.SERVER_URL}/${id}`);
  }

  createRecipe(newRecipe: Recipe): Observable<Recipe> {
    return this._httpClient.post<Recipe>(this.SERVER_URL, newRecipe);
  }

  deleteRecipe(id: string): Observable<Recipe> {
    return this._httpClient.delete<Recipe>(`${this.SERVER_URL}/${id}`);
  }

  updateRecipe(newRecipe: Recipe): Observable<Recipe> {
    return this._httpClient.patch<Recipe>(this.SERVER_URL, newRecipe);
  }
}
