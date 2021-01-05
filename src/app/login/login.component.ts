import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  constructor(private router: Router, private localServer: LocalService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log('this.loginForm.value', this.loginForm.value);
    if (this.loginForm.valid) {
      this.localServer.registeredUsers().subscribe(res => {
        if (res) {
          console.log('reg res', res);
          res.forEach(element => {
            console.log('element.name', element.name);
            console.log('element.password', element.password);
            console.log('this.loginForm.value.userName', this.loginForm.value.userName);
            if (element.name === this.loginForm.value.userName && element.password === Number(this.loginForm.value.password)) {
              localStorage.setItem('userDetails', JSON.stringify({'userName':this.loginForm.value.userName,'password': Number(this.loginForm.value.password)}));
              this.router.navigate(['user']);
            }
          });
        }
      });
      // this.toastr.success('Hello world!', 'Toastr fun!');
    }
  }
}
