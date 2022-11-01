import { Component, OnInit } from '@angular/core';
import * as financial from "../../../../dummyDatas/financial";

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})

export class financialComponent implements OnInit {
  ngOnInit(): void {
    console.log(financial);
  }
}
