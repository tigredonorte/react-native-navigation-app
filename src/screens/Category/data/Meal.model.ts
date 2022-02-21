import AsyncStorage from '@react-native-async-storage/async-storage';
import { delay, Observable, of } from 'rxjs';

import { IMealModel } from './Meal.interface';
import { MealsListMock } from './Meal.mocks';

export class MealsModel {

    private favorites: {[s: string]: boolean} = {};
    private static model = new MealsModel();
    private constructor() {
        this.initFavorites();
    }
    private async initFavorites() {
        try {
            const data = await AsyncStorage.getItem('Favorites');
            const parsed = JSON.parse(data || '');
            this.favorites = parsed;
        } catch (error) {
            this.favorites = {};
        }
    }

    public static getInstance() {
        return this.model;
    }

    public loadData = (categoryId: string): Observable<IMealModel[]> => {
        const items = [...MealsListMock].filter(it => it.categoryIds.includes(categoryId));
        return this.fakeRequest(of(items));
    }

    public getItem = (mealId: string): Observable<IMealModel> => {
        const item = [...MealsListMock].find(it => it.id === mealId);
        return this.fakeRequest(of(item));
    }

    public getFavorites = async () => {
        const data = await AsyncStorage.getItem('Favorites');
        const favorites = JSON.parse(data || '');
        const favoriteIds: string[] = [];
        for (const i in favorites) {
            if (favorites[i] === false) {
                continue;
            }
            favoriteIds.push(i);
        }
        const list = [...MealsListMock].filter(it => favoriteIds.includes(it.id));
        return this.fakeRequest(of(list));
    }
    public isFavorite = (mealId: string) => this.favorites[mealId];
    public toggleFavorite = (mealId: string) => {
        this.favorites[mealId] = !this.favorites[mealId];
        AsyncStorage.setItem('Favorites', JSON.stringify(this.favorites));
    }

    private fakeRequest = (observer: Observable<any>): Observable<any> => observer.pipe(delay(300 + Math.random() * 500));
}