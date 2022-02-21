import { delay, Observable, of } from 'rxjs';

import { IMealModel } from './Meal.interface';
import { MealsListMock } from './Meal.mocks';

export class MealsModel {

    private constructor() {}
    private static model = new MealsModel();
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

    private favorites: {[s: string]: boolean} = {};
    public isFavorite = (mealId: string) => this.favorites[mealId];
    public toggleFavorite = (mealId: string) => this.favorites[mealId] = !this.favorites[mealId];

    private fakeRequest = (observer: Observable<any>): Observable<any> => observer.pipe(delay(300 + Math.random() * 500));
}