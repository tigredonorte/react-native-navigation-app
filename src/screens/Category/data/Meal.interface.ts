export interface IMealModel {
    id: string;
    categoryIds: string[];
    title: string;
    affordability: 'affordable' | 'pricey' | 'luxurious';
    complexity: 'simple' | 'challenging' | 'hard';
    imageUrl: string;
    duration: number;
    ingredients: string[];
    steps: string[];
    isGlutenFreen: boolean;
    isVegan: boolean;
    isVegetarian: boolean;
    isLactoseFree: boolean;
}