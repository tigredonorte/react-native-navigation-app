import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { TText } from '~components/TText/TText.component';

import { CategoryModel } from '../../store/models/Category.model';
import { CategoryListMock } from '../../store/data/Category.mocks';
import { CategoryService } from '../../store/services/Category.service';
import { CategoryStyles } from './Category.styles';

export interface CategoryScreenInput extends NativeStackScreenProps<any> { }


export const CategoryScreen: React.FunctionComponent<CategoryScreenInput> = (props: CategoryScreenInput) => {

    const model = new CategoryService();
    // const [ Styles ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged(), map(CategoryStyles)));
    const Styles = CategoryStyles;
    const [ data, setData ] = useState<CategoryModel[]>(CategoryListMock);
    
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
                keyExtractor={(item: CategoryModel) => item.id}
                data={data}
                renderItem={(item) => renderListItem(item.item)}
                numColumns={2}
            />
        // </FetchStateContainer>
    );
};