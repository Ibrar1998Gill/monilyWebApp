import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { clientComponent } from './client.component';
import { clientsComponent } from './clients.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:clientsComponent
      },
      {
        path:'add-client',
        component:clientComponent
      },
      {
        path:'edit-client',
        component:clientComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class clientslRoutingModule { }
