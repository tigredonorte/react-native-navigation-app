import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Caption, Card } from 'react-native-paper';
import { distinctUntilChanged, map } from 'rxjs';
import { FetchStateEmpty } from '~components/FetchStatus/components/FetchStateEmpty';
import { FetchStateLoading } from '~components/FetchStatus/components/FetchStateLoading';
import { i18n } from '~i18n';
import { CategoryRoutes, CategoryStackType } from '~screens/Category/Category.route.types';
import { getScreenDimensions, getStyle } from '~utils/responsiveness';
import { useSelector } from 'react-redux';
import { MealItem } from '../../components/MealsItem/MealsItem.component';
import { CategoryModel } from '../../store/models/Category.model';
import { getItemById } from '../../store/data/Category.mocks';
import { MealModel } from '../../store/models/Meal.model';
import { MealsService } from '../../store/services/Meal.service';
import { CategoryMealsScreenStyles } from './CategoryMeals.styles';
import { MealsState } from '~screens/Category/store/meals.state';

export interface CategoryScreenInput extends NativeStackScreenProps<CategoryStackType, CategoryRoutes.Meals> { }

export const CategoryHeader = (props: { item: CategoryModel }) => {
    return (
        <Card>
            <Card.Cover source={props.item.img} style={{height: 100}} />
            <Caption>{props.item.subtitle}</Caption>
        </Card>
    );
}

export const CategoryMealsScreen: React.FunctionComponent<CategoryScreenInput> = (props: CategoryScreenInput) => {
    
    const id = props.route.params?.id;
    const category = useSelector((state: { meals: MealsState }) => state.meals.categories.find(cat => cat.id === id))
    const meals = useSelector((state: { meals: MealsState }) => state.meals.meals.filter(meal => meal.categoryIds.indexOf(id) !== -1));
    const [ Styles ] = useObservable(getStyle(CategoryMealsScreenStyles));

    useEffect(() => {
        props.navigation.setOptions({
            title: i18n.t(category?.title ?? ''),
            headerStyle: {
                backgroundColor: category?.color,
            },
        });
    }, [category]);

    const navigate = (mealId: string) => {
        props.navigation.navigate(CategoryRoutes.MealDetails, { mealId });
    }

    if (!category) {
        return (
            <FetchStateEmpty
                isEmpty={true}
                emptyText={i18n.t('CategoryMeals.EmptyTitle', { id })}
            ></FetchStateEmpty>
        );
    }

    if (meals?.length === 0) {
       return (
        <>
            <CategoryHeader item={category} />
            <FetchStateEmpty
                isEmpty={true}
                emptyText={i18n.t('CategoryMeals.EmptyItems', { id })}
            ></FetchStateEmpty>
        </>
       )
    }

    return (
        <FlatList 
            numColumns={1}
            data={meals}
            keyExtractor={(meal: MealModel) => meal.id}
            ListHeaderComponent={() => (<CategoryHeader item={category} />)}
            renderItem={(meal) => <MealItem
                item={meal.item} 
                color={category.color} 
                onPress={navigate}
            />
        }
        />
    );
};
