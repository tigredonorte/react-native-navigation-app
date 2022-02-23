import AsyncStorage from '@react-native-async-storage/async-storage';
import { delay, Observable, of } from 'rxjs';

import { MealModel } from '../models/Meal.model';
import { MealsListMock } from '../data/Meal.mocks';

export class MealsService {

    private static model = new MealsService();

    public static getInstance() {
        return this.model;
    }

    public loadData = (categoryId: string): Observable<MealModel[]> => {
        const items = [...MealsListMock].filter(it => it.categoryIds.includes(categoryId));
        return this.fakeRequest(of(items));
    }

    public getItem = (mealId: string): Observable<MealModel> => {
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
    private fakeRequest = (observer: Observable<any>): Observable<any> => observer.pipe(delay(300 + Math.random() * 500));
}