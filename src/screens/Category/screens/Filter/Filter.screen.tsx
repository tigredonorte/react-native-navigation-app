import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { distinctUntilChanged } from 'rxjs';
import { TText } from '~components/TText/TText.component';
import { i18n } from '~i18n';
import { getScreenDimensions } from '~utils/responsiveness';

import { CategoryStackType, FilterRoutes } from '../../Category.route.types';
import { FilterScreenStyles } from './Filter.styles';

export interface FilterScreenInput extends NativeStackScreenProps<CategoryStackType, FilterRoutes.FilterHome> { }

export const FilterScreen: React.FunctionComponent<FilterScreenInput> = (props: FilterScreenInput) => {
    
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const Styles = FilterScreenStyles(screenData);
    return (
        <View style={Styles.container}>
            <TText>{i18n.t('Filter.HelloWorld')}</TText> 
        </View>
    );
};