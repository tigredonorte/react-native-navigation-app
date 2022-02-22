import { View } from 'react-native';
import { Button, Card, Chip, Title } from 'react-native-paper';
import { TText } from '~components/TText/TText.component';
import { i18n } from '~i18n';
import { theme } from '~styles/theme';

import { MealModel } from '../../store/models/Meal.model';
import { ItemStyles } from './MealsItem.styles';

export interface MealItemInput {
    item: MealModel;
    onPress: (id: string, source: string) => void;
    color?: string;
}

export const InfoChip = (props: { condition: boolean, title: string }) => {
    return (props.condition) ? (
        <Chip style={{marginRight: 5}}>
            <TText style={{fontSize: 10}}>{ i18n.t(`Content.Labels.${props.title}`) }</TText> 
        </Chip>
    ): null;
}

export const MealItem: React.FunctionComponent<MealItemInput> = (props: MealItemInput) => {

    const navigate = (source: string) => props.onPress(props.item.id, source);

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
                    <TText style={{color: props?.color ?? theme.colors.primary}}>
                        {i18n.t('MealDetails.ViewRecipe')}
                    </TText>
                </Button>
            </Card.Actions>
        </Card>
    ) 
}