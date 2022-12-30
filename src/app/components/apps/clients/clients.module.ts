import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../../../shared/shared.module';
import {NgApexchartsModule } from 'ng-apexcharts'
import { NgxPaginationModule } from 'ngx-pagination';
import { clientsComponent } from './clients.component';
import { clientComponent } from './client.component';
import { clientslRoutingModule } from './clients-routing.module'
@NgModule({
  declarations: [clientsComponent, clientComponent],
  imports: [
    CommonModule,
    NgxDropzoneModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgApexchartsModule,
    NgxPaginationModule,
    clientslRoutingModule
    
  ],
})
export class clientModule { }
