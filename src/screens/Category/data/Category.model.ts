import { delay, Observable, of } from 'rxjs';

import { ICategoryModel } from './Category.interface';
import { CategoriesDataList } from './Category.mocks';

export class CategoryModel {
    public loadData(): Observable<ICategoryModel[]> {
        return of([...CategoriesDataList]).pipe(delay(1000 + Math.random() * 1000));
    }
}