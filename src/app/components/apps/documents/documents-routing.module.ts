import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { documentsComponent } from './documents.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:documentsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class documentsRoutingModule { }
