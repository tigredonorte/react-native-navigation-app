import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { IconButton } from 'react-native-paper';
import { LogoImage } from '~components/Navigation';
import { TText } from '~components/TText/TText.component';
import { i18n } from '~i18n';
import { theme } from '~styles/theme';

import { CategoryRoutes, FavoriteRoutes } from './Category.route.types';
import { CategoryScreen } from './screens/Category/Category.screen';
import { CategoryMealsScreen } from './screens/CategoryMeals/CategoryMeals.screen';
import { FavoritesScreen } from './screens/Favorites/Favorites.screen';
import { FilterScreen } from './screens/Filter/Filter.screen';
import { MealDetailsScreen } from './screens/MealDetails/MealDetails.screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const CategoryRouteData = () : React.ReactElement => {
  return (
    <Tab.Navigator 
      initialRouteName={CategoryRoutes.Category}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          const _color = focused ? theme.colors.primary: theme.colors.very_light_grey
          return (
            <IconButton
              icon={route.name === FavoriteRoutes.Favorites ? 'heart' : 'home'}
              color={_color}
              size={size}
            />
          );
        },
    })}
    >
      <Tab.Screen
          name={CategoryRoutes.Category}
          component={CategoryGetRoutes}
      />
      <Tab.Screen
        name={FavoriteRoutes.Favorites}
        component={FavoritesGetRoutes}
      />
    </Tab.Navigator>
  );
}

const defaultScreenOptions = {
  headerStyle: {
      backgroundColor: theme.colors.primary,
  },
  headerTintColor: theme.colors.white,
  headerTitle: (data: any) => {
      let title = i18n.t(`${data.children}.title`);
      if (title === `${data.children}.title`) {
          title = data.children;
      }
      return <TText style={{color: 'white'}}> {i18n.t(title)}</TText>
  },
};

function CategoryGetRoutes() : React.ReactElement {
  return (
      <Stack.Navigator 
        screenOptions={defaultScreenOptions} 
        initialRouteName={CategoryRoutes.CategoryHome}
      >
        <Stack.Screen
          name={CategoryRoutes.CategoryHome}
          component={CategoryScreen}
          options={{
            headerLeft: () => <LogoImage />,
          }}
        />
        <Stack.Screen
          name={CategoryRoutes.Meals}
          component={CategoryMealsScreen}
        />
         <Stack.Screen
          name={CategoryRoutes.MealDetails}
          component={MealDetailsScreen}
        />

        <Stack.Screen
          name={CategoryRoutes.Filter}
          component={FilterScreen}
        />
      </Stack.Navigator>
  );
};

function FavoritesGetRoutes() : React.ReactElement {
  return (
    <Stack.Navigator
      screenOptions={defaultScreenOptions}
      initialRouteName={FavoriteRoutes.FavoritesHome}
    >
        <Stack.Screen
          name={FavoriteRoutes.FavoritesHome}
          component={FavoritesScreen}
          options={{
            headerLeft: () => <LogoImage />,
          }}
        />
      </Stack.Navigator>
  );
}