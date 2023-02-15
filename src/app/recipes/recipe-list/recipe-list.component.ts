import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test", "Description", "https://cdn.diys.com/wp-content/uploads/2017/07/easy-and-healthy-orange-chicken-recip.png"),
    new Recipe("Test1", "Description1", "https://images.kglobalservices.com/www.morningstarfarms.com/en_us/recipe/recipe_4328765/recip_img-4457282_garlic-lemon-chik-n-strips-and-pasta-recipe-a-4x5.jpg"),
  ];

  @Output() recipeDetalisItem = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeDetalis: Recipe) {
    this.recipeDetalisItem.emit(recipeDetalis);
  }

}
