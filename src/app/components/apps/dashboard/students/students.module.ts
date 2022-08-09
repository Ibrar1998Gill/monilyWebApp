import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../../../../shared/shared.module';
import { StudentsComponent } from './students.component';
import { FeesComponent } from './fees/fees.component';
import { AttendanceComponent } from './attendance/attendance.component'
import { StudentDetailsComponent } from './student-details/student-details.component'
import { StudentsRoutingModule } from './students-routing.module';
@NgModule({
  declarations: [StudentsComponent ,FeesComponent, AttendanceComponent, StudentDetailsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    NgxDropzoneModule,
    CKEditorModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class StudentsModule { }

