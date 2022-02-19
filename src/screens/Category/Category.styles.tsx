import { StyleSheet } from 'react-native';

import { ScreenData } from '~utils/responsiveness';

export const CategoryScreenStyles = (screenData: ScreenData) => StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});
