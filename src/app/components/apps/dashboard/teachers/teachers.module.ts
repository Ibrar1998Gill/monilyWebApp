import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../../../../shared/shared.module';
import { TeachersComponent } from './teachers.component';
import { SalaryComponent } from './salary/salary.component';
import { AttendanceComponent } from './attendance/attendance.component'
import { TeachersRoutingModule } from './teachers-routing.module';
import {TeacherDetailsComponent} from './teacher-details/teacher-details.component'
@NgModule({
  declarations: [TeachersComponent ,SalaryComponent, AttendanceComponent, TeacherDetailsComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    NgxDropzoneModule,
    CKEditorModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class TeachersModule { }

