import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import { CategoryItem } from '../../components/CategoryItem/CategoryItem.component';
import { ICategoryModel } from '../../data/Category.interface';
import { CategoryListMock } from '../../data/Category.mocks';
import { CategoryStyles } from './Category.styles';

export interface CategoryScreenInput extends NativeStackScreenProps<any> { }
export const CategoryScreen: React.FunctionComponent<CategoryScreenInput> = (props: CategoryScreenInput) => {

    const Styles = CategoryStyles;
    const [ data ] = useState<ICategoryModel[]>(CategoryListMock);

    return (
        <View style={Styles.listContainer}>
            <FlatList 
                keyExtractor={(item: ICategoryModel) => item.id}
                data={data}
                renderItem={(item) => <CategoryItem {...props} item={item.item} />}
                numColumns={2}
            />
        </View>
    );
};