import {Observable} from 'rxjs';
import {Paginator} from './paginator.interface';

export interface BaseRest<T> {
  getAll(page: string, search?: string): Observable<Paginator<T>>;

  getById(id: any): Observable<T>;

  save(T);

  update(T);

  delete(T);
}
