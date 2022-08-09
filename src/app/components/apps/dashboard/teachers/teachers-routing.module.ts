import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { SalaryComponent } from './salary/salary.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeachersComponent } from './teachers.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:TeachersComponent
      },
      {
        path:'teachers/salary',
        component:SalaryComponent
      },
      {
        path:'teachers/attendance',
        component:AttendanceComponent
      },
      {
        path:'teachers/profile',
        component:TeacherDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
