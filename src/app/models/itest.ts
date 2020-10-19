export interface Itest {
    fname: string;
    lname: string;
    age: number;
    printMethod(): void;
}
export class Employee implements Itest {
    fname = 'raja';
    lname = 'palleti';
    age = 30;
    printMethod(): void {
        const employee = 'Employee details are' + ' ' + this.fname + ' ' + this.lname + ' ' + this.age;
        console.log('employee', employee);
    }

}
// const obj = new First();
// obj.printMethod();
