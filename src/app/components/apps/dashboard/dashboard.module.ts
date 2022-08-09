import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {StudentsModule} from './students/students.module'
import {EventsComponent} from './events/events.component'
import {TeachersModule} from './teachers/teachers.module'
import {NgApexchartsModule } from 'ng-apexcharts'
@NgModule({
  declarations: [DashboardComponent, EventsComponent],
  imports: [
    CommonModule,
    StudentsModule,
    TeachersModule,
    DashboardRoutingModule,
    NgxDropzoneModule,
    CKEditorModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgApexchartsModule
  ],
})
export class DashboardModule { }
