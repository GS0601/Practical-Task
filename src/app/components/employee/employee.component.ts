import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../../IEmpolyee';
import {EmployeeService} from '../../services/employee.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

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


  public date = new Date();

  constructor(private _employeeService:EmployeeService,
              private _router:Router) {}

  ngOnInit(): void {

    
}

}