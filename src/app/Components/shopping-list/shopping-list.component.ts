import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredints: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredints = this.shoppingListService.getIngredints();
    this.shoppingListService.ingrediensChanged
        .subscribe(
          (ingredints: Ingredient[]) => {
            this.ingredints = ingredints;
          }
        )
  }
}

