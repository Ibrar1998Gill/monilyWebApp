import { Component, OnInit } from "@angular/core";
import { HelperService } from "src/app/shared/services/helper.service";
import { LocalService } from "src/app/shared/services/local.service";
import * as data from "../../../../dummyDatas/expenses";
import * as moment from "moment";
import { AuthService } from "src/app/shared/services/firebase/auth.service";
@Component({
  selector: "app-expenses",
  templateUrl: "./expenses.component.html",
  styleUrls: ["./expenses.component.scss"],
})
export class expensesComponent implements OnInit {
  secondary_color = localStorage.getItem("secondary_color") || "#f73164";
  primary_color = localStorage.getItem("primary_color") || "#5330ab";
  companyid: any;
  page: number = 1;
  totalPage = [];
  mutableData: any = [];
  mutablePieData: any = {};
  pieArray: any = [["Task", "expenses"]];
  RecentTranSort: any;
  RecentTransaction: any;
  top10Expenses: any;
  currentMonthExpenses: any;
  quarterlyExpenses: any;
  yearlyExpenses: any;
  monthlyData: any;
  yearlyData: any;
  quaterlyData: any;
  totalExpenses: number;
  pieChart3: any = {
    chartType: "PieChart",
    dataTable: this.pieArray,
    options: {
      width: "100%",
      height: 300,
      colors: [
        "#f8d62b",
        "#51bb25",
        "#a927f9",
        this.secondary_color,
        this.primary_color,
      ],
      backgroundColor: "#FEF5ED",
    },
  };
  constructor(
    private localService: LocalService,
    private helperService: HelperService,
    private http: AuthService
  ) {
  }
  ngOnInit(): void {
    this.companyid = this.localService.getJsonValue("company");
    this.mutableData = [];
    if (this.companyid != null) {
      this.revenueGenerate();
    }
    else return
    this.getExpenses()
  }
  getExpenses() {
    this.http.getMonilyData(`query?id=${this.companyid.id}&_query=select * from purchase startposition 1`, true).subscribe((res: any) => {
      let ExpenseDate = []
      res?.data?.QueryResponse?.Purchase.map(expense => {
        ExpenseDate.push(expense)
      })
      let prices = [];
      ExpenseDate.map((expense) => {
        let memo = expense.PrivateNote;
        let txnDate = expense.TxnDate;
        let payee = expense.EntityRef ? expense.EntityRef.name : "";
        let category =
          expense.Line[0].AccountBasedExpenseLineDetail.AccountRef.name;
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
      });
      for (const key in this.mutablePieData) {
        let val = Math.round(this.mutablePieData[key]);
        this.pieArray.push([key, val]);
        prices.push(val);
      }

      var sum = prices.reduce(function (a, b) {
        return a + b;
      }, 0);
      this.totalExpenses = sum;
      let sortedDesc = this.mutableData.sort(function (a, b) {
        return <any>new Date(b.Date) - <any>new Date(a.Date);
      });
      this.RecentTranSort = sortedDesc.slice(0, 10);
      this.top10Expenses = this.helperService.top10ExpensesFunc(
        this.mutableData
      );
      this.yearlyExpenses = this.helperService.getYearlyExpenses(
        this.mutableData
      );
      const mutableQuarterly = this.helperService.getQuarterlyExpenses(
        this.mutableData
      );
      this.quarterlyExpenses = parseFloat(
        mutableQuarterly[Object.keys(mutableQuarterly).pop()]
      ).toFixed(2);
      this.currentMonthExpenses = this.helperService.getCurrentMonthExpenses(
        this.mutableData
      );
      this.RecentTransaction = this.mutableData.slice(0, 10);
      console.log(this.RecentTranSort, this.top10Expenses);
    }), err => {
      console.log('====================================');
      console.log(err, "error hai");
      console.log('====================================');
    }
  }
  revenueGenerate() {

    // this.getExpenses()

  }
}
