import { Text } from 'react-native';
import { i18n } from '~i18n';

interface LogoTitleInput {
    title: string;
    style?: any;
}

export const LogoTitle: React.FunctionComponent<LogoTitleInput> = (props: LogoTitleInput) => {
    return (
        <Text style={props.style}> {i18n.t(props.title)} </Text>
    );
};