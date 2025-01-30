import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  empindex!: number;
  iseditemployee: boolean = false;

  employees: {
    id: number;
    emp_name: string;
    emp_sal: string;
    departments: string;
    age: string;
  }[] = [{id:1,emp_name :"sreedipto",emp_sal:"dfg",departments : "it",age:"33"}];
  empfrom = new FormGroup({
    emp_name: new FormControl(),
    emp_sal: new FormControl(),
    departments: new FormControl(),
    age: new FormControl(),
  });

  empsubmit() {

    if(this.iseditemployee==true){
    const empval = this.empfrom.value;
    const inputemp = {
      id: this.employees.length + 1,
      emp_name: empval.emp_name,
      emp_sal: empval.emp_sal,
      departments: empval.departments,
      age: empval.age,
    };
    this.employees[this.empindex]=inputemp;
    console.log(inputemp);
  }
  else {
    console.log("i am sreedipto submit mode")

    const empval = this.empfrom.value;
    const inputemp = {
      id: this.employees.length + 1,
      emp_name: empval.emp_name,
      emp_sal: empval.emp_sal,
      departments: empval.departments,
      age: empval.age,
    };
    this.employees.push(inputemp);

  }
}

resetForm(){
  this.empfrom.reset();

}

editemp(ediem:any,empindex1:any){
  console.log(ediem);
  console.log(empindex1);
  this.empindex=empindex1;
  this.iseditemployee=true;
  const payload ={
    emp_name : ediem.emp_name,
    emp_sal : ediem.emp_sal,
    departments : ediem.departments,
    age : ediem.age

  };
  this.empfrom.setValue(payload);
  console.log(ediem,empindex1);

}

delemp(id:number){
  this.employees=this.employees.filter(emp =>emp.id!=id);

}
}
