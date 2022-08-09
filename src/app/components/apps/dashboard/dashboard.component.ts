import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as chartData from './../../../shared/data/chart/apex';
import * as knobData from '../../../shared/data/chart/knob';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public splineArea2 = chartData.splineArea2;
  ngOnInit(): void {
    document.getElementById('profit').append(knobData.profit);
  }
}
