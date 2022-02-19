import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MainButtonComponent } from '~components/main-button/MainButton';
import { Colors } from '~constants/colors';

interface BackButtonInput {
    navigationBackRoute: string;
}

export function BackButton(props: BackButtonInput) {
    
    const navigation = useNavigation<any>();

    return (
        <MainButtonComponent
            onPress={() => navigation.navigate(props.navigationBackRoute)}
            size='small'
            type='transparent'
        >
            <Ionicons name="arrow-back" size={25} color={Colors.black} />
        </MainButtonComponent>
    );
}
