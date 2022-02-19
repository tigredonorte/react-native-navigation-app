import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { distinctUntilChanged } from 'rxjs';
import { i18n } from '~i18n';
import { getScreenDimensions } from '~utils/responsiveness';
import { MealDetailsScreenStyles } from './MealDetails.styles';

export interface FavoriteInput extends NativeStackScreenProps<any> {}

export const MealDetailsScreen: React.FunctionComponent<FavoriteInput> = (props: FavoriteInput) => {
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const Styles = MealDetailsScreenStyles(screenData);
    const num = props.route.params?.num ?? 1;

    const backButton = (num > 1) ? (
        <>
            <Button mode="outlined" onPress={
                () => props.navigation.pop()
            }>
                {num} - {i18n.t('MealDetails.GoBack')}
            </Button>
            <Button mode="outlined" onPress={
                () => props.navigation.popToTop()
            }>
                {num} - {i18n.t('MealDetails.GoBackAll')}
            </Button>
        </>
    ) : null;

    return (
        <View style={Styles.container}>
            <Text>{i18n.t('MealDetails.HelloWorld')}</Text>
            <Button mode="contained" onPress={
                () => props.navigation.push('MealDetails', { num: num + 1})
            }>
                {num} - {i18n.t('MealDetails.GoToMeals')}
            </Button>
            { backButton }
        </View>
    );
};