import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../../../shared/shared.module';
import {NgApexchartsModule } from 'ng-apexcharts'
import {dashboardComponent} from './dashboard.component'
import {dashboardRoutingModule} from './dashboard-routing.module'
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  declarations: [dashboardComponent],
  imports: [
    Ng2GoogleChartsModule,
    CommonModule,
    dashboardRoutingModule,
    NgxDropzoneModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgApexchartsModule
  ],
})
export class dashboardModule { }
