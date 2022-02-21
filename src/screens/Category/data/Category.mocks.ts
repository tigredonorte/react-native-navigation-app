import { ICategoryModel } from './Category.interface';

export const CategoryListMock: ICategoryModel[] = [
    { id: 'c5', title: 'Brazilian', subtitle: 'Traditional Brazilianrs food', color: '#d25798', img: require('../../../../assets/food/brazilian.jpg')},
    { id: 'c1', title: 'Italian', subtitle: 'spaghetti and pasta', color: '#258101', img: require('../../../../assets/food/italian.jpg')},
    { id: 'c2', title: 'Thai', subtitle: 'Spycy exotic food', color: '#9801dd', img: require('../../../../assets/food/thai.jpg')},
    { id: 'c4', title: 'French', subtitle: 'Refined cousine', color: '#d57741', img: require('../../../../assets/food/french.jpg')},
    { id: 'c6', title: 'Breakfast', subtitle: 'To wake up with all energy', color: '#ab6198', img: require('../../../../assets/food/breakfast.jpg')},
    { id: 'c3', title: 'Chinese', subtitle: 'Fresh meals and food', color: '#f408aa', img: require('../../../../assets/food/chinese.jpg')},
    { id: 'c7', title: 'Summer', subtitle: 'light and fresh food', color: '#282826', img: require('../../../../assets/food/summer.jpg')},
    { id: 'c8', title: 'Winter', subtitle: 'Soups and hot food', color: '#0bd0f0', img: require('../../../../assets/food/winter.jpeg')},
    { id: 'c9', title: 'German', subtitle: 'Embedded food', color: '#fa7ada', img: require('../../../../assets/food/german.jpg')},
    { id: 'c10', title: 'Mexican', subtitle: 'Spice and tastfull', color: '#58123a', img: require('../../../../assets/food/mexican.jpg')},
    { id: 'c11', title: 'Peruvian', subtitle: 'Marine food', color: '#98dd09', img: require('../../../../assets/food/peruvian.jpg')},
    { id: 'c12', title: 'Portuguese', subtitle: 'Marine food with tons of olive oil', color: '#ff1101', img: require('../../../../assets/food/portuguese.jpg')},
];

export const getItemById = (id: string) => CategoryListMock.find((it) =>it.id === id);
