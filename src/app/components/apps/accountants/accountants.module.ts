import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../../../shared/shared.module';
import {NgApexchartsModule } from 'ng-apexcharts'
import {AccountantsComponent} from './accountants.component'
import {AccountantComponent} from './accountant.component'
import {financialRoutingModule} from './accountants-routing.module'
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [AccountantsComponent, AccountantComponent],
  imports: [
    CommonModule,
    financialRoutingModule,
    NgxDropzoneModule,
    CKEditorModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgApexchartsModule,
    NgxPaginationModule,
  ],
})
export class AccountantsModule { }
