import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { CommonActions, DrawerActions } from '@react-navigation/native';
import { useState } from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { Drawer } from 'react-native-paper';
import { TText } from '~components/TText/TText.component';

import { styles } from './Category.route.styles';

/**
 * Drawer component.
 * @param props
 */
 export function CustomDrawerContent(props: DrawerContentComponentProps): React.ReactElement {
    const userData = {
        UserName: 'Thompson Filgueiras',
        TraderEmail: 'thom@foo.com',
    };
    const List = props.state.routes.map((route: any, i: number) => {
        const focused = i === props.state.index;
        const { title, drawerLabel, drawerIcon } = props.descriptors[route.key].options;
        const label = drawerLabel ?? title ?? route.name;

        return (
            <Drawer.Item
                key={route.key}
                label={label}
                active={focused}
                // @ts-expect-error
                icon={drawerIcon}
                onPress={() => props.navigation.dispatch({
                    ...(focused
                        ? DrawerActions.closeDrawer()
                        : CommonActions.navigate(route.name)
                    ),
                    target: props.state.key,
                })}
            />
        );
    });
    return (
        <DrawerContentScrollView>
            <Drawer.Section style={styles.AndroidSafeArea}>
                <View style={{ backgroundColor: 'white', flex: 1, paddingTop: 0 }} />
                <View style={styles.header}>
                    <View style={styles.viewAvatar}>
                        <Image source={require('~assets/logo.png')} style={styles.avatar} />
                    </View>
                    <View style={styles.viewInfos}>
                        <TText style={styles.userName}>
                            {userData?.UserName ?? ''}
                        </TText>
                        <TText style={styles.email}>
                            {userData?.TraderEmail ?? 'user@gorila.com'}
                        </TText>
                    </View>
                </View>
            </Drawer.Section>
            <Drawer.Section>
                { List }
            </Drawer.Section>
        </DrawerContentScrollView>
    );
}