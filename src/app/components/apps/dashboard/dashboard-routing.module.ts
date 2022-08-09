import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EventsComponent } from './events/events.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'default',
        component:DashboardComponent
      },
      {
        path:'students',
        component:StudentsComponent
      },
      {
        path:'events',
        component:EventsComponent
      },
      {
        path:'teachers',
        component:TeachersComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
