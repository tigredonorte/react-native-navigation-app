import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Card, IconButton, Subheading, Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { FetchStateEmpty } from '~components/FetchStatus/components/FetchStateEmpty';
import { FetchStateLoading } from '~components/FetchStatus/components/FetchStateLoading';
import { TText } from '~components/TText/TText.component';
import { i18n } from '~i18n';
import { InfoChip } from '~screens/Category/components/MealsItem/MealsItem.component';
import { ToggleFavoriteAction } from '~screens/Category/store/meals.actions';
import { getMealById, getMealIsFavorite } from '~screens/Category/store/meals.selectors';
import { theme } from '~styles/theme';
import { getStyle } from '~utils/responsiveness';

import { CategoryRoutes, CategoryStackType } from '../../Category.route.types';
import { ListStyles, MealDetailsScreenStyles } from './MealDetails.styles';

export interface MealDetailsInput extends NativeStackScreenProps<CategoryStackType, CategoryRoutes.MealDetails> {}

export const Favorite = (props: { mealId: string; isFavorite: boolean; toggleFavorite: () => void }) => {    
    return (
        <IconButton
            icon={props.isFavorite ? 'heart' : 'heart-outline'}
            color={theme.colors.white}
            size={20}
            onPress={props.toggleFavorite}
        />
    );
}

const RenderList = (props: { items: string[]; title: string; numbered?: boolean }) => {
    return (
        <View style={ListStyles.section}>
            <Subheading>{i18n.t(props.title)}</Subheading>
            <View style={ListStyles.content}>
                { props.items.map((item, i) => (
                    <TText style={ListStyles.textContainer} key={i} >
                        <TText style={ListStyles.text}>{ props.numbered ? `${i + 1}. ` : '\u2022 '}</TText> 
                        <TText style={ListStyles.text}>{item}</TText>
                    </TText>
                ))}
            </View>
        </View>
    )
}

export const MealDetailsScreen: React.FunctionComponent<MealDetailsInput> = (props: MealDetailsInput) => {
    const [ Styles ] = useObservable(getStyle(MealDetailsScreenStyles));
    const meal = useSelector(getMealById(props.route.params.mealId));
    const isFavorite = useSelector(getMealIsFavorite(props.route.params.mealId));
    const dispatch = useDispatch();
    const toggleFavorite = () => dispatch(ToggleFavoriteAction(props.route.params.mealId));

    useEffect(() => {
        props.navigation.setOptions({
            title: meal?.title,
            headerRight: () => <Favorite 
                mealId={meal?.id || ''} 
                isFavorite={ isFavorite } 
                toggleFavorite={toggleFavorite}
            />,
        });
    }, [ meal, isFavorite ]);

    if (!meal) {
        return (
            <FetchStateLoading isLoading={true}></FetchStateLoading>
        );
    }

    if (!meal.id) {
        return (
            <FetchStateEmpty
                isEmpty={true}
                emptyText={i18n.t('MealDetails.EmptyTitle')}
            ></FetchStateEmpty>
        );
    }

    return (
        <ScrollView contentContainerStyle={Styles.container}>
            <View style={{width: '100%'}}>
                <Title style={Styles.textStyle}>{meal.title}</Title>
                <Card.Cover source={{uri: meal.imageUrl}} />
            </View>
            <View style={Styles.detailsSection}>
                <TText>{ i18n.t(`Content.affordability.${meal.affordability}`) }</TText>
                <TText>{ i18n.t(`Content.complexity.${meal.complexity}`) } </TText>
                <TText>{ meal.duration } { i18n.t('Content.duration.minutes')}</TText>
            </View>
            <View style={Styles.chipContainer}>
                <InfoChip condition={meal.isGlutenFreen} title='GlutenFree' />
                <InfoChip condition={meal.isVegan} title='Vegan' />
                <InfoChip condition={meal.isVegetarian} title='Vegetarian' />
                <InfoChip condition={meal.isLactoseFree} title='LactoseFree' />
            </View>
            <RenderList title='MealDetails.Ingredients' items={meal.ingredients}/>
            <RenderList title='MealDetails.Steps' items={meal.steps} numbered={true}/>
        </ScrollView>
    );
};