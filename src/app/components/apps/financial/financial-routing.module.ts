import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { financialComponent } from './financial.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:financialComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class financialRoutingModule { }
