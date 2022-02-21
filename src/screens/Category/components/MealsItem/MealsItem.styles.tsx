import { StyleSheet } from 'react-native';

export const ItemStyles = StyleSheet.create({
    listItem: {
        flex: 1,
        margin: 5,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    textContainer: {
    },
    chipContainer: {
        flexDirection: 'row', 
        width: '100%', 
        marginTop: 10
    },
    detailsContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingVertical: 5
    }
});
