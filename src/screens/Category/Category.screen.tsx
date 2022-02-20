import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import { CategoryStyles } from './Category.styles';
import { CategoryItem } from './CategoryItem/CategoryItem.component';
import { ICategoryModel } from './data/Category.interface';
import { CategoryListMock } from './data/Category.mocks';
import { CategoryModel } from './data/Category.model';

export interface CategoryScreenInput extends NativeStackScreenProps<any> { }
export const CategoryScreen: React.FunctionComponent<CategoryScreenInput> = (props: CategoryScreenInput) => {

    const model = new CategoryModel();
    // const [ Styles ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged(), map(CategoryStyles)));
    const Styles = CategoryStyles;
    const [ data, setData ] = useState<ICategoryModel[]>(CategoryListMock);

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