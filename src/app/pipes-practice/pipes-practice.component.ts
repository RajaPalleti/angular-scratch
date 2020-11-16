import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from '../models/employee-details.model';
import { employees } from '../users';

@Component({
    selector: 'app-pipes-practice',
    templateUrl: './pipes-practice.component.html',
    styleUrls: ['./pipes-practice.component.scss']
})

export class PipesPracticeComponent implements OnInit {
    public employeedetails: EmployeeDetails;
    public usersData = employees;
    public tableHeaders: Array<any> = [
        'id',
        'name',
        'email',
        'gender',
        'salary',
        'city',
        'pincode',
        'status'
    ];
    public startIndex: number;
    public endIndex: number;
    public min: number;
    public max: number;
    public isearch: any;
    public orderValue: any;
    public orderType: any;
    orderObject = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
        return 0;
    }
    ngOnInit() {
        this.employeedetails = {
            name: 'Murali krishna',
            email: 'Murali@gmail.com',
            course: 'Angular 10',
            startDate: new Date(2020, 11, 1),
            fee: 20000
        };
        this.startIndex = 0;
        this.endIndex = 1;
        this.orderValue = 'joinDate';
        this.orderType = 'asc';
    }
    previousUser() {
        // alert(this.startIndex + ',' + this.endIndex);
        if (this.startIndex === 0) {
            // alert(this.startIndex);
            this.startIndex = this.usersData.length - 1;
            this.endIndex = this.usersData.length;
            // console.log('this.startIndex11', this.startIndex);
            // console.log('this.endIndex11', this.endIndex);
        } else {
            this.startIndex -= 1;
            this.endIndex -= 1;
            // console.log('this.startIndex', this.startIndex);
            // console.log('this.endIndex', this.endIndex);
        }
    }
    nextUser() {
        if (this.endIndex >= this.usersData.length ) {
            this.startIndex = 0;
            this.endIndex = 1;
        } else {
            this.startIndex += 1;
            this.endIndex += 1;
        }
    }
    orderChange() {
        if (this.orderType === 'asc') {
            this.orderType = 'dsc';
        } else {
            this.orderType = 'asc';
        }
    }
}

