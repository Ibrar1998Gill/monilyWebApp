import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { FeesComponent } from './fees/fees.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:StudentsComponent
      },
      {
        path:'students/fees',
        component:FeesComponent
      },
      {
        path:'students/attendance',
        component:AttendanceComponent
      },
      {
        path:'students/profile',
        component:StudentDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
