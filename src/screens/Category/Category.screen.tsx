import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { distinctUntilChanged, map } from 'rxjs';
import { i18n } from '~i18n';
import { StackType } from '~routes/stack/stack';
import { getScreenDimensions } from '~utils/responsiveness';

import { CategoryStyles } from './Category.styles';

export interface CategoryScreenInput extends NativeStackScreenProps<any> { }

export const CategoryScreen: React.FunctionComponent<CategoryScreenInput> = (props: CategoryScreenInput) => {
    const [ Styles ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged(), map(CategoryStyles)));

    return (
        <View style={Styles.container}>
            <Text>{i18n.t('Category.HelloWorld')}</Text>
            <Button mode="contained" onPress={() => props.navigation.navigate('Category/Meals', { categoryNumer: 1 })}>
                {i18n.t('Category.GoToMeals')}
            </Button>
        </View>
    );
};