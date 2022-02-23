import { pt } from "./pt.lang";

export const en: typeof pt = {
  HelloWorld: "Hello World!",
  ['Category/Home']: {
    title: "Meals Categories",
  },
  Category: {
    Title: 'Categories',
    Details: 'Details',
    Empty: {
      Title: 'Categories not found!'
    },
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
    Empty: {
      Title: "You don't have any favorites!",
      Button: "See Meals"
    }
  },
  Filtered: {
    PageTitle: 'Filtered',
    Empty: {
      Title: "You don't have any filtered items!",
      Button: "Filters page"
    }
  },
  ['Filter/Home']: {
    title: "Filters",
  },
  Filter: {
    Title: "Filters",
    PageTitle: "Search the recipe",
    Amount: "{{amount}} Items found"
  },
  MealDetails: {
    title: "Meal Details",
    EmptyTitle: "Meal not found!",
    ViewRecipe: "View Recipe",
    Ingredients: "Ingredients",
    Steps: "Steps",
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
