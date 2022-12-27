import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountantComponent } from './accountant.component';
import { AccountantsComponent } from './accountants.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:AccountantsComponent
      },
      {
        path:'add-accountant',
        component:AccountantComponent
      },
      {
        path:'edit-accountant',
        component:AccountantComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class financialRoutingModule { }
