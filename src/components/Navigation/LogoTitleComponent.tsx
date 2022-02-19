import { Text } from 'react-native';
import { i18n } from '~i18n';

interface LogoTitleInput {
    title: string;
}

export const LogoTitle: React.FunctionComponent<LogoTitleInput> = (props: LogoTitleInput) => {
    return (
        <Text> {i18n.t(props.title)} </Text>
    );
};