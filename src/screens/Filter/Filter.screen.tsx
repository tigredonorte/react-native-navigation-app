import { useObservable } from '@ngneat/react-rxjs';
import React from 'react';
import { Text, View } from 'react-native';
import { distinctUntilChanged } from 'rxjs';
import { i18n } from '~i18n';
import { getScreenDimensions } from '~utils/responsiveness';
import { FilterScreenStyles } from './Filter.styles';

export interface FilterScreenInput {

}

export const FilterScreen = (props: FilterScreenInput) => {
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const Styles = FilterScreenStyles(screenData);
    return (
        <View style={Styles.container}>
            <Text>{i18n.t('Filters.HelloWorld')}</Text>
        </View>
    );
};