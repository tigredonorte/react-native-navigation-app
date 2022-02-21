import { createStackNavigator } from '@react-navigation/stack';
import { LogoImage } from '~components/Navigation';

import { CategoryScreen } from './screens/Category/Category.screen';
import { CategoryMealsScreen } from './screens/CategoryMeals/CategoryMeals.screen';
import { FavoritesScreen } from './screens/Favorites/Favorites.screen';
import { FilterScreen } from './screens/Filter/Filter.screen';
import { MealDetailsScreen } from './screens/MealDetails/MealDetails.screen';

const { Screen } = createStackNavigator();

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
            name='Category/MealDetails'
            component={MealDetailsScreen}
          />

          <Screen
            name='Category/Filter'
            component={FilterScreen}
          />

          <Screen
            name='Category/Favorites'
            component={FavoritesScreen}
          />
        </>
    );
  } 
}
  