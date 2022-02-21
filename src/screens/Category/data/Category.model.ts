import { delay, Observable, of } from 'rxjs';

import { ICategoryModel } from './Category.interface';
import { CategoryListMock } from './Category.mocks';

export class CategoryModel {
    public loadData(): Observable<ICategoryModel[]> {
        return of([...CategoryListMock]).pipe(delay(1000 + Math.random() * 1000));
    }
}