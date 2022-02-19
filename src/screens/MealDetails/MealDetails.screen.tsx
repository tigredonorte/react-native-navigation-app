import { useObservable } from '@ngneat/react-rxjs';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { distinctUntilChanged } from 'rxjs';
import { i18n } from '~i18n';
import { getScreenDimensions } from '~utils/responsiveness';
import { MealDetailsScreenStyles } from './MealDetails.styles';

export interface MealDetailsScreenInput {

}

export const MealDetailsScreen = (props: MealDetailsScreenInput) => {
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const Styles = MealDetailsScreenStyles(screenData);

    return (
        <View style={Styles.container}>
            <Text>{i18n.t('MealDetails.HelloWorld')}</Text>
        </View>
    );
};