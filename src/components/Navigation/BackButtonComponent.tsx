import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

interface BackButtonInput {
    navigationBackRoute: string;
}

export function BackButton(props: BackButtonInput) {
    const navigation = useNavigation<any>();
    return (
        <IconButton
            icon=""
            size={20}
            onPress={() => navigation.navigate(props.navigationBackRoute)}
        />
    );
}
