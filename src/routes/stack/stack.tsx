import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { CategoryRouteData, CategoryRouteParameter } from '~screens/Category/Category.routes';
import { FavoritesRouteData, FavoritesRouteParameter } from '~screens/Favorites/Favorites.routes';
import { MealDetailsRouteData, MealDetailsRouteParameter } from '~screens/MealDetails/MealDetails.routes';

export type StackType = {
    Category: CategoryRouteParameter,
    Favorites: FavoritesRouteParameter,
    MealDetails: MealDetailsRouteParameter,
};

export type propsStack = NativeStackNavigationProp<StackType>;

const { Navigator, Screen } = createNativeStackNavigator<StackType>();

export const Stack = () => (
    <Navigator initialRouteName='Category'>
        { CategoryRouteData.getRoutes() }
        { FavoritesRouteData.getRoutes() }
        { MealDetailsRouteData.getRoutes() }
    </Navigator>
);
