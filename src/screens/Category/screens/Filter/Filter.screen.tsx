import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { IconButton, Switch, Title } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { FetchStateLoading } from '~components/FetchStatus/components/FetchStateLoading';
import { TText } from '~components/TText/TText.component';
import { i18n } from '~i18n';
import { SetFiltersAction } from '~screens/Category/store/meals.actions';
import { getFilteredMeal, getFilters } from '~screens/Category/store/meals.selectors';
import { theme } from '~styles/theme';
import { getStyle } from '~utils/responsiveness';

import { CategoryRoutes, CategoryStackType } from '../../Category.route.types';
import { FilterScreenStyles, SwitchStyle } from './Filter.styles';

export interface FilterScreenInput extends NativeStackScreenProps<CategoryStackType, CategoryRoutes.FilterHome> { }

export const FilterSwitch = (props: { title: string; value: boolean; onValueChange: (value: boolean) => void }) => {
    return (
        <View style={SwitchStyle.switch}>
            <TText>{i18n.t(props.title)}</TText>
            <Switch value={props.value} onValueChange={props.onValueChange} />
        </View>
    );
}

export const FilterScreen: React.FunctionComponent<FilterScreenInput> = (props: FilterScreenInput) => {

    const { navigation } = props;
    const filters = useSelector(getFilters);
    const amount = useSelector((state: any) => getFilteredMeal(state)?.length);
    const [ Styles ] = useObservable(getStyle(FilterScreenStyles));
    const dispatch = useDispatch();
    const setFilter = (key: string) => (value: boolean) => dispatch(
        SetFiltersAction({...filters, [key]: value})
    );

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    icon={amount > 0 ? 'content-save' : 'content-save-outline'}
                    color={theme.colors.light_grey}
                    size={20}
                    onPress={
                        amount > 0 
                        ? () => props.navigation.navigate(CategoryRoutes.Filtered, {})
                        : undefined
                    }
                />
            )
        });
    }, [ amount ]);

    
    if (!filters) {
        return (<FetchStateLoading></FetchStateLoading>);
    }

    return (
        <View style={Styles.container}>
            <Title>{i18n.t('Filter.PageTitle')}</Title>
            <View style={Styles.formSection}>
                <FilterSwitch
                    title='Content.Labels.GlutenFree' 
                    value={filters?.isGlutenFree} 
                    onValueChange={setFilter('isGlutenFree')}
                />
                <FilterSwitch
                    title='Content.Labels.Vegan'
                    value={filters?.isVegan} 
                    onValueChange={setFilter('isVegan')}
                />
                <FilterSwitch
                    title='Content.Labels.Vegetarian' 
                    value={filters?.isVegetarian} 
                    onValueChange={setFilter('isVegetarian')}
                />
                <FilterSwitch
                    title='Content.Labels.LactoseFree' 
                    value={filters?.isLactoseFree} 
                    onValueChange={setFilter('isLactoseFree')}
                />
            </View>
            <View>
                <TText>{i18n.t('Filter.Amount', { amount })}</TText>
            </View>
        </View>
    );
};