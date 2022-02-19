import { StyleSheet, Text, View } from "react-native";
import { i18n } from "~i18n";

interface LogoTitleInput {
    title: string;
}

export const LogoTitle = (props: LogoTitleInput) => {
    return (
        <Text>{i18n.t(props.title)}</Text>
    );
};

const Style = StyleSheet.create({
    container: {
    }
});