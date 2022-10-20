import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { chatComponent } from './chat.component';


const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        component:chatComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class chatRoutingModule { }
