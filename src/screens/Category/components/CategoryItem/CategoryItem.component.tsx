import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Card, Text } from 'react-native-paper';
import { TText } from '~components/TText/TText.component';
import { i18n } from '~i18n';

import { ICategoryModel } from '../../data/Category.interface';
import { ItemStyles } from './CategoryItem.styles';

export interface CategoryItemInput {
    item: ICategoryModel;
    onClick: (id: string, source: string) => void
}

export const CategoryItem: React.FunctionComponent<CategoryItemInput> = (props: CategoryItemInput) => {

    // @TODO() track it on analytics data
    const navigate = (source: 'card' | 'button') => props.onClick(props.item.id, source);

    return (
        <Card style={ItemStyles.listItem} onPress={() => navigate('card')}>
            <Card.Title 
                title={props.item.title} 
                subtitle={props.item.subtitle}
                titleStyle={{color: props.item.color}}
                subtitleStyle={{color: props.item.color}}
            />
            <Card.Cover source={props.item.img} />
            <Card.Actions>
                <Button onPress={() => navigate('button')}>
                    <TText style={{color: props.item.color}}>{i18n.t('Category.Details')}</TText>
                </Button>
            </Card.Actions>
        </Card>
    ) 
}