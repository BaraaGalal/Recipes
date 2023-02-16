import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Sweat Chicken", 
      "Sweat Chicken", 
      "https://cdn.diys.com/wp-content/uploads/2017/07/easy-and-healthy-orange-chicken-recip.png",
      [
        new Ingredient('Chicken', 3),
        new Ingredient('sugar', 1),
        new Ingredient('Bread', 2),
      ]),
    new Recipe(
      "Bata", 
      "Basta ", 
      "https://images.kglobalservices.com/www.morningstarfarms.com/en_us/recipe/recipe_4328765/recip_img-4457282_garlic-lemon-chik-n-strips-and-pasta-recipe-a-4x5.jpg",
      [
        new Ingredient('Basta', 1),
        new Ingredient('white souse', 1),
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  changeRecipe() {
    return this.recipeSelected;
  }

  addIngredintsToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredints(ingredient);
  }
}
