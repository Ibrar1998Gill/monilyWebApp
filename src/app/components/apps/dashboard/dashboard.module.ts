import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
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
    CKEditorModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgApexchartsModule
  ],
})
export class dashboardModule { }
