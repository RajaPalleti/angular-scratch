import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {
  public _url = 'http://localhost:3200/new-user';
  constructor(private http: HttpClient) { }
  newUser(user) {
    return this.http.post<any>(this._url, user);
  }
}
