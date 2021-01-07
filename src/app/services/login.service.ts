import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public message: string;
  constructor() { }

  public onLogin(userName: string, password: string) {
    if (userName === 'scott' && password === '123') {
      this.message = 'Welcome  to angular training ' + userName;
      // userName = '';
      // password = '';
    } else {
      this.message = 'Invalid username or password';
    }
    return this.message;
  }
}
