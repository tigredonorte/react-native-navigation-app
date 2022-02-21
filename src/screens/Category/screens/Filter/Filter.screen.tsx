import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { distinctUntilChanged } from 'rxjs';
import { TText } from '~components/TText/TText.component';
import { i18n } from '~i18n';
import { CategoryRoutes, CategoryStackType } from '~screens/Category/Category.route.types';
import { getScreenDimensions } from '~utils/responsiveness';
import { FilterScreenStyles } from './Filter.styles';

export interface FilterScreenInput extends NativeStackScreenProps<CategoryStackType, CategoryRoutes.Filter> { }

export const FilterScreen: React.FunctionComponent<FilterScreenInput> = (props: FilterScreenInput) => {
    
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const Styles = FilterScreenStyles(screenData);
    return (
        <View style={Styles.container}>
            <TText>{i18n.t('Filters.HelloWorld')}</TText> 
        </View>
    );
};