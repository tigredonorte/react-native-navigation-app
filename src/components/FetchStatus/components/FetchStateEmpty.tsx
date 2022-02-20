import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import { Styles } from './FetchState.style';

export interface FetchStateEmptyInput {
    isEmpty: boolean;
    onEmptyData?: () => void; 
    emptyText?: string;
    emptyBtnText?: string;
}
export const FetchStateEmpty = (props: FetchStateEmptyInput) => {
    return props.isEmpty ? (
        <View style={Styles.stateContainer}>
            { 
                props.emptyText ? 
                    <Text style={Styles.emptyText}> 
                        {props.emptyText} 
                    </Text> : null
            }
            { 
                props.emptyBtnText ?
                    <Button mode="contained" onPress={() => props.onEmptyData ? props.onEmptyData() : null }>
                        {props.emptyBtnText}
                    </Button>: null 
            }
        </View>
    ) : null;
}
