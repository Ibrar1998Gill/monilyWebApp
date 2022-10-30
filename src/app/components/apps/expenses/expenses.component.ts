import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { LocalService } from 'src/app/shared/services/local.service';
import * as data from '../../../../dummyDatas/expenses'

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})

export class expensesComponent implements OnInit {
  companyid: any;
  mutableData: any = [];
  mutablePieData: any = {};
  pieArray:any = [['Task', 'expenses']]
  RecentTranSort: any;
  RecentTransaction: any;
  top10Expenses: any;
  currentMonthExpenses: any;
  quarterlyExpenses: any;
  yearlyExpenses: any;
  constructor(private localService: LocalService, private helperService:HelperService){}
  ngOnInit(): void {
    this.companyid = this.localService.getJsonValue('company');
    // this.observe()
    this.mutableData = []
    if (this.companyid != null) {
      // this.getExpenses()
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
      for (const key in this.mutablePieData) {
        let val = Math.round(this.mutablePieData[key])
        this.pieArray.push([key, val])
      }
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
    }
    else return;
  }
}
