import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { IconButton, Title } from 'react-native-paper';
import { distinctUntilChanged } from 'rxjs';
import { FetchStateEmpty } from '~components/FetchStatus/components/FetchStateEmpty';
import { FetchStateLoading } from '~components/FetchStatus/components/FetchStateLoading';
import { LogoImage } from '~components/Navigation';
import { i18n } from '~i18n';
import { theme } from '~styles/theme';
import { getScreenDimensions } from '~utils/responsiveness';

import { CategoryRoutes, CategoryStackType } from '../../Category.route.types';
import { IMealModel } from '../../data/Meal.interface';
import { MealsModel } from '../../data/Meal.model';
import { MealDetailsScreenStyles } from './MealDetails.styles';

export interface MealDetailsInput extends NativeStackScreenProps<CategoryStackType, CategoryRoutes.MealDetails> {

}

export const Favorite = (props: { mealId: string }) => {
    const model = MealsModel.getInstance();
    const [ isFavorite, setIsFavorite ] = useState<boolean>(model.isFavorite(props.mealId));

    
    return (
        <IconButton
            icon={isFavorite ? 'heart' : 'heart-outline'}
            color={theme.colors.white}
            size={20}
            onPress={() => {
                model.toggleFavorite(props.mealId);
                setIsFavorite(model.isFavorite(props.mealId));
            }}
        />
    );
}

export const MealDetailsScreen: React.FunctionComponent<MealDetailsInput> = (props: MealDetailsInput) => {
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ meal, setMeal ] = useState<IMealModel>();
    const Styles = MealDetailsScreenStyles(screenData);

    useEffect(() => {
        const mealId = props.route.params?.mealId;
        const model = MealsModel.getInstance();
        setLoading(true);
        model.getItem(mealId).subscribe(
            (item: IMealModel) => {
                setMeal(item);
                setLoading(false);
                props.navigation.setOptions({
                    title: item.title,
                    headerRight: () => <Favorite mealId={item.id} />,
                });
            }
        );
    }, []);

    if (loading) {
        return (<FetchStateLoading isLoading={true}></FetchStateLoading>);
    }

    if (!meal) {
        return (
            <FetchStateEmpty
                isEmpty={true}
                emptyText={i18n.t('MealDetails.EmptyTitle')}
            ></FetchStateEmpty>
        );
    }

    return (
        <ScrollView contentContainerStyle={Styles.container}>
            <Title>{meal.title}</Title>
        </ScrollView>
    );
};