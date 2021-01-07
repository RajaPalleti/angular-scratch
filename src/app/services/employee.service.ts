import { Injectable } from '@angular/core';
interface IEmplyoee {
  empNo: Number;
  empName: string;
  salary: Number;

}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    public employees: Array<any>;
  constructor() { }
/**
 * @description method to return or get employee list
 * @author raja
 * @date 14/05/2020
 * @returns Array<IEmployee>
 * @Memberof EmployeeService
 */
  public getEmployees(): Array<IEmplyoee> {
    this.employees = [
      {
        empNo: 1231,
        empName: 'rakesh',
        salary: 20000
      },
      {
        empNo: 1232,
        empName: 'hari',
        salary: 24000
      },
      {
        empNo: 1233,
        empName: 'satti',
        salary: 25000
      },
      {
        empNo: 1234,
        empName: 'madhu',
        salary: 28000
      },
    ];
    return this.employees;
  }
  /**
 * @description method to add employee record
 * @author raja
 * @date 14/05/2020
 * @param {IEmployee} empRecord
 * @Memberof EmployeeService
 */
  public addEmployee(empRecord: IEmplyoee): void {
    this.employees.push(empRecord);
  }

  /**
 * @description method to remove employee from list
 * @author raja
 * @date 14/05/2020
 * @param {number} index
 * @Memberof EmployeeService
 */
  public deleteEmployee(index: number): void {
    this.employees.splice(index, 1);
  }
}
