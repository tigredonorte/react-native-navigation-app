import { CategoryListMock } from './data/Category.mocks';
import { MealsListMock } from './data/Meal.mocks';
import { CategoryModel } from './models/Category.model';
import { MealModel } from './models/Meal.model';

export interface CategoryState {
    categories: CategoryModel[];
    meals: MealModel[];
    filteredMeals: MealModel[];
    favorites: MealModel[];
};

export const initialState: CategoryState = {
    categories: CategoryListMock,
    meals: MealsListMock,
    filteredMeals: MealsListMock,
    favorites: []
}
