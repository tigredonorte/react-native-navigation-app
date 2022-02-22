import { useObservable } from '@ngneat/react-rxjs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { IconButton, Switch, Title } from 'react-native-paper';
import { distinctUntilChanged, map } from 'rxjs';
import { TText } from '~components/TText/TText.component';
import { i18n } from '~i18n';
import { theme } from '~styles/theme';
import { getScreenDimensions, getStyle } from '~utils/responsiveness';

import { CategoryRoutes, CategoryStackType, FilterRoutes } from '../../Category.route.types';
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
    const [ isGlutenFree, setIsGlutenFree ] = useState(false);
    const [ isVegan, setIsVegan ] = useState(false);
    const [ isVegetarian, setIsVegetarian ] = useState(false);
    const [ isLactoseFree, setIsLactoseFree ] = useState(false);
    const [ Styles ] = useObservable(getStyle(FilterScreenStyles));

    const saveFilters = useCallback(() => props.navigation.setParams({ 
        filters: {isGlutenFree, isVegan, isVegetarian, isLactoseFree} 
    }), [{ isGlutenFree, isVegan, isVegetarian, isLactoseFree }]);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    icon='content-save'
                    color={theme.colors.light_grey}
                    size={20}
                    onPress={() => {
                        saveFilters();
                        // @ts-ignore
                        props.navigation.navigate(CategoryRoutes.CategoryHome);
                    }}
                />
            )
        });
    }, [ saveFilters ]);

    return (
        <View style={Styles.container}>
            <Title>{i18n.t('Filter.PageTitle')}</Title>
            <View style={Styles.formSection}>
                <FilterSwitch title='Content.Labels.GlutenFree' value={isGlutenFree} onValueChange={setIsGlutenFree}/>
                <FilterSwitch title='Content.Labels.Vegan' value={isVegan} onValueChange={setIsVegan}/>
                <FilterSwitch title='Content.Labels.Vegetarian' value={isVegetarian} onValueChange={setIsVegetarian}/>
                <FilterSwitch title='Content.Labels.LactoseFree' value={isLactoseFree} onValueChange={setIsLactoseFree}/>
            </View>
        </View>
    );
};