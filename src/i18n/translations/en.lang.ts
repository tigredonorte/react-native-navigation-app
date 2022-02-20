import { pt } from "./pt.lang";

export const en: typeof pt = {
  HelloWorld: "Hello World!",
  Category: {
    title: "Meals Categories",
    Details: 'Details',
    Status: {
      Error: {
        Title: 'Falha ao listar as categorias!',
        TryAgain: 'Tente outra vez',
      },
      Empty: {
        Title: 'Nenhuma categoria encontrada',
        TryAgain: 'Cadastrar categoria',
      }
    }
  },
  CategoryMeals: {
    EmptyTitle: "Category with id {{id}} not found!",
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
