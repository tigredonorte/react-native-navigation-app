import { TText } from '~components/TText/TText.component';
import { i18n } from '~i18n';

interface LogoTitleInput {
    title: string;
    style?: any;
}

export const LogoTitle: React.FunctionComponent<LogoTitleInput> = (props: LogoTitleInput) => {
    return (
        <TText style={props.style}> {i18n.t(props.title)} </TText>
    );
};