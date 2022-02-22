import { StyleSheet } from 'react-native';
import { ScreenData } from '~utils/responsiveness';

export const FilterScreenStyles = (screenData: ScreenData) => StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    formSection: {
        padding: 20,
        width: '80%',
    }
});

export const SwitchStyle = StyleSheet.create({
    switch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
    }
});