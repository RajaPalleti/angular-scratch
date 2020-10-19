import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  public userName: string;
  public password: string;
  public message: string;
  constructor() { }

  ngOnInit() {
    this.message = '';
  }
  public login(): void {
    if (this.userName === 'scott' && this.password === '123') {
      this.message = 'Welcome  to angular training ' + this.userName;
      this.userName = '';
      this.password = '';
    } else {
      this.message = 'Invalid username or password';
    }
  }
}
