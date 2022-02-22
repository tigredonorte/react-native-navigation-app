import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { FetchStateEmpty } from '~components/FetchStatus/components/FetchStateEmpty';
import { FetchStateLoading } from '~components/FetchStatus/components/FetchStateLoading';
import { i18n } from '~i18n';
import { CategoryRoutes, CategoryStackType, FavoriteRoutes } from '~screens/Category/Category.route.types';
import { MealItem } from '~screens/Category/components/MealsItem/MealsItem.component';
import { getFavorites } from '~screens/Category/store/meals.selectors';
import { MealModel } from '~screens/Category/store/models/Meal.model';
import { getStyle } from '~utils/responsiveness';

import { FavoritesStyles } from './Favorites.styles';

export interface FavoritesInput extends NativeStackScreenProps<CategoryStackType, FavoriteRoutes.FavoritesHome> { }

export const FavoritesScreen: React.FunctionComponent<FavoritesInput> = (props: FavoritesInput) => {

    const favorites = useSelector(getFavorites);
    const [ Styles ] = useObservable(getStyle(FavoritesStyles));
    
    const navigate = (mealId: string) => {
        props.navigation.navigate(CategoryRoutes.MealDetails, { mealId });
    }

    if (!favorites) {
        return (
            <FetchStateLoading isLoading={true}></FetchStateLoading>
        );
    }

    if (favorites.length === 0) {
        return (
            <FetchStateEmpty
                isEmpty={true}
                emptyText={i18n.t('Favorites.Empty.Title')}
                emptyBtnText={i18n.t('Favorites.Empty.Button')}
                // @ts-ignore
                onEmptyData={() => props.navigation.navigate(CategoryRoutes.CategoryHome)}
            ></FetchStateEmpty>
        );
    }

    return (
        <FlatList
            numColumns={1}
            data={favorites}
            keyExtractor={(meal: MealModel) => meal.id}
            renderItem={(meal) => <MealItem
                item={meal.item} 
                onPress={navigate}
            />
        }
        />
    );
};