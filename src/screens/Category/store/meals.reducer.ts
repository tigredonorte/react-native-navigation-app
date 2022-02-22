import { MealsState, initialState } from "./category.state";
import { MealsActionType, ToggleFavoriteAction } from "./meals.actions";

const mealsReducers: {[s: string]: Function} = {
    [MealsActionType.ToggleFavorite]: (state: MealsState, action: ReturnType<typeof ToggleFavoriteAction>): MealsState => {
        const index = state.favorites.findIndex(id => id === action.mealId);
        if(index === -1) {
            return  {
                ...state,
                favorites: [
                    ...state.favorites,
                    action.mealId
                ]
            };
        }

        const favorites = [...state.favorites];
        favorites.splice(index, 1);
        return { ...state, favorites };
    }
};

export const mealsReducer = (state: MealsState = initialState, action: any): MealsState => {
    if (mealsReducers[action.type]) {
        try {
            const newState = mealsReducers[action.type](state, action);
            return newState;
        } catch (error) {
            console.error({ action, error });
        }
    }
    return state;
}
