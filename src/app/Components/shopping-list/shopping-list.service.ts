import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingrediensChanged = new EventEmitter<Ingredient[]>();

  private ingredints: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("Mango", 8)
  ];

  constructor() { }

  getIngredints() {
    return this.ingredints.slice();
  }
  
  addIngredint(ingredient: Ingredient) {
    this.ingredints.push(ingredient)
    this.ingrediensChanged.emit(this.ingredints.slice());
  }

  addIngredints(ingredients: Ingredient[]) {
    // ingredients.forEach(item => {
    //   this.addIngredint(item)
    // });

    this.ingredints.push(...ingredients);
    this.ingrediensChanged.emit(this.ingredints.slice());
  }
}
