import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { companiesComponent } from './companies.component';
import { companyComponent } from './company.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:companiesComponent
      },
      {
        path:'add-company',
        component:companyComponent
      },
      {
        path:'edit-company',
        component:companyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class companieslRoutingModule { }
