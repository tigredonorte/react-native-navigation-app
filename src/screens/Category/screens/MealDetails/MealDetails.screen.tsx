import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { distinctUntilChanged } from 'rxjs';
import { TText } from '~components/TText/TText.component';
import { i18n } from '~i18n';
import { CategoryRoutes, CategoryStackType } from '~screens/Category/Category.route.types';
import { getScreenDimensions } from '~utils/responsiveness';

import { MealDetailsScreenStyles } from './MealDetails.styles';

export interface MealDetailsInput extends NativeStackScreenProps<CategoryStackType, CategoryRoutes.MealDetails> {}

export const MealDetailsScreen: React.FunctionComponent<MealDetailsInput> = (props: MealDetailsInput) => {
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const Styles = MealDetailsScreenStyles(screenData);
    const num = props.route.params?.id ?? 1;

    return (
        <View style={Styles.container}>
            <TText>{i18n.t('MealDetails.HelloWorld')}</TText>
            <Button mode="contained" onPress={
                () => props.navigation.push(CategoryRoutes.MealDetails, { id: num + 1})
            }>
                {num} - {i18n.t('MealDetails.GoToMeals')}
            </Button>
        </View>
    );
};