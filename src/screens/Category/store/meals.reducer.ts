import { MealsActionType, SetFiltersAction, ToggleFavoriteAction } from './meals.actions';
import { initialState, MealsState } from './meals.state';

const mealsReducers: {[s: string]: (state: MealsState, action: any) => MealsState } = {
    [MealsActionType.ToggleFavorite]: (state, action: ReturnType<typeof ToggleFavoriteAction>) => {
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
    },

    [MealsActionType.SetFilters]: (state: MealsState, action: ReturnType<typeof SetFiltersAction>) => {
        const filteredMeals = state.meals.filter(meal => {
            for ( const i in action.filters) {
                // @ts-ignore
                if (!action.filters[i] || meal[i]) {
                    continue;
                }
                return false;
            }
            return true;
        });
        return {
            ...state,
            filters: action.filters,
            filteredMeals: filteredMeals || []
        };
    }
};

export const mealsReducer = (state: MealsState = initialState, action: any): MealsState => {
    if (mealsReducers[action.type]) {
        try {
            const newState = mealsReducers[action.type](state, action);
            return newState ?? state;
        } catch (error) {
            console.error({ action, error });
        }
    }
    return state;
}
