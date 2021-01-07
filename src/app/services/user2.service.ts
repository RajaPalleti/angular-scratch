import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User2Service {
  public user2List = [];
  // public userObject: any;
  public id: any;

  constructor() { }

  insertUser(data) {
    if (localStorage.length) {
      if (data && data.id) {
        this.user2List = this.getLSUsers();
        this.user2List.forEach((element, index) => {
          if (element.id === data.id) {
            // data['id'] = this.userObject.id;
            this.user2List[index] = data;
          }
        });
        this.setLSUsers();
      } else {
        this.user2List = this.getLSUsers();
        this.id = Math.random().toString(36).substr(2, 9);
        data['id'] = this.id;
        this.user2List.push(data);
        this.setLSUsers();
      }
    } else {
      this.id = Math.random().toString(36).substr(2, 9);
      data['id'] = this.id;
      this.user2List.push(data);
      this.setLSUsers();
    }
    return this.getLSUsers();
  }
  usersList() {
    return this.getLSUsers();
  }
  // editUser(data) {
  //   this.userObject = data;
  // }
  deleteUser(userIndex) {
    const confirmDelete = confirm('Are you sure you want to delete?');
    if (this.user2List.length > 0 && confirmDelete) {
    this.user2List = this.getLSUsers();
    this.user2List.forEach((element, index) => {
      if (index === userIndex) {
        this.user2List.splice(userIndex, 1);
      }
    });
  } else {
    // alert();
    // localStorage.removeItem('user');
  }
    this.setLSUsers();
    return this.getLSUsers();
  }
  getLSUsers() {
    return JSON.parse(localStorage.getItem('user'));
  }
  setLSUsers() {
    return localStorage.setItem('user', JSON.stringify(this.user2List));
  }
}
