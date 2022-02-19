import { useObservable } from '@ngneat/react-rxjs';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { distinctUntilChanged } from 'rxjs';
import { i18n } from '~i18n';
import { getScreenDimensions } from '~utils/responsiveness';

import { CategoryScreenStyles } from './Category.styles';

export interface CategoryScreenInput {

}

export const CategoryScreen = (props: CategoryScreenInput) => {
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const Styles = CategoryScreenStyles(screenData);

    return (
        <View style={Styles.container}>
            <Text>{i18n.t('Category.HelloWorld')}</Text>
            <Button mode="contained" onPress={() => console.log('Pressed')}>{i18n.t('Category.Button')}</Button>
        </View>
    );
};