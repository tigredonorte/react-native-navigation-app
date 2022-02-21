import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Caption, Card } from 'react-native-paper';
import { distinctUntilChanged } from 'rxjs';
import { FetchStateEmpty } from '~components/FetchStatus/components/FetchStateEmpty';
import { FetchStateLoading } from '~components/FetchStatus/components/FetchStateLoading';
import { i18n } from '~i18n';
import { MealItem } from '~screens/Category/components/MealsItem/MealsItem.component';
import { IMealModel } from '~screens/Category/data/Meal.interface';
import { MealsModel } from '~screens/Category/data/Meal.model';
import { getScreenDimensions } from '~utils/responsiveness';

import { ICategoryModel } from '../../data/Category.interface';
import { getItemById } from '../../data/Category.mocks';
import { CategoryMealsScreenStyles } from './CategoryMeals.styles';

export interface CategoryScreenInput extends NativeStackScreenProps<any> { }

export const CategoryHeader = (props: { item: ICategoryModel }) => {
    return (
        <Card>
            <Card.Cover source={props.item.img} style={{height: 100}} />
            <Caption>{props.item.subtitle}</Caption>
        </Card>
    );
}

export const CategoryMealsScreen: React.FunctionComponent<CategoryScreenInput> = (props: CategoryScreenInput) => {
    
    const [ item, setItem ] = useState<ICategoryModel>();
    const [ loadingMeals, setLoadingMeals ] = useState<boolean>(true);
    const [ meals, setMeals ] = useState<IMealModel[]>([]);
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const Styles = CategoryMealsScreenStyles(screenData);

    useEffect(() => {
        const item = getItemById(props.route.params?.id);
        props.navigation.setOptions({
            title: i18n.t(item?.title ?? ''),
            headerStyle: {
                backgroundColor: item?.color,
            },
        });

        const mealsModel = new MealsModel();
        setLoadingMeals(true);
        mealsModel.loadData(item?.id ?? '').subscribe(data => {
            setMeals(data);
            setLoadingMeals(false);
        });
        setItem(item);
    }, []);


    if (!item) {
        return (
            <FetchStateEmpty
                isEmpty={true}
                emptyText={i18n.t('CategoryMeals.EmptyTitle', { id: props.route.params?.id })}
            ></FetchStateEmpty>
        );
    }

    if (loadingMeals) {
        return (
            <>
                <CategoryHeader item={item} />
                <FetchStateLoading isLoading={true}></FetchStateLoading>
            </>
        );
    }

    if (meals?.length === 0) {
       return (
        <>
            <CategoryHeader item={item} />
            <FetchStateEmpty
                isEmpty={true}
                emptyText={i18n.t('CategoryMeals.EmptyItems', { id: props.route.params?.id })}
            ></FetchStateEmpty>
        </>
       )
    }

    return (
        <FlatList 
            keyExtractor={(meal: IMealModel) => meal.id}
            data={meals}
            renderItem={(meal) => <MealItem {...props} item={meal.item} color={item.color} />}
            numColumns={1}
            ListHeaderComponent={() => (<CategoryHeader item={item} />)}
        />
    );
};
