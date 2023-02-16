import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './Components/recipes/recipes.component';
import { HeaderComponent } from './Components/header/header.component';
import { RecipeListComponent } from './Components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Components/shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './Components/shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
