import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../../IEmpolyee';
import {EmployeeService} from '../../services/employee.service';
import {Router} from '@angular/router';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public employee:IEmployee = {
    name : '',
    dob : '',
    address: '',
    role : '',
    salary : '',
    experience : ''
  };

  constructor(private _employeeService:EmployeeService,
              private _router:Router) { }

  ngOnInit(): void {
  }

  // add Employee
  public addEmployee(){
    if(this.employee.name !== '' && this.employee.dob !== '' && this.employee.address !== '' && this.employee.role !== '' && this.employee.salary !== '' && this.employee.experience !== ''){
      this._router.navigate(['/employee']);
      console.log(this.addEmployee);
      alertify.alert("Employee details added successfully.", function(){
    alertify.message('OK');
  });
  }
  else {
    alertify
  .alert("please fill the details.", function(){
    alertify.message('OK');
  });
    
  }

  }
}