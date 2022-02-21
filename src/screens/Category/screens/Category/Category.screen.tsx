import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { CategoryRoutes } from '~screens/Category/Category.route.types';

import { CategoryItem } from '../../components/CategoryItem/CategoryItem.component';
import { ICategoryModel } from '../../data/Category.interface';
import { CategoryListMock } from '../../data/Category.mocks';
import { CategoryStyles } from './Category.styles';

export interface CategoryScreenInput extends NativeStackScreenProps<any> { }
export const CategoryScreen: React.FunctionComponent<CategoryScreenInput> = (props: CategoryScreenInput) => {

    const Styles = CategoryStyles;
    const [ data ] = useState<ICategoryModel[]>(CategoryListMock);
    const navigate = (id: string, source: string) => props.navigation.navigate(CategoryRoutes.Meals, { id });

    return (
        <View style={Styles.listContainer}>
            <FlatList 
                keyExtractor={(item: ICategoryModel) => item.id}
                data={data}
                renderItem={(item) => <CategoryItem item={item.item} onClick={navigate} />}
                numColumns={2}
            />
        </View>
    );
};