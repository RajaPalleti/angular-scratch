import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-local-server',
  templateUrl: './local-server.component.html',
  styleUrls: ['./local-server.component.scss']
})
export class LocalServerComponent implements OnInit {
  employeeList = [];
  empForm: FormGroup;
  submitted = false;
  updateForm: any;
  public emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  public phonePattern = '[0-9]{10}';
  constructor(private localService: LocalService) { }
  ngOnInit() {
    this.empForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      salary: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.phonePattern)]),
      city: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
    });
    this.getEmployeeList();
  }
  get f() {
    return this.empForm.controls;
  }
  getEmployeeList() {
    this.localService.getEmpList().subscribe(res => {
      if (res) {
        console.log('res', res);
        this.employeeList = res;
      }
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log('this.empForm', this.empForm.value);
    if (this.empForm.valid) {
      if (this.updateForm && this.updateForm.id) {
        alert();
        this.empForm.value['id'] = this.updateForm.id;
        this.localService.updateEmp(this.empForm.value).subscribe(data => {
          this.getEmployeeList();
        });
      } else {
        this.localService.addEmp(this.empForm.value).subscribe(data => {
          this.getEmployeeList();
        });
      }
    }
  }
  editEmp(formData) {
    this.empForm.patchValue(formData);
    this.updateForm = formData;
    console.log('this.updateForm', this.updateForm);
  }
  deleteEmp(formData) {
    const isDelete = confirm('Are you sure');
    if (isDelete) {
      this.localService.deleteEmp(formData).subscribe(data => {
        this.getEmployeeList();
      });
    }
  }
}
