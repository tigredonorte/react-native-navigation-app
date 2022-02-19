import { pt } from "./pt.lang";

export const en: typeof pt = {
  HelloWorld: "Hello World!",
  Category: {
    title: "Categories screen",
    HelloWorld: "Category screen works",
    GoToMeals: 'Go to Meals Screen'
  },
  CategoryMeals: {
    title: "Category meals",
    HelloWorld: "Category Meals screen {{num}} works",
    GoToMeals: 'Go to Meal Details Screen',
    AnotherCategory: 'Go to another Category',
    GoBack: "Voltar",
  },
  Favorites: {
    title: "Favorites",
    HelloWorld: "Favorites screen works",
  },
  Filters: {
    title: "Filters",
    HelloWorld: "Filter screen works",
  },
  MealDetails: {
    title: "Meal Details",
    HelloWorld: "MealDetails screen works",
    GoToMeals: "Open another recipe",
    GoBack: 'Last Recipe',
    GoBackAll: 'Back to the begining'
  }
}
