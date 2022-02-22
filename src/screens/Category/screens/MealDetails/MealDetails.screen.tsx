import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Caption, Card, Headline, IconButton, Subheading, Title } from 'react-native-paper';
import { distinctUntilChanged } from 'rxjs';
import { FetchStateEmpty } from '~components/FetchStatus/components/FetchStateEmpty';
import { FetchStateLoading } from '~components/FetchStatus/components/FetchStateLoading';
import { LogoImage } from '~components/Navigation';
import { TText } from '~components/TText/TText.component';
import { i18n } from '~i18n';
import { InfoChip } from '~screens/Category/components/MealsItem/MealsItem.component';
import { theme } from '~styles/theme';
import { getScreenDimensions } from '~utils/responsiveness';

import { CategoryRoutes, CategoryStackType } from '../../Category.route.types';
import { IMealModel } from '../../data/Meal.interface';
import { MealsModel } from '../../data/Meal.model';
import { ListStyles, MealDetailsScreenStyles } from './MealDetails.styles';

export interface MealDetailsInput extends NativeStackScreenProps<CategoryStackType, CategoryRoutes.MealDetails> {

}

export const Favorite = (props: { mealId: string }) => {
    const model = MealsModel.getInstance();
    const [ isFavorite, setIsFavorite ] = useState<boolean>(model.isFavorite(props.mealId));

    
    return (
        <IconButton
            icon={isFavorite ? 'heart' : 'heart-outline'}
            color={theme.colors.white}
            size={20}
            onPress={() => {
                model.toggleFavorite(props.mealId);
                setIsFavorite(model.isFavorite(props.mealId));
            }}
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
    const [ screenData ] = useObservable(getScreenDimensions().pipe(distinctUntilChanged()));
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ meal, setMeal ] = useState<IMealModel>();
    const Styles = MealDetailsScreenStyles(screenData);

    useEffect(() => {
        const mealId = props.route.params?.mealId;
        const model = MealsModel.getInstance();
        setLoading(true);
        model.getItem(mealId).subscribe(
            (item: IMealModel) => {
                setMeal(item);
                setLoading(false);
                props.navigation.setOptions({
                    title: item.title,
                    headerRight: () => <Favorite mealId={item.id} />,
                });
            }
        );
    }, []);

    if (loading) {
        return (<FetchStateLoading isLoading={true}></FetchStateLoading>);
    }

    if (!meal) {
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