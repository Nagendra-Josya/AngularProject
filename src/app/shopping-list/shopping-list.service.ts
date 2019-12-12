import {Ingredient} from '../ingredient.model'
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
ingredientsChanged = new EventEmitter<Ingredient>();
   private ingredients : Ingredient[] = [  
        new Ingredient('Apple', 5),
        new Ingredient('Potato', 10)];

        getIngredients(){
            return this.ingredients.slice();
        }

        AddIngredient(ingredient : Ingredient){
            this.ingredients.push(ingredient);
            return this.ingredientsChanged.emit(this.ingredients.slice());
        }
}