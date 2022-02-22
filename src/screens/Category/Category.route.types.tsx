export enum CategoryRoutes {
    Home = "Home",
    Category = "Category",
    CategoryHome = "Category/Home",
    Meals = "Category/Meals",
    MealDetails = "Category/MealDetails",
    Filter = "Category/Filter",
    FilterHome = "Filter/Home",
}

export enum FavoriteRoutes {
    Favorites = "Favorites",
    FavoritesHome = "Favorites/Home",
}

export enum FilterRoutes {
    Filter = "Filter",
    FilterHome = "Filter/Home",
}

export type CategoryStackType = {
    [CategoryRoutes.CategoryHome]: {};
    [CategoryRoutes.Meals]: { id: string; };
    [CategoryRoutes.MealDetails]: { mealId: string; };
    [FavoriteRoutes.FavoritesHome]: {};
    [CategoryRoutes.FilterHome]: {};
};