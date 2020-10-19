import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { $ } from 'protractor';
import { Router, ActivatedRoute } from '@angular/router';
import { employees } from '../../users';
import { Employee } from '../../models/itest';
import {usersList } from '../../users-list';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public usersData = employees;
  public usersListData = usersList;
  public tableHeaders: Array<any> = [
    'id',
   'name',
   'email',
    'city',
    'pincode'
  ];
  public employee = new Employee();
  public userRecord = {};
  public userList: any = [];
  public showForm = false;
  public isCreate = false;


  constructor(private _userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
 }

  ngOnInit() {
    this.showForm = false;
    this.isCreate = false;
    if (this.activatedRoute.routeConfig.path === 'add') {
      this.showForm = true;
      this.isCreate = true;
    }
    this.userrList();
    console.log('users', employees);
    console.log('usersListData', this.usersListData);
    this.employee.printMethod();
  }
  public userrList() {
    this._userService.getUserList().subscribe(res => {
      if (res) {
        this.userList = res;
      }
    }, err => {
      console.log('err', err);
    });
  }
  public addUser() {
    this.showForm = true;
    this.router.navigate(['add'], {relativeTo: this.activatedRoute.parent});
  }
  onSubmit(event) {
    console.log('event', event);
    if (event) {
      this.showForm = false;
      this.isCreate = false;
      this.router.navigate([''], {relativeTo: this.activatedRoute});
      this.userrList();
    }
  }
  onCancel(event) {
    if (event) {
      this.showForm = false;
      this.isCreate = false;
      this.router.navigate([''], {relativeTo: this.activatedRoute});
    }
  }
  onEditRecord() {

  }
  onDeleteRecord(userId) {
    let cn = confirm('are you sure you want to perform this action?');
    if (cn = true) {
      this._userService.deleteUser(userId).subscribe(res => {
        if (res) {
          this.userrList();
        }
      });
    } else {
      this.userrList();
    }

  }
  onDelete(user) {
    const confirmDelete = confirm('are you sure?');
    const rowIndex = this.usersData.findIndex(data => data.id === user.id);
    if (confirmDelete) {
      this.usersData.splice(rowIndex, 1);
    }
  }
}
