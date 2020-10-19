"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee() {
        this.fname = 'raja';
        this.lname = 'palleti';
        this.age = 30;
    }
    Employee.prototype.printMethod = function () {
        var employee = 'Employee details are' + this.fname + this.lname + this.age;
        console.log('employee', employee);
    };
    return Employee;
}());
exports.Employee = Employee;
// const obj = new First();
// obj.printMethod();
