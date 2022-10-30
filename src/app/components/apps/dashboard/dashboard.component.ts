import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UniversalService } from 'src/app/shared/services/universal.service';
import * as $ from 'jquery'
import { AuthService } from 'src/app/shared/services/firebase/auth.service';
import { LocalService } from 'src/app/shared/services/local.service';
import * as data from '../../../../dummyDatas/expenses'
import * as profitdata from '../../../../dummyDatas/profitandloss'
import * as revenue from '../../../../dummyDatas/revenue'
import { HelperService } from '../../../shared/services/helper.service'
// import * as top10ExpensesFunc from '../../../../helpers/helper'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class dashboardComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef, private http: AuthService, private localService: LocalService, private helperService: HelperService) { }
  secondary_color = localStorage.getItem('secondary_color') || '#f73164';
  primary_color = localStorage.getItem('primary_color') || '#5330ab';
  companyid: any;
  mutablePieData: any = {};
  totalExpenses: number;
  profitAndLoss: number;
  expensesBar: number;
  pieArray: any = [['Task', 'expenses']]
  pieChart3: any = {
    chartType: 'PieChart',
    dataTable: this.pieArray,
    options: {
      width: '100%',
      height: 200,
      colors: ["#f8d62b", "#51bb25", "#a927f9", this.secondary_color, this.primary_color],
      backgroundColor: '#FEF5ED'
    },
  };
  bar: any;
  ngOnInit(): void {
    this.companyid = this.localService.getJsonValue('company');
    this.observe()
    if (this.companyid != null) {
      this.getExpenses()
      let ExpenseDate = data.default.QueryResponse.Purchase;
      let prices = []
      ExpenseDate.map(expense => {
        let category = expense.Line[0].AccountBasedExpenseLineDetail.AccountRef.name;
        if (this.mutablePieData[category]) {
          this.mutablePieData[category] += parseFloat(expense.TotalAmt);
        } else {
          this.mutablePieData[category] = parseFloat(expense.TotalAmt);
        }
      })
      for (const key in this.mutablePieData) {
        let val = Math.round(this.mutablePieData[key])
        this.pieArray.push([key, val])
        prices.push(val)
      }

      var sum = prices.reduce(function (a, b) {
        return a + b;
      }, 0);
      this.totalExpenses = sum
      profitdata.default.Rows.Row.map(v => {
        if (v.hasOwnProperty('group')) {
          if (v.group == "Income") {
            if (v?.hasOwnProperty('Summary')) {
              this.profitAndLoss = Math.round(v.Summary.ColData[1].value)
            }
          }
        }
        if (v.hasOwnProperty('group')) {
          if (v.group == "Expenses") {
            if (v?.hasOwnProperty('Summary')) {
              this.expensesBar = Math.round(v.Summary.ColData[1].value)
            }
          }
        }
      })
      console.log('====================================');
      console.log(revenue);
      console.log('====================================');
      // bar chart 
      this.bar = {
        series: [
          {
            name: "basic",
            data: [this.profitAndLoss, this.expensesBar]
          }
        ],
        colors: [this.secondary_color],
        chart: {
          type: "bar",
          height: 185
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [
            "Income",
            "Expenses"
          ]
        }
      };
    }
    else return;
  }

  // observing company selected or not
  async observe() {
    UniversalService.companyModal.subscribe((res: any) => {
      setTimeout(() => {
        if (res && this.companyid != null) {
          this.getExpenses()
          // $("#companyModal").trigger('click')
        }
        else {
          return
          // $("#closeModal").trigger('click')
        }
      }, 500);
      this.cd.detectChanges();
    })
  }
  getExpenses() {
    // this.http.postQuickbooks(`/${this.companyid}/query`,
    //       'select * from purchase startposition 1',{}).subscribe(res=>{
    //         console.log('====================================');
    //         console.log(res, "res hai");
    //         console.log('====================================');
    //       }),err=>{
    //         console.log('====================================');
    //         console.log(err,"error hai");
    //         console.log('====================================');
    //       }
  }
}
