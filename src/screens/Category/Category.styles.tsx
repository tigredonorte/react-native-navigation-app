import { StyleSheet } from 'react-native';
import { Colors } from '~styles/colors';
import { ScreenData } from '~utils/responsiveness';

export const CategoryStyles = (screenData: ScreenData) => StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});
