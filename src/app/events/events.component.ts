import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  public userName: string;
  public password: string;
  public message: string;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.message = '';
  }
  public login(): void {
    this.message = this.loginService.onLogin(this.userName, this.password);
    if (this.message === '') {
      this.userName = '';
      this.password = '';
    }
    // if (this.userName === 'scott' && this.password === '123') {
    //   this.message = 'Welcome  to angular training ' + this.userName;
    //   this.userName = '';
    //   this.password = '';
    // } else {
    //   this.message = 'Invalid username or password';
    // }
  }
}
