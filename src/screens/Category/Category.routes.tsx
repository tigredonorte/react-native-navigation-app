import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { IconButton, Provider } from 'react-native-paper';
import { LogoImage } from '~components/Navigation';
import { TText } from '~components/TText/TText.component';
import { i18n } from '~i18n';
import { theme } from '~styles/theme';

import { CustomDrawerContent } from './Category.drawer';
import { CategoryRoutes } from './Category.route.types';
import { CategoryScreen } from './screens/Category/Category.screen';
import { CategoryMealsScreen } from './screens/CategoryMeals/CategoryMeals.screen';
import { FavoritesScreen } from './screens/Favorites/Favorites.screen';
import { FilterScreen } from './screens/Filter/Filter.screen';
import { FilteredScreen } from './screens/Filtered/Filtered.screen';
import { MealDetailsScreen } from './screens/MealDetails/MealDetails.screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const CategoryRouteData = () : React.ReactElement => {
  return (
      <Drawer.Navigator
        initialRouteName={CategoryRoutes.Home}
        drawerContent={(props): React.ReactElement => <CustomDrawerContent {...props} />}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen 
          name={CategoryRoutes.Home} 
          component={HomeGetRoutes}
          options={() => ({
            title: i18n.t('Category.Title'),
            drawerIcon: ({ size, color }): React.ReactNode => (<IconButton icon='home' size={20} color={color}/>)
          })}
        />
        <Drawer.Screen 
          name={CategoryRoutes.Filter} 
          component={FilterGetRoutes}
          options={() => ({
            title: i18n.t('Filter.Title'),
            drawerIcon: ({ size, color }): React.ReactNode => (<IconButton icon='filter' size={20} color={color}/>)
          })}
        />
      </Drawer.Navigator>
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
    return (
      <TText style={{color: 'white'}}> {title}</TText>
    )
  },
};

function HomeGetRoutes() : React.ReactElement {
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
              icon={route.name === CategoryRoutes.Favorites ? 'heart' : 'home'}
              color={_color}
              size={size}
            />
          );
        },
    })}
    >
      <Tab.Screen name={CategoryRoutes.Category} component={CategoryGetRoutes} />
      <Tab.Screen name={CategoryRoutes.Favorites} component={FavoritesGetRoutes} />
    </Tab.Navigator>
  );
}

const ScrrenOptionsWithMenu = ({ navigation }: any) => ({
  headerLeft: () => (
    <View style={{flexDirection: 'row'}}>
      <IconButton icon='menu' color={theme.colors.light_grey} onPress={() => navigation.openDrawer()} />
      <LogoImage />
    </View>
  ),
});

function CategoryGetRoutes() : React.ReactElement {
  return (
      <Stack.Navigator
        screenOptions={defaultScreenOptions} 
        initialRouteName={CategoryRoutes.CategoryHome}
      >
        <Stack.Screen
          name={CategoryRoutes.CategoryHome}
          component={CategoryScreen}
          options={ScrrenOptionsWithMenu}
        />
        <Stack.Screen name={CategoryRoutes.Meals} component={CategoryMealsScreen}/>
        <Stack.Screen name={CategoryRoutes.MealDetails} component={MealDetailsScreen} />
      </Stack.Navigator>
  );
};

function FavoritesGetRoutes() : React.ReactElement {
  return (
    <Stack.Navigator
      screenOptions={defaultScreenOptions}
      initialRouteName={CategoryRoutes.FavoritesHome}
    >
        <Stack.Screen
          name={CategoryRoutes.FavoritesHome}
          component={FavoritesScreen}
          options={ScrrenOptionsWithMenu}
        />
      </Stack.Navigator>
  );
}


function FilterGetRoutes() : React.ReactElement {
  return (
    <Provider theme={theme}>
      <Stack.Navigator
        screenOptions={defaultScreenOptions}
        initialRouteName={CategoryRoutes.FilterHome}
      >
          <Stack.Screen
            name={CategoryRoutes.FilterHome}
            component={FilterScreen}
            options={ScrrenOptionsWithMenu}
          />
          <Stack.Screen
            name={CategoryRoutes.Filtered}
            component={FilteredScreen}
          />
        </Stack.Navigator>
    </Provider>
  );
}