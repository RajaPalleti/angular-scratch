import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  public employeeList = [];
  public employeeList2: Array<any>;
  public num = 0;
  public empName: string;
  public empSalary: number;
  public empNumber: number;

  constructor(private _empService: EmployeeService) { }

  ngOnInit() {

    this.employeeList = [
      {
        'Name': 'Alfreds Futterkiste',
        'City': 'Berlin',
        'Country': 'Germany',
        'Currency': 100000
      },
      {
        'Name': 'Ana Trujillo Emparedados y helados',
        'City': 'México D.F.',
        'Country': 'Mexico',
        'Currency': 100000
      },
      {
        'Name': 'Antonio Moreno Taquería',
        'City': 'México D.F.',
        'Country': 'Mexico',
        'Currency': 100000
      },
      {
        'Name': 'Around the Horn',
        'City': 'London',
        'Country': 'UK',
        'Currency': 100000
      },
      {
        'Name': 'Bs Beverages',
        'City': 'London',
        'Country': 'UK',
        'Currency': 100000
      },
      {
        'Name': 'Berglunds snabbköp',
        'City': 'Luleå',
        'Country': 'Sweden',
        'Currency': 100000
      },
      {
        'Name': 'Blauer See Delikatessen',
        'City': 'Mannheim',
        'Country': 'Germany',
        'Currency': 100000
      },
      {
        'Name': 'Blondel père et fils',
        'City': 'Strasbourg',
        'Country': 'France',
        'Currency': 100000
      },
      {
        'Name': 'Bólido Comidas preparadas',
        'City': 'Madrid',
        'Country': 'Spain',
        'Currency': 100000
      },
      {
        'Name': 'Bon app',
        'City': 'Marseille',
        'Country': 'France',
        'Currency': 100000
      },
      {
        'Name': 'Bottom-Dollar Marketse',
        'City': 'Tsawassen',
        'Country': 'Canada',
        'Currency': 100000
      },
      {
        'Name': 'Cactus Comidas para llevar',
        'City': 'Buenos Aires',
        'Country': 'Argentina',
        'Currency': 100000
      },
      {
        'Name': 'Centro comercial Moctezuma',
        'City': 'México D.F.',
        'Country': 'Mexico',
        'Currency': 100000
      },
      {
        'Name': 'Chop-suey Chinese',
        'City': 'Bern',
        'Country': 'Switzerland',
        'Currency': 100000
      },
      {
        'Name': 'Comércio Mineiro',
        'City': 'São Paulo',
        'Country': 'Brazil',
        'Currency': 100000
      }
    ];
    console.log('length', this.employeeList.length);
    this.getMyempList();
  }
  onPrev() {
    if (this.num <= 0) {
      this.num = this.employeeList.length - 1;
      console.log('-1', this.num);
    } else {
      this.num = this.num - 1;
    }
    // this.num = this.num - 1;
    console.log('prev n', this.num);
  }
  onNext() {
    if (this.num > this.employeeList.length - 2) {
      this.num = 0;
    } else {
      this.num = this.num + 1;
    }
  }
  public getMyempList(): void {
    this.employeeList2 = this._empService.getEmployees();
    console.log('this.employeeList2', this.employeeList2);
  }
  public addEmpRecord() {
    let empRecord: any = {
      empNo: this.empNumber,
      empName: this.empNumber,
      salary: this.empSalary
    };
    this._empService.addEmployee(empRecord);
    this.empNumber = null;
    this.empName = '';
    this.empSalary = null;
  }
  public deleteEmpRecord(index: number) {
    if (index) {
      this._empService.deleteEmployee(index);
    }
  }
}
