import { pt } from "./pt.lang";

export const en: typeof pt = {
  HelloWorld: "Hello World!",
  ['Category/Home']: {
    title: "Meals Categories",
  },
  Category: {
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
    EmptyItems: "There is no meals in this category"
  },
  ['Favorites/Home']: {
    title: "Favoritos",
  },
  Favorites: {
    HelloWorld: "Favorites screen works",
  },
  Filters: {
    title: "Filters",
    HelloWorld: "Filter screen works",
  },
  MealDetails: {
    title: "Meal Details",
    EmptyTitle: "Meal not found!",
    ViewRecipe: "View Recipe",
  },
  Content: {
    affordability: {
      title: 'Affordability',
      affordable: 'Affordable',
      pricey: 'Pricey',
      luxurious: 'Luxurious'
    },
    complexity: {
      title: 'Complexity',
      simple: 'Simple',
      challenging: 'Challenging',
      hard: 'Hard',
    },
    duration: {
      title: 'Duration',
      minutes: 'minutes'
    },
    Labels: {
      GlutenFree: 'Gluten Free',
      Vegan: 'Vegan',
      Vegetarian: 'Vegetarian',
      LactoseFree: 'Lactose Free',
    }
  }
}
