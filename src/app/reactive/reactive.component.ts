import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
  public userForm: FormGroup;
  public userForm2: FormGroup;
  public submitted = false;
  public submitted2 = false;
  public emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  public phonePattern = '[0-9]{10}';
  public hobiesList = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]),
      city: new FormControl('', Validators.required),
      gender: new FormControl('Male', Validators.required),
      // hobies: new FormGroup({}, Validators.required)
      address: new FormGroup({
        landmark: new FormControl(''),
        pincode: new FormControl(''),
      })
    });
    this.hobiesList = ['cooking', 'reading', 'playing'];




    this.userForm2 = this.fb.group({
      username: new FormControl(null, Validators.required),
      skills: this.fb.array([])
    });
  }

  get f() {
    return this.userForm.controls;
  }
  get f2() {
    return this.userForm2.controls;
  }
  myHobies() {

  }
  onSubmit() {
    this.submitted = true;
    console.log('userForm', this.userForm.value);
  }



  onForm2Submit() {
    this.submitted2 = true;
    if (this.userForm2.invalid) {
      return;
    }
    console.log('userForm2', this.userForm2.value);
  }
  newSkill(): FormGroup {
    return this.fb.group({
      launguage: new FormControl('', Validators.required),
      exp: new FormControl('', Validators.required)
    });
  }
  employeeSkills(empIndex: number): FormArray {
    return this.userForm2.get('skills') as FormArray;
  }
  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeSkill(skillIndex) {
    this.employeeSkills(skillIndex).removeAt(skillIndex);
  }
}
