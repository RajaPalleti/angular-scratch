import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;
  public submitted = false;

  constructor(private localService: LocalService, private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log('registerForm', this.registerForm.value);
    if (this.registerForm.valid) {
      this.localService.onRegister(this.registerForm.value).subscribe(res => {
        if (res) {
          this.router.navigate(['login']);
        }
      });
    }
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
