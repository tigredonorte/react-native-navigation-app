import { delay, map, Observable, of } from 'rxjs';
import { i18n } from '~i18n';

import { IMealModel } from './Meal.interface';
import { MealsListMock } from './Meal.mocks';

export class MealsModel {
    public loadData = (categoryId: string): Observable<IMealModel[]> => 
        of([...MealsListMock].filter(it => it.categoryIds.includes(categoryId)))
        .pipe(
            delay(1000 + Math.random() * 1000)
        );
}