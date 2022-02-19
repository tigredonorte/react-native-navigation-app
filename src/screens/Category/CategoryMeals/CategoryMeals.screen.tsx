import { useObservable } from '@ngneat/react-rxjs';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { distinctUntilChanged } from 'rxjs';
import { i18n } from '~i18n';
import { getScreenDimensions } from '~utils/responsiveness';
import { CategoryMealsScreenStyles } from './CategoryMeals.styles';

export interface CategoryMealsScreenInput {

}

export const CategoryMealsScreen = (props: CategoryMealsScreenInput) => {
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const Styles = CategoryMealsScreenStyles(screenData);
    return (
        <View style={Styles.container}>
            <Text>{i18n.t('CategoryMeals.HelloWorld')}</Text>
        </View>
    );
};