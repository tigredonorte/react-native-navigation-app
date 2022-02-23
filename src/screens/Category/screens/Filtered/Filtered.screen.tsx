import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { Caption, Card } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { FetchStateEmpty } from '~components/FetchStatus/components/FetchStateEmpty';
import { i18n } from '~i18n';
import { getFilteredMeal } from '~screens/Category/store/meals.selectors';
import { getStyle } from '~utils/responsiveness';

import { CategoryRoutes, CategoryStackType } from '../../Category.route.types';
import { MealItem } from '../../components/MealsItem/MealsItem.component';
import { CategoryModel } from '../../store/models/Category.model';
import { MealModel } from '../../store/models/Meal.model';
import { FilteredScreenStyles } from './Filtered.styles';

export interface FilteredScreenInput extends NativeStackScreenProps<CategoryStackType, CategoryRoutes.Filtered> { }

export const CategoryHeader = (props: { item: CategoryModel }) => {
    return (
        <Card>
            <Card.Cover source={props.item.img} style={{height: 100}} />
            <Caption>{props.item.subtitle}</Caption>
        </Card>
    );
}

export const FilteredScreen: React.FunctionComponent<FilteredScreenInput> = (props: FilteredScreenInput) => {
    
    const [ Styles ] = useObservable(getStyle(FilteredScreenStyles));
    const meals = useSelector(getFilteredMeal);

    useEffect(() => {
        props.navigation.setOptions({
            title: i18n.t('Filtered.PageTitle')
        });
    }, []);

    const navigate = (mealId: string) => props.navigation.navigate(CategoryRoutes.MealDetails, { mealId });

    if (!meals) {
        return (
            <FetchStateEmpty
                isEmpty={true}
                emptyText={i18n.t('Filtered.Empty.Title')}
            ></FetchStateEmpty>
        );
    }

    if (meals?.length === 0) {
       return (
            <FetchStateEmpty
                isEmpty={true}
                emptyText={i18n.t('Filtered.Empty.Items')}
            ></FetchStateEmpty>
       )
    }

    return (
        <FlatList 
            numColumns={1}
            data={meals}
            keyExtractor={(meal: MealModel) => meal.id}
            renderItem={(meal) => <MealItem
                item={meal.item}
                onPress={navigate}
            />
        }
        />
    );
    return (<></>);
};
