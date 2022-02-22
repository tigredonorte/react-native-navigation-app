import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Caption, Card } from 'react-native-paper';
import { distinctUntilChanged } from 'rxjs';
import { FetchStateEmpty } from '~components/FetchStatus/components/FetchStateEmpty';
import { FetchStateLoading } from '~components/FetchStatus/components/FetchStateLoading';
import { i18n } from '~i18n';
import { CategoryRoutes, CategoryStackType } from '~screens/Category/Category.route.types';
import { getScreenDimensions } from '~utils/responsiveness';

import { MealItem } from '../../components/MealsItem/MealsItem.component';
import { CategoryModel } from '../../store/models/Category.model';
import { getItemById } from '../../store/data/Category.mocks';
import { MealModel } from '../../store/models/Meal.model';
import { MealsService } from '../../store/services/Meal.service';
import { CategoryMealsScreenStyles } from './CategoryMeals.styles';

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
    
    const [ item, setItem ] = useState<CategoryModel>();
    const [ loadingMeals, setLoadingMeals ] = useState<boolean>(true);
    const [ meals, setMeals ] = useState<MealModel[]>([]);
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const Styles = CategoryMealsScreenStyles(screenData);

    const navigate = (mealId: string) => {
        props.navigation.navigate(CategoryRoutes.MealDetails, { mealId });
    }

    useEffect(() => {
        const item = getItemById(props.route.params?.id);
        props.navigation.setOptions({
            title: i18n.t(item?.title ?? ''),
            headerStyle: {
                backgroundColor: item?.color,
            },
        });

        const mealsModel = MealsService.getInstance();
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
            numColumns={1}
            data={meals}
            keyExtractor={(meal: MealModel) => meal.id}
            ListHeaderComponent={() => (<CategoryHeader item={item} />)}
            renderItem={(meal) => <MealItem
                item={meal.item} 
                color={item.color} 
                onPress={navigate}
            />
        }
        />
    );
};
