import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { payableComponent } from './payable.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:payableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class payableRoutingModule { }
