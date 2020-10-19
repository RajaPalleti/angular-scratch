import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public apiUrl = ' http://localhost:3000/data';
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' })
  };
  constructor(private _http: HttpClient) { }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status} body was ${error.error}`)
    }
    return throwError('Something bad happend, please try again later');
  }
  private extractData(res: Response): Array<any> | {} {
    const body = res;
    return body || {};
  }
  public getUserList(): Observable<any> {
    return this._http.get(this.apiUrl).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  public getUserById(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this._http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  public addUser(userData: any): Observable<any> {
    return this._http.post(this.apiUrl, userData, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  public updateUser(userData: any): Observable<any> {
    return this._http.put(this.apiUrl, userData, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  public deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this._http.delete(url, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
}
