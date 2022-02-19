import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CategoryRouteData, CategoryRouteParameter } from '~screens/Category/Category.routes';
import { FavoritesRouteData, FavoritesRouteParameter } from '~screens/Favorites/Favorites.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackType = {
    Category: CategoryRouteParameter,
    Favorites: FavoritesRouteParameter,
};

export type propsStack = NativeStackNavigationProp<StackType>;

const { Navigator, Screen } = createNativeStackNavigator<StackType>();

export const Stack = () => (
    <Navigator initialRouteName='Category'>
        { CategoryRouteData.getRoutes() }
        { FavoritesRouteData.getRoutes() }
    </Navigator>
);
