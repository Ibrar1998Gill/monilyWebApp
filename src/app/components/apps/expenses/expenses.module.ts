import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../../../shared/shared.module';
import { expensesComponent } from './expenses.component'
import { expensesRoutingModule } from './expenses-routing.module'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgxPaginationModule } from 'ngx-pagination'
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [expensesComponent],
  imports: [
    CommonModule,
    expensesRoutingModule,
    NgxDropzoneModule,
    CKEditorModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    Ng2GoogleChartsModule,
    NgxDatatableModule,
    NgxPaginationModule,
    NgApexchartsModule
  ],
})
export class expensesModule { }
