import {HttpClient} from '@angular/common/http';
import {take} from 'rxjs/operators';
import {BaseRest} from '../../interface/http/base-rest.interface';
import {Observable} from 'rxjs';
import {Paginator} from '../../interface/http/paginator.interface';
import {API_BASE} from '../../../app.constants';

export abstract class HttpDataAbstract<T> implements BaseRest<T> {


  constructor(protected http: HttpClient, protected endPoint: string) {
  }

  getAll(page: string, search?: any): Observable<Paginator<T>> {
    return this.http.get<Paginator<T>>(`${API_BASE}/${this.endPoint}`, {
      params: {
        page,
        payload: JSON.stringify(search || {})
      }
    }).pipe(take(1));
  }

  getById(id: any): Observable<T> {
    return this.http.get<T>(`${API_BASE}/${this.endPoint}/${id}`).pipe(take(1));
  }

  save(data: T): Observable<T> {
    return this.http.post<T>(`${API_BASE}/${this.endPoint}`, data).pipe(take(1));
  }

  update(data: T): Observable<T> {
    return this.http.put<T>(`${API_BASE}/${this.endPoint}/${data['id']}`, data).pipe(take(1));
  }

  delete(data: T): Observable<T> {
    return this.http.delete<T>(`${API_BASE}/${this.endPoint}/${data['id']}`).pipe(take(1));
  }

  getIds(data: Array<T>): Array<number> {
    if (data.length === 0) {
      throw new Error('Empty item selection.');
    }
    return data.map(obj => obj['id']);
  }
}
