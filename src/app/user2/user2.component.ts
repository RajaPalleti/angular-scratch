import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { User2Service } from '../services/user2.service';
@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.scss']
})
export class User2Component implements OnInit {
  public userName: string;
  public userEmail: string;
  public userSalary: number;
  public userObject: User;
  public editObject: any;
  public list: Array<any> = [];
  constructor(private user2Service: User2Service) { }

  ngOnInit() {
    this.getUser2List();
  }
  onSubmit() {
    this.userObject = {
      name: this.userName,
      email: this.userEmail,
      salary: this.userSalary
    };
    if (this.editObject && this.editObject.id) {
      this.userObject['id'] = this.editObject.id;
    }
    this.list = this.user2Service.insertUser(this.userObject);

    this.userName = '';
    this.userEmail = '';
    this.userSalary = null;
    this.editObject = {};

  }
  getUser2List() {
   this.list = this.user2Service.usersList();
   console.log('this.list', this.list);
  }
  onEditUser(user) {
    // this.user2Service.editUser(user);
       this.userName = user.name;
       this.userEmail = user.email;
       this.userSalary = user.salary;
       this.editObject = user;
  }
  onDeleteUser(ind) {
    this.list = this.user2Service.deleteUser(ind);
  }
}
