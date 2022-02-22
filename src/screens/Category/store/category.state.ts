import { CategoryListMock } from './data/Category.mocks';
import { MealsListMock } from './data/Meal.mocks';
import { CategoryModel } from './models/Category.model';
import { MealModel } from './models/Meal.model';

export interface MealsState {
    categories: CategoryModel[];
    meals: MealModel[];
    filteredMeals: MealModel[];
    favorites: string[];
};

export const initialState: MealsState = {
    categories: CategoryListMock,
    meals: MealsListMock,
    filteredMeals: MealsListMock,
    favorites: []
}
