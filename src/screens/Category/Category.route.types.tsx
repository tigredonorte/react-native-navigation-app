export enum CategoryRoutes {
    Home = "Home",
    Category = "Category",
    CategoryHome = "Category/Home",
    Meals = "Category/Meals",
    MealDetails = "Category/MealDetails",
    Favorites = "Favorites",
    FavoritesHome = "Favorites/Home",
    Filter = "Filter",
    FilterHome = "Filter/Home",
    Filtered = "Filter/Filtered"
}

export type CategoryStackType = {
    [CategoryRoutes.CategoryHome]: {};
    [CategoryRoutes.Meals]: { id: string; };
    [CategoryRoutes.MealDetails]: { mealId: string; };
    [CategoryRoutes.Favorites]: {};
    [CategoryRoutes.FavoritesHome]: {};
    [CategoryRoutes.FilterHome]: {};
    [CategoryRoutes.Filter]: {};
    [CategoryRoutes.FilterHome]: {};
    [CategoryRoutes.Filtered]: {};
};