import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch : "full" },
  { path : 'sign-in', component : SignInComponent },
  { path : 'sign-up', component : SignUpComponent },
  { path: 'header', component : HeaderComponent },
  { path : 'employee', component : EmployeeComponent },
  { path : 'add-employee' , component : AddEmployeeComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
