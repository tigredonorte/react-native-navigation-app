import { ImageSourcePropType } from "react-native";

export interface ICategoryModel {
    id: string;
    title: string;
    subtitle: string;
    color: string;
    img: ImageSourcePropType;
}