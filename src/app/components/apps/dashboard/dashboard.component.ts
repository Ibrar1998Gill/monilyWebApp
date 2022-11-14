import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { UniversalService } from "src/app/shared/services/universal.service";
import * as $ from "jquery";
import { AuthService } from "src/app/shared/services/firebase/auth.service";
import { LocalService } from "src/app/shared/services/local.service";
import { HelperService } from "../../../shared/services/helper.service";
import * as moment from "moment";
import { ToastrService } from "ngx-toastr";
// import * as top10ExpensesFunc from '../../../../helpers/helper'
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class dashboardComponent implements OnInit {
  @ViewChild("chart") chart;
  constructor(
    private cd: ChangeDetectorRef,
    private http: AuthService,
    private localService: LocalService,
    private helperService: HelperService,
    private toasterService: ToastrService
  ) { }
  secondary_color = localStorage.getItem("secondary_color") || "#f73164";
  primary_color = localStorage.getItem("primary_color") || "#5330ab";
  companyid: any;
  mutablePieData: any = {};
  totalExpenses: number;
  profitAndLoss: number = 0;
  expensesBar: number = 0;
  monthlyDataRevenue: any;
  yearlyDataRevenue: any;
  quaterlyDataRevenue: any;
  monthlyDataPayments: any;
  yearlyDataPayments: any;
  quaterlyDataPayments: any;
  pieArray: any = [["Task", "expenses"]];
  pieChart3: any = {
    chartType: "PieChart",
    dataTable: this.pieArray,
    options: {
      width: "100%",
      height: 200,
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
  bar: any = {
    series: [
      {
        name: "USD",
        data: [this.profitAndLoss, this.expensesBar],
      },
    ],
    noData: {
      text: 'Loading...'
    },
    colors: [this.secondary_color],
    chart: {
      type: "bar",
      height: 185,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: ["Income", "Expenses"],
    },
  };
  redrawChart() {
    let ccComponent = this.pieChart3.component;
    //force a redraw
    ccComponent.draw();
  }
  ngOnInit(): void {
    this.observe();
    if (this.localService.getJsonValue("company") != null) {
      this.companyid = this.localService.getJsonValue("company");
    }
    if (this.companyid != null) {
      this.getExpenses();
      this.dashboardCharts();
      this.revenueGenerate();
      this.paymentGenerate();
    } else return;
  }

  // observing company selected or not
  async observe() {
    UniversalService.companySelected.subscribe((res) => {
      if (res) {
        this.companyid = this.localService.getJsonValue("company");
        this.getExpenses();
        this.dashboardCharts();
        this.revenueGenerate();
        this.paymentGenerate();
      } else return;
    });
  }
  getExpenses() {
    this.http.getMonilyData(`report?entity=ProfitAndLoss&id=${this.companyid.id}`, true).subscribe((res:any) => {
      console.log('====================================');
      console.log(res, "res hai");
      console.log('====================================');
      if (res?.data != null) {
      res.data.Rows.Row.map((v) => {
        if (v.hasOwnProperty("group")) {
          if (v.group == "Income") {
            if (v?.hasOwnProperty("Summary")) {
              this.profitAndLoss = Math.round(v.Summary.ColData[1].value);
            }
          }
        }
        if (v.hasOwnProperty("group")) {
          if (v.group == "Expenses") {
            if (v?.hasOwnProperty("Summary")) {
              this.expensesBar = Math.round(v.Summary.ColData[1].value);
            }
          }
        }
      });
      this.chart?.updateSeries([
        {
          name: "USD",
          data: [this.profitAndLoss, this.expensesBar],
        },
      ]);
    }
    else{
      this.toasterService.error("No data found, please try again after few minutes")
    }
    }, err => {
      if(err.hasOwnProperty('error')){
        if(err?.error?.hasOwnProperty('errors')){
          for (const key in err?.error?.errors) {
            this.toasterService.error(err?.error?.errors[key])
          }
        }
      }
      console.log('====================================');
      console.log(err, "error hai");
      console.log('====================================');
    })
  }
  revenueGenerate() {
    this.http.getMonilyData(`query?id=${this.companyid.id}&_query=select * from invoice startposition 1`, true).subscribe((res: any) => {
      let mutableData = [];
      if (res?.data != null) {
        res.data.QueryResponse.Invoice.map((inv) => {
          let txnDate = moment(inv.TxnDate).format("MM/DD/YYYY");
          let dueDate = this.helperService.calculateDays(inv.DueDate);
          mutableData.push({
            Date: txnDate,
            num: inv.DocNumber,
            Customer: inv.CustomerRef.name,
            Amount: inv.Balance,
            TotalAmt: inv.TotalAmt,
            Status: dueDate,
            id: inv.Id,
          });
        });
        this.monthlyDataRevenue =
          this.helperService.getCurrentMonthExpenses(mutableData);
        this.yearlyDataRevenue = this.helperService.getYearlyExpenses(mutableData);
        const mutableQuarterly =
          this.helperService.getQuarterlyExpenses(mutableData);
        this.quaterlyDataRevenue = parseFloat(
          mutableQuarterly[Object.keys(mutableQuarterly).pop()]
        ).toFixed(2);
      }
      else {
        this.toasterService.error("No data found, please try again after few minutes")
      }
    }, err => {
      if(err.hasOwnProperty('error')){
        if(err?.error?.hasOwnProperty('errors')){
          for (const key in err?.error?.errors) {
            this.toasterService.error(err?.error?.errors[key])
          }
        }
      }
      console.log(err);
    })
  }
  paymentGenerate() {
    this.http.getMonilyData(`query?id=${this.companyid.id}&_query=select * from Bill startposition 1`, true).subscribe((res: any) => {
      let mutableData = [];
      if (res?.data != null) {
        res.data.QueryResponse.Bill.map((bill) => {
          let txnDate = new Date(bill.TxnDate).toLocaleString();
          txnDate = txnDate.substring(0, txnDate.indexOf(","));
          txnDate = this.helperService.formattedDate(bill.TxnDate);
          const vendorName = bill.VendorRef.name;
          const pastDue = this.helperService.calculateDays(bill.DueDate);
          mutableData.push({
            Date: txnDate,
            Customer: vendorName,
            Status: this.helperService.calculateDays(bill.DueDate),
            pastDue,
            Amount: bill.Balance,
            TotalAmt: bill.TotalAmt,
            id: bill.Id,
          });
        });
        this.monthlyDataPayments =
          this.helperService.getCurrentMonthExpenses(mutableData);
        this.yearlyDataPayments = this.helperService.getYearlyExpenses(mutableData);
        const mutableQuarterly =
          this.helperService.getQuarterlyExpenses(mutableData);
        this.quaterlyDataPayments = parseFloat(
          mutableQuarterly[Object.keys(mutableQuarterly).pop()]
        ).toFixed(2);
      }
      else {
        this.toasterService.error("No data found, please try again after few minutes")
      }
    }, err => {
      if(err.hasOwnProperty('error')){
        if(err?.error?.hasOwnProperty('errors')){
          for (const key in err?.error?.errors) {
            this.toasterService.error(err?.error?.errors[key])
          }
        }
      }
      console.log(err);
    })
  }
  dashboardCharts() {
    this.http.getMonilyData(`query?id=${this.companyid.id}&_query=select * from purchase startposition 1`, true).subscribe((res: any) => {
      let ExpenseDate = []
      if (res?.data != null) {
        res?.data?.QueryResponse?.Purchase.map(expense => {
          ExpenseDate.push(expense)
        })
        let prices = [];
        ExpenseDate.map((expense) => {
          let category =
            expense.Line[0].AccountBasedExpenseLineDetail.AccountRef.name;
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
        this.redrawChart()
      }
      else {
        this.toasterService.error("No data found, please try again after few minutes")
      }
    }, err => {
      if(err.hasOwnProperty('error')){
        if(err?.error?.hasOwnProperty('errors')){
          for (const key in err?.error?.errors) {
            this.toasterService.error(err?.error?.errors[key])
          }
        }
      }
      console.log(err);
    })
  }
}
