import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { TText } from '~components/TText/TText.component';
import { i18n } from '~i18n';
import { CategoryRouteData, CategoryStackType } from '~screens/Category/Category.routes';
import { theme } from '~styles/theme';

export type StackType = CategoryStackType;

export type propsStack = NativeStackNavigationProp<StackType>;

const { Navigator } = createNativeStackNavigator<StackType>();

export const Stack = () => (
    <Navigator initialRouteName='Category'
        screenOptions={{
            headerStyle: {
                backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.white,
            headerTitle: (data) => {
                let title = i18n.t(`${data.children}.title`);
                if (title === `${data.children}.title`) {
                    title = data.children;
                }
                return <TText style={{color: 'white'}}> {i18n.t(title)}</TText>
            },
        }}
    >
        { CategoryRouteData.getRoutes() }
    </Navigator>
);
