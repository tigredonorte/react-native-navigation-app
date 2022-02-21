import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { TText } from '~components/TText/TText.component';

import { ICategoryModel } from '../../data/Category.interface';
import { CategoryListMock } from '../../data/Category.mocks';
import { CategoryModel } from '../../data/Category.model';
import { CategoryStyles } from './Category.styles';

export interface CategoryScreenInput extends NativeStackScreenProps<any> { }


export const CategoryScreen: React.FunctionComponent<CategoryScreenInput> = (props: CategoryScreenInput) => {

    const model = new CategoryModel();
    // const [ Styles ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged(), map(CategoryStyles)));
    const Styles = CategoryStyles;
    const [ data, setData ] = useState<ICategoryModel[]>(CategoryListMock);
    
    // const input: FetchStateInput = {
    //     fetchDataFn: model.loadData,
    //     dataLoadedFn: setData,
    //     messages: {
    //         errorText: i18n.t('Category.Status.Error.Title'),
    //         btnText: i18n.t('Category.Status.Error.TryAgain'),
    //         emptyText: i18n.t('Category.Status.Empty.Title')
    //     }
    // }

    const renderListItem = (item: any) => <View style={Styles.listContainer}><TText>{item.title}</TText></View>;

    return (
        // <FetchStateContainer {...input}>
            <FlatList 
                keyExtractor={(item: ICategoryModel) => item.id}
                data={data}
                renderItem={(item) => renderListItem(item.item)}
                numColumns={2}
            />
        // </FetchStateContainer>
    );
};