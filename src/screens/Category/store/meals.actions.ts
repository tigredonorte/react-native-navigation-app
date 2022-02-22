export enum MealsActionType {
    ToggleFavorite = 'ToggeFavorite'
}

export const ToggleFavoriteAction = (mealId: string) => ({ type: MealsActionType.ToggleFavorite, mealId })