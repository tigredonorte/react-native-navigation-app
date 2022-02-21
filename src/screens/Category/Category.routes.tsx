import { createStackNavigator } from '@react-navigation/stack';
import { LogoImage } from '~components/Navigation';

import { CategoryScreen } from './screens/Category/Category.screen';
import { CategoryMealsScreen } from './screens/CategoryMeals/CategoryMeals.screen';
import { FavoritesScreen } from './screens/Favorites/Favorites.screen';
import { FilterScreen } from './screens/Filter/Filter.screen';
import { MealDetailsScreen } from './screens/MealDetails/MealDetails.screen';

const { Screen } = createStackNavigator();

export type CategoryStackType = {
  Category: {},
  ['Category/Meals']: {},
  ['Category/MealDetails']: {},
  ['Category/Filter']: {},
  ['Category/Favorites']: {}
};

export const CategoryRouteData = {
  getRoutes: () : React.ReactElement => {
    return (
        <>
          <Screen
            name='Category'
            component={CategoryScreen}
            options={{
              headerLeft: () => <LogoImage />,
            }}
          />
          <Screen
            name='Category/Meals'
            component={CategoryMealsScreen}
          />
           <Screen
            name='MealDetails'
            component={MealDetailsScreen}
          />

          <Screen
            name='Filter'
            component={FilterScreen}
          />

          <Screen
            name='Favorites'
            component={FavoritesScreen}
          />
        </>
    );
  } 
}
  