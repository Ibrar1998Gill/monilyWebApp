import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.scss']
})
export class RowsComponent implements OnInit {

  @Input() data: any;
  @Input() index: any;

  constructor() {
  }

  ngOnInit() {
    }

}
