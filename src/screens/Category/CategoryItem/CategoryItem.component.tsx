import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Card } from 'react-native-paper';
import { i18n } from '~i18n';

import { ICategoryModel } from '../data/Category.interface';
import { ItemStyles } from './CategoryItem.styles';

export interface CategoryItemInput extends NativeStackScreenProps<any> {
    item: ICategoryModel;
}

export const CategoryItem: React.FunctionComponent<CategoryItemInput> = (props: CategoryItemInput) => {

    // @TODO() track it on analytics data
    const navigate = (source: 'card' | 'button') => {
        props.navigation.navigate('Category/Meals', { id: props.item.id });
    }

    return (
        <Card style={ItemStyles.listItem} onPress={() => navigate('card')}>
            <Card.Title title={props.item.title} subtitle={props.item.subtitle} />
            <Card.Cover source={props.item.img} />
            <Card.Actions>
                <Button onPress={() => navigate('button')}>
                    {i18n.t('Category.Details')}
                </Button>
            </Card.Actions>
        </Card>
    ) 
}