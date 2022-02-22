import { ImageSourcePropType } from "react-native";

export interface CategoryModel {
    id: string;
    title: string;
    subtitle: string;
    color: string;
    img: ImageSourcePropType;
}