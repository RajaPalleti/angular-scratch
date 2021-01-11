import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NewUserService } from 'src/app/services/new-user.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  @Input() userRecord: any;
  @Output() ngFormSubmit: EventEmitter<any> = new EventEmitter();
  @Output() ngFormCancel: EventEmitter<any> = new EventEmitter();
  public userForm: FormGroup;
  constructor(private _userService: UserService,
    private newUserService: NewUserService) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      designation: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      age: new FormControl(''),
      gender: new FormControl(''),
      address: new FormGroup({
        country: new FormControl(''),
        state: new FormControl(''),
        city: new FormControl(''),
      })
    });
  }
  onSubmit(): void {
    console.log('userForm', this.userForm.value);
    this.userRecord = this.userForm.value;
    this._userService.addUser(this.userForm.value).subscribe(res => {
      if (res) {
        this.ngFormSubmit.emit(true);
        this.userForm.reset();
      }
    });
    this.newUserService.newUser(this.userForm.value).subscribe(data => {
      console.log('data', data);
    });
  }
  onCancel(): void {
    this.ngFormCancel.emit();
  }
}
