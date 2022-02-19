import { useObservable } from '@ngneat/react-rxjs';
import React from 'react';
import { Text, View } from 'react-native';
import { distinctUntilChanged } from 'rxjs';
import { i18n } from '~i18n';
import { getScreenDimensions } from '~utils/responsiveness';
import { FavoritesStyles } from './Favorites.styles';

export interface FavoritesInput {

}

export const FavoritesScreen = (props: FavoritesInput) => {
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const Styles = FavoritesStyles(screenData);
    return (
        <View style={Styles.container}>
        <Text>{i18n.t('Favorites.HelloWorld')}</Text>
        </View>
    );
};