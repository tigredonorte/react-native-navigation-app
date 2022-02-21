import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { CategoryStackType } from '~screens/Category/Category.route.types';
import { CategoryRouteData } from '~screens/Category/Category.routes';

export type StackType = CategoryStackType;

export type propsStack = NativeStackNavigationProp<StackType>;

export const Routes = () => (
    <NavigationContainer>
        { CategoryRouteData() }
    </NavigationContainer>
);
