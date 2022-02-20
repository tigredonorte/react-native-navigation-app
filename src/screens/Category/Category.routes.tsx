import { createStackNavigator } from '@react-navigation/stack';
import { BackButton, LogoImage, LogoTitle } from '~components/Navigation';

import { CategoryScreen } from './Category.screen';
import { CategoryMealsScreen } from './CategoryMeals/CategoryMeals.screen';

const { Screen } = createStackNavigator();

export type CategoryRouteParameter = { };

export const CategoryRouteData = {
  getRoutes: () : React.ReactElement => {
    return (
        <>
          <Screen
            name='Category'
            component={CategoryScreen}
            options={{
              headerLeft: () => <LogoImage />,
              headerTitle: () => <LogoTitle title="Category.title"/>,
              headerRight: () => <BackButton navigationBackRoute='Category/Meals'></BackButton>,
            }}
          />
          <Screen
            name='Category/Meals'
            component={CategoryMealsScreen}
            options={{
              // headerLeft: () => <LogoImage />,
              headerTitle: () => <LogoTitle title="CategoryMeals.title"/>,
              // headerRight: () => <BackButton navigationBackRoute='Home'></BackButton>,
            }}
          />
        </>
    );
  } 
}
  