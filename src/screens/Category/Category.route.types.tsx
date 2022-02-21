export enum CategoryRoutes {
    Category = "Category",
    CategoryHome = "Category/Home",
    Meals = "Category/Meals",
    MealDetails = "Category/MealDetails",
    Filter = "Category/Filter"
}

export enum FavoriteRoutes {
    Favorites = "Favorites",
    FavoritesHome = "Favorites/Home",
}

export type CategoryStackType = {
    [CategoryRoutes.CategoryHome]: {};
    [CategoryRoutes.Meals]: { id: string; };
    [CategoryRoutes.MealDetails]: { mealId: string; };
    [CategoryRoutes.Filter]: {};
    [FavoriteRoutes.FavoritesHome]: {};
};