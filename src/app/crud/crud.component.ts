import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  public id: any;
  public empId: number;
  public empName: string;
  public empSalary: number;
  public empImage: any;
  public empObj: any;
  public empList: Array<any> = [];
  public editData: any;
  public submitLabel: string;
  public imgUrl: any;
  constructor() { }

  ngOnInit() {
    this.submitLabel = 'Submit';
  }
  addEmployee() {
  console.log('empImage', this.empImage);
  this.empImage =  JSON.stringify(this.imgUrl);
    this.empObj = {
      empId: this.empId,
      empName: this.empName,
      empSalary: this.empSalary,
      empImage: this.empImage,
    };

    if (this.editData && this.editData.id) {
      this.empList.forEach((element: any, index) => {
        if (element.id === this.editData.id) {
          console.log('editData', this.editData);
          this.empObj['id'] = this.editData.id;
          this.empList[index] = this.empObj;
        }
      });
    } else {
      this.id = Math.random().toString(36).substr(2, 9);
      this.empObj['id'] = this.id;
      // console.log('this.id', this.id);
      // console.log('empId', this.empId);
      // console.log('this.empObj', this.empObj);
      this.empList.push(this.empObj);
    }
    this.empId = null;
    this.empName = '';
    this.empSalary = null;

  }
  editEmployee (data) {
    this.editData = data;
    this.empId = data.empId;
    this.empName = data.empName;
    this.empSalary = data.empSalary;
    this.empImage = data.empImage;
    this.submitLabel = 'Update';
  }
  deleteEmployee(i) {
    const deleteEmpployee = confirm('Are yu sure?');
    if (deleteEmpployee) {
      this.empList.splice(i, 1);
    }
  }
  fileSelected(event) {
    console.log('event', event.target.files[0]);
    if (event.target.files[0]) {
      const reader = new FileReader();
      const readerData = reader.readAsDataURL(event.target.files[0]);
      const readerStringData = reader.readAsBinaryString(event.target.files[0]);
console.log('readerStringData', readerStringData);
      reader.onload = (e: any) => {
        this.imgUrl = e.target.result;
        console.log('imgUrl', this.imgUrl);
      };
    }
  }
}
