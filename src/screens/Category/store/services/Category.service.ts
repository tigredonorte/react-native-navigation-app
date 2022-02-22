import { delay, Observable, of } from 'rxjs';

import { CategoryModel } from '../models/Category.model';
import { CategoryListMock } from '../data/Category.mocks';

export class CategoryService {
    public loadData(): Observable<CategoryModel[]> {
        return of([...CategoryListMock]).pipe(delay(1000 + Math.random() * 1000));
    }
}