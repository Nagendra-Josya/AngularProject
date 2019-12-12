import {Recipe} from '../recipes/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();
    private recipes : Recipe[] =[
        new Recipe('Test Recipe', 'Test Desciption', 
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_Logo.jpeg'),
        new Recipe('Test Recipe', 'Test Desciption', 
        'fhttps://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjwsLjupqnmAhWv4HMBHReQAwsQjRx6BAgBEAQ&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D2ahUKEwi3luTqpqnmAhWO73MBHZN5A0gQjRx6BAgBEAQ%26url%3Dhttps%253A%252F%252Fwww.shutterstock.com%252Fcategory%252Fnature%26psig%3DAOvVaw2cUAp2R_7drdVrdYUOQ6Zp%26ust%3D1576006223649781&psig=AOvVaw2cUAp2R_7drdVrdYUOQ6Zp&ust=1576006223649781'),
        new Recipe('Test Recipe', 'Test Desciption', 
        'fhttps://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjwsLjupqnmAhWv4HMBHReQAwsQjRx6BAgBEAQ&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D2ahUKEwi3luTqpqnmAhWO73MBHZN5A0gQjRx6BAgBEAQ%26url%3Dhttps%253A%252F%252Fwww.shutterstock.com%252Fcategory%252Fnature%26psig%3DAOvVaw2cUAp2R_7drdVrdYUOQ6Zp%26ust%3D1576006223649781&psig=AOvVaw2cUAp2R_7drdVrdYUOQ6Zp&ust=1576006223649781')];


            getRecipe(){
                return this.recipes.slice();
            }

    }