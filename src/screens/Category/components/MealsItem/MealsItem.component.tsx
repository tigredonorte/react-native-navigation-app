import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Button, Card, Chip, Text, Title } from 'react-native-paper';
import { TText } from '~components/TText/TText.component';
import { i18n } from '~i18n';

import { IMealModel } from '../../data/Meal.interface';
import { ItemStyles } from './MealsItem.styles';

export interface MealItemInput extends NativeStackScreenProps<any> {
    item: IMealModel;
    color: string;
}

export const InfoChip = (props: { condition: boolean, title: string }) => {
    return (props.condition) ? (
        <Chip style={{marginRight: 5}}>
            <TText style={{fontSize: 10}}>{ i18n.t(`Content.Labels.${props.title}`) }</TText> 
        </Chip>
    ): null;
}

export const MealItem: React.FunctionComponent<MealItemInput> = (props: MealItemInput) => {

    // @TODO() track it on analytics data
    const navigate = (source: 'card' | 'button') => {
        console.log(source);
    }

    return (
        <Card style={ItemStyles.listItem}>
            <Title>{props.item.title}</Title>
            <View style={ItemStyles.textContainer}>
                <Card.Cover  source={{uri: props.item.imageUrl}} />
                <View style={ItemStyles.detailsContainer}>
                    <TText>{ i18n.t(`Content.affordability.${props.item.affordability}`) }</TText>
                    <TText>{ i18n.t(`Content.complexity.${props.item.complexity}`) } </TText>
                    <TText>{ props.item.duration } { i18n.t('Content.duration.minutes')}</TText>
                </View>
            </View>
            <View style={ItemStyles.chipContainer}>
                <InfoChip condition={props.item.isGlutenFreen} title='GlutenFree' />
                <InfoChip condition={props.item.isVegan} title='Vegan' />
                <InfoChip condition={props.item.isVegetarian} title='Vegetarian' />
                <InfoChip condition={props.item.isLactoseFree} title='LactoseFree' />
            </View>
            <Card.Actions>
                <Button onPress={() => navigate('button')}>
                    <TText style={{color: props.color}}>{i18n.t('MealDetails.ViewRecipe')}</TText>
                </Button>
            </Card.Actions>
        </Card>
    ) 
}