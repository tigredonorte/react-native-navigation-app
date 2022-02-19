import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { distinctUntilChanged } from 'rxjs';
import { i18n } from '~i18n';
import { getScreenDimensions } from '~utils/responsiveness';

import { CategoryMealsScreenStyles } from './CategoryMeals.styles';

export interface CategoryScreenInput extends NativeStackScreenProps<any> { }

export const CategoryMealsScreen: React.FunctionComponent<CategoryScreenInput> = (props: CategoryScreenInput) => {
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const Styles = CategoryMealsScreenStyles(screenData);

    const num = props.route.params?.categoryNumber;
    return (
        <View style={Styles.container}>
            <Text>{i18n.t('CategoryMeals.HelloWorld', { num })}</Text>
            <Button mode="contained" onPress={() => props.navigation.navigate('MealDetails')}>
                {i18n.t('CategoryMeals.GoToMeals')}
            </Button>
            <Button mode="contained" onPress={
                () => props.navigation.replace('Category/Meals', { categoryNumber: Math.ceil(Math.random() * 10000)})
            }>
                {i18n.t('CategoryMeals.AnotherCategory')}
            </Button>
            <Button mode="outlined" onPress={
                () => props.navigation.pop()
            }>
                {num} - {i18n.t('CategoryMeals.GoBack')}
            </Button>
        </View>
    );
};