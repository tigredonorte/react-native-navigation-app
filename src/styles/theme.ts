import { DefaultTheme } from "react-native-paper";
import { Colors } from "./colors";

export const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        ...Colors
    },
};