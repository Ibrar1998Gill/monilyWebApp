import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { expensesComponent } from './expenses.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:expensesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class expensesRoutingModule { }
