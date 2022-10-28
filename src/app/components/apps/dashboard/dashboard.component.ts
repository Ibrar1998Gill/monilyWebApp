import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UniversalService } from 'src/app/shared/services/universal.service';
import * as $ from 'jquery'
import { AuthService } from 'src/app/shared/services/firebase/auth.service';
import { LocalService } from 'src/app/shared/services/local.service';
import * as data from '../../../../dummyDatas/expenses'
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
  mutableData: any = [];
  mutablePieData: any = {};
  RecentTranSort: any;
  RecentTransaction: any;
  top10Expenses: any;
  currentMonthExpenses: any;
  quarterlyExpenses: any;
  yearlyExpenses: any;
  pieChart3: any = {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work', 2],
      ['Eat', 2],
      ['Commute', 11],
      ['Watch TV', 2],
      ['Sleep', 7]
    ],
    options: {
      width: '100%',
      height: 200,
      colors: ["#f8d62b", "#51bb25", "#a927f9", this.secondary_color, this.primary_color],
      backgroundColor: '#FEF5ED'
    },
  };
  bar = {
    series: [
      {
        name: "basic",
        data: [12400, 43430]
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
  ngOnInit(): void {
    this.companyid = this.localService.getJsonValue('company');
    this.observe()
    this.mutableData = []
    if (this.companyid != null) {
      this.getExpenses()
      let ExpenseDate = data.default.QueryResponse.Purchase;
      ExpenseDate.map(expense => {
        let memo = expense.PrivateNote;
        let txnDate = expense.TxnDate
        let payee = expense.EntityRef ? expense.EntityRef.name : '';
        let category = expense.Line[0].AccountBasedExpenseLineDetail.AccountRef.name;
        this.mutableData.push({
          Date: txnDate,
          Payee: payee,
          Category: category,
          Memo: memo,
          Amount: expense.TotalAmt,
          id: expense.Id,
        });
        if (this.mutablePieData[category]) {
          this.mutablePieData[category] += parseFloat(expense.TotalAmt);
        } else {
          this.mutablePieData[category] = parseFloat(expense.TotalAmt);
        }
      })
      let sortedDesc = this.mutableData.sort(function (a, b) {
        return <any>new Date(b.Date) - <any>new Date(a.Date);
      });
      this.RecentTranSort = sortedDesc.slice(0, 10)
      // setRecentTranSort(sortedDesc.slice(0, 10));
      this.top10Expenses = this.helperService.top10ExpensesFunc(this.mutableData)
      this.yearlyExpenses = this.helperService.getYearlyExpenses(this.mutableData)
      const mutableQuarterly = this.helperService.getQuarterlyExpenses(this.mutableData)
      this.quarterlyExpenses = parseFloat(
        mutableQuarterly[Object.keys(mutableQuarterly).pop()],
      ).toFixed(2)
      this.currentMonthExpenses = this.helperService.getCurrentMonthExpenses(this.mutableData)
      this.RecentTransaction = this.mutableData.slice(0, 10)
      console.log('====================================');
      console.log(this.currentMonthExpenses);
      console.log('====================================');
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
