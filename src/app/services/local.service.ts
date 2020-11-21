import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  public url = 'http://localhost:3000/data';
  constructor(private _http: HttpClient) { }

  getEmpList(): Observable<any>  {
   return this._http.get(this.url).pipe(map(data => data));
  }

  addEmp(formData): Observable<any> {
    return this._http.post(this.url, formData).pipe(map(
      data => data),
      catchError(err => err)
      );
  }

  updateEmp(formData): Observable<any> {
    return this._http.put(this.url + '/' + formData.id , formData)
    .pipe(
      map(data => data),
      catchError(err => err)
    );
  }
  deleteEmp(formData): Observable<any> {
    return this._http.delete(this.url + '/' + formData.id, formData).pipe(map(data => data),
    catchError(err => err));
  }
}
