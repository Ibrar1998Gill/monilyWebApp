import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { recievableComponent } from './recievable.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:recievableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class recievableRoutingModule { }
