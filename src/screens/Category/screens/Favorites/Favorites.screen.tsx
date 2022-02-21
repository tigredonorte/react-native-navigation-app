import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { distinctUntilChanged } from 'rxjs';
import { TText } from '~components/TText/TText.component';
import { i18n } from '~i18n';
import { getScreenDimensions } from '~utils/responsiveness';
import { FavoritesStyles } from './Favorites.styles';

export interface FavoriteInput extends NativeStackScreenProps<any> { }

export const FavoritesScreen: React.FunctionComponent<FavoriteInput> = (props: FavoriteInput) => {

    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const Styles = FavoritesStyles(screenData);

    return (
        <View style={Styles.container}>
            <TText>{i18n.t('Favorites.HelloWorld')}</TText>
        </View>
    );
};