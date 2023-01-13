import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/shared/services/firebase/auth.service';
import { LocalService } from 'src/app/shared/services/local.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})

export class financialComponent implements OnInit {
  companyid: any;
  expenses: any = [];
  bank: any = [];
  lastyear: any = moment().format('YYYY')
  startDate: any = moment(new Date(this.lastyear, 0, 1)).format('YYYY-MM-DD')
  endDate: any = moment().format('YYYY-MM-DD')
  constructor(private http: AuthService, private localService: LocalService, private toasterService: ToastrService) { }
  ngOnInit(): void {
    this.companyid = this.localService.getJsonValue("company");
    this.getFinancial()
  }
  dynamicRows(v) {
    if (v) {
      if (v?.hasOwnProperty('Header')) {
        this.expenses.push({ header: v?.Header })
      }
    }
  }
  getFinancial() {
    this.http.getMonilyData(`report?entity=ProfitAndLoss&id=${this.companyid.id}&start_date=${this.startDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res: any) => {
      if (res?.data != null) {
        res?.data?.Rows?.Row?.map(e => {
          this.expenses.push(e)
        })
      }
      else {
        this.toasterService.error("No data found, please try again after few minutes")
      }
    },
      error => {
        this.toasterService.error(error)
      })
    this.http.getMonilyData(`report?entity=BalanceSheet&id=${this.companyid.id}&start_date=${this.startDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res: any) => {
      if (res?.data != null) {
        res?.data?.Rows?.Row?.map(e => {
          this.bank.push(e)
        })
      }
      else {
        this.toasterService.error("No data found, please try again after few minutes")
      }
    },
      error => {
        this.toasterService.error(error)
      })
  }
}
