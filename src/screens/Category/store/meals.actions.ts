export enum MealsActionType {
    ToggleFavorite = 'ToggeFavorite',
    SetFilters = 'SetFilters',
}

export const ToggleFavoriteAction = (mealId: string) => ({ type: MealsActionType.ToggleFavorite, mealId });
export const SetFiltersAction = (filters: {[s: string]: boolean}) => ({ type: MealsActionType.SetFilters, filters });