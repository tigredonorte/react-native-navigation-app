import { MealsState } from "./meals.state";

interface MealsFullState {
    meals: MealsState;
}
export const getMealsState = (state: MealsFullState) => state.meals;
export const getMealById = (mealId: string) => (state: MealsFullState) => getMealsState(state).meals.find(
    it => it.id === mealId
)
export const getMealIsFavorite = (mealId: string) => (state: MealsFullState) => {
    const mealsState = getMealsState(state);
    return mealsState.favorites.some(it => it === mealId);
}
export const getFavorites = (state: MealsFullState) => {
    const mealsState = getMealsState(state);
    return mealsState.meals.filter(meal => mealsState.favorites.includes(meal.id));
}
export const getFilters = (state: MealsFullState) => getMealsState(state).filters;
export const getFilteredMeal = (state: MealsFullState) => getMealsState(state).filteredMeals;