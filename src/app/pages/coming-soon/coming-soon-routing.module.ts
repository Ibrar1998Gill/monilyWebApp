import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleComponent } from './simple/simple.component';
import { PageWithImageComponent } from './page-with-image/page-with-image.component';
import { PageWithVideoComponent } from './page-with-video/page-with-video.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'simple',
        component: SimpleComponent
      },
      {
        path: 'simple-with-bg-img',
        component: PageWithImageComponent
      },
      {
        path: 'simple-with-bg-vid',
        component: PageWithVideoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComingSoonRoutingModule { }
