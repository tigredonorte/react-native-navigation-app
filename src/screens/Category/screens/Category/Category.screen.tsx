import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import { FetchStateEmpty } from '~components/FetchStatus/components/FetchStateEmpty';
import { FetchStateLoading } from '~components/FetchStatus/components/FetchStateLoading';
import { i18n } from '~i18n';
import { CategoryRoutes } from '~screens/Category/Category.route.types';
import { getStyle } from '~utils/responsiveness';

import { CategoryItem } from '../../components/CategoryItem/CategoryItem.component';
import { MealsState } from '../../store/category.state';
import { CategoryModel } from '../../store/models/Category.model';
import { CategoryStyles } from './Category.styles';

export interface CategoryScreenInput extends NativeStackScreenProps<any> { }
export const CategoryScreen: React.FunctionComponent<CategoryScreenInput> = (props: CategoryScreenInput) => {

    const categories = useSelector((data: { meals: MealsState}) => data.meals.categories);
    const [ Styles ] = useObservable(getStyle(CategoryStyles));

    const navigate = (id: string, source: string) => props.navigation.navigate(CategoryRoutes.Meals, { id });

    if (!categories) {
        return ( <FetchStateLoading></FetchStateLoading> );
    }

    if (categories.length === 0) {
        return (<FetchStateEmpty emptyText={i18n.t('Category.EmptyTitle', { id: props.route.params?.id })}/>);
    }

    return (
        <View style={Styles.listContainer}>
            <FlatList 
                keyExtractor={(item: CategoryModel) => item.id}
                data={categories}
                renderItem={(item) => <CategoryItem item={item.item} onClick={navigate} />}
                numColumns={2}
            />
        </View>
    );
};