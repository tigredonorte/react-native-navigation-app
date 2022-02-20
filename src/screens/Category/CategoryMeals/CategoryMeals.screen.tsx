import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Headline, Caption, Card } from 'react-native-paper';
import { distinctUntilChanged } from 'rxjs';
import { FetchStateEmpty } from '~components/FetchStatus/components/FetchStateEmpty';
import { LogoTitle } from '~components/Navigation';
import { i18n } from '~i18n';
import { getScreenDimensions } from '~utils/responsiveness';

import { ICategoryModel } from '../data/Category.interface';
import { getItemById } from '../data/Category.mocks';
import { CategoryMealsScreenStyles } from './CategoryMeals.styles';

export interface CategoryScreenInput extends NativeStackScreenProps<any> { }

export const CategoryMealsScreen: React.FunctionComponent<CategoryScreenInput> = (props: CategoryScreenInput) => {
    // navigation.setOptions({ title: 'Updated!' })}
    const [item, setItem] = useState<ICategoryModel>();
    useEffect(() => {
        const item = getItemById(props.route.params?.id);
        props.navigation.setOptions({ 
            headerTitle: () => <LogoTitle title={item?.title || ''}/>,
        });
        setItem(item);
    }, []);

    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const Styles = CategoryMealsScreenStyles(screenData);

    const num = props.route.params?.categoryNumber;

    if (!item) {
        return (
            <FetchStateEmpty 
                isEmpty={true} 
                emptyText={i18n.t('CategoryMeals.EmptyTitle', { id: props.route.params?.id })}
            ></FetchStateEmpty>
        );
    }

    return (
        <Card style={Styles.container}>
            <Headline>{item.title}</Headline>
            <Card.Cover source={item.img} />
            <Caption>{item.subtitle}</Caption>
        </Card>
    );
};
