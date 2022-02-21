import { StyleSheet } from 'react-native';
import { ScreenData } from '~utils/responsiveness';

export const CategoryMealsScreenStyles = (screenData: ScreenData) => StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        width: '100%'
    }
});
