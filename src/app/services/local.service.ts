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
  public registerApiUrl = ' http://localhost:3000/registers';
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
  public onRegister(registerData: any): Observable<any> {
    return this._http.post(this.registerApiUrl, registerData).pipe(
      map(data => data),
      catchError(err => err)
    );
  }
  registeredUsers(): Observable<any> {
    return this._http.get(this.registerApiUrl).pipe(
      map(data => data),
      catchError(err => err));
  }
}
