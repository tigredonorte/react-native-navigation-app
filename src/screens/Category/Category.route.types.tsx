export enum CategoryRoutes {
    Category = "Category",
    Meals = "Category/Meals",
    MealDetails = "Category/MealDetails",
    Filter = "Category/Filter",
    Favorites = "Category/Favorites",
}

export type CategoryStackType = {
    [CategoryRoutes.Category]: {};
    [CategoryRoutes.Meals]: { id: string; };
    [CategoryRoutes.MealDetails]: { id: string; };
    [CategoryRoutes.Filter]: {};
    [CategoryRoutes.Favorites]: {};
};