import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { distinctUntilChanged } from 'rxjs';
import { FetchStateEmpty } from '~components/FetchStatus/components/FetchStateEmpty';
import { FetchStateLoading } from '~components/FetchStatus/components/FetchStateLoading';
import { i18n } from '~i18n';
import { CategoryRoutes, CategoryStackType, FavoriteRoutes } from '~screens/Category/Category.route.types';
import { MealItem } from '~screens/Category/components/MealsItem/MealsItem.component';
import { IMealModel } from '~screens/Category/data/Meal.interface';
import { MealsModel } from '~screens/Category/data/Meal.model';
import { getScreenDimensions } from '~utils/responsiveness';

import { FavoritesStyles } from './Favorites.styles';

export interface FavoritesInput extends NativeStackScreenProps<CategoryStackType, FavoriteRoutes.FavoritesHome> { }

export const FavoritesScreen: React.FunctionComponent<FavoritesInput> = (props: FavoritesInput) => {

    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const [ loading, setLoading ] = useState(true);
    const [ favorites, setFavorites ] = useState<IMealModel[]>([]);
    const Styles = FavoritesStyles(screenData);
    
    const navigate = (mealId: string) => {
        props.navigation.navigate(CategoryRoutes.MealDetails, { mealId });
    }
    
    useEffect(() => {
        setLoading(true);
        const model = MealsModel.getInstance();
        (async () => {
            (await model.getFavorites()).subscribe((
                (favorites) => {
                    setFavorites(favorites);
                    setLoading(false);
                }
            ));
        })()
    }, []);

    if (loading) {
        return (<FetchStateLoading isLoading={true}></FetchStateLoading>);
    }

    if (!favorites) {
        return (
            <FetchStateEmpty
                isEmpty={true}
                emptyText={i18n.t('MealDetails.EmptyTitle')}
            ></FetchStateEmpty>
        );
    }

    return (
        <FlatList 
            numColumns={1}
            data={favorites}
            keyExtractor={(meal: IMealModel) => meal.id}
            renderItem={(meal) => <MealItem
                item={meal.item} 
                onPress={navigate}
            />
        }
        />
    );
};