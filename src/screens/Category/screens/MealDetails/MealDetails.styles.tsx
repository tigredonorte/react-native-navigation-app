import { StyleSheet } from 'react-native';
import { theme } from '~styles/theme';
import { ScreenData } from '~utils/responsiveness';

export const MealDetailsScreenStyles = (screenData: ScreenData) => StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    textStyle: {
        textAlign: 'center'
    },
    detailsSection: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingVertical: 5,
        width: '100%'
    },
    chipContainer: {
        flexDirection: 'row', 
        width: '100%', 
        marginTop: 10
    }
});

export const ListStyles = StyleSheet.create({
    section: {
        padding: 10,
        width: '100%'
    },
    content: {
        marginTop: 5
    },
    textContainer: {
        marginBottom: 5,
        marginLeft: 15
    },
    text: {
        fontSize: 15,
        color: theme.colors.dark_grey
    }
});