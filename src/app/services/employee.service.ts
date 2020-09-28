import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IEmployee} from '../IEmpolyee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   public employees:IEmployee[] = [
    {
      name : "Mani",
      dob : "29/1/1996",
      address : "Hyderabad",
      role: "Software Engineer",
      salary: "52000",
      experience: "3 years"
    },
    {
      name : "kishore",
      dob : "2/2/1996",
      address : "Banglore",
      role: " Associate Software Engineer",
      salary: "32000",
      experience: "1.8 years"
    },
    {
      name : "John",
      dob : "2/10/1996",
      address : "Hyderabad",
      role: "Sr Software Engineer",
      salary: "62000",
      experience: "4 years"
    },
    {
      name : "Hari",
      dob : "2/9/1994",
      address : "Hyderabad",
      role: "Software Engineer",
      salary: "52000",
      experience: "3 years"
    },
    {
      name : "Rajan",
      dob : "2/1/1995",
      address : "Adilabad",
      role: "Associate Software Engineer",
      salary: "22000",
      experience: "1.3 years"
    },
    {
      name : "Steve",
      dob : "9/11/1994",
      address : "Gujarat",
      role: "Software Engineer",
      salary: "42000",
      experience: "2.7 years"
    },
    {
      name : "Ram",
      dob : "9/10/1998",
      address : "Hyderabad",
      role: "Associate Software Engineer",
      salary: "22000",
      experience: "1.4 years"
    },
    {
      name : "Stephen",
      dob : "2/5/1995",
      address : "Maharastra",
      role: "Software Engineer",
      salary: "52000",
      experience: "3 years"
    },
    {
      name : "Luis",
      dob : "2/6/1996",
      address : "Hyderabad",
      role: "Associate Software Engineer",
      salary: "32000",
      experience: "2 years"
    }
  ]

  constructor() { }

  // Create (POST) a new Employee
  public addEmployee(employee:IEmployee){
    let newEmployee = {
      name : employee.name,
      dob : employee.dob,
      address : employee.address,
      role : employee.role,
      salary : employee.salary,
      experience : employee.experience
    };

  }
}
