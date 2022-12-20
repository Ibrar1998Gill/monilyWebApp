import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import * as moment from "moment";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "src/app/shared/services/firebase/auth.service";
import { HelperService } from "src/app/shared/services/helper.service";
import { LocalService } from "src/app/shared/services/local.service";

@Component({
  selector: "app-payable",
  templateUrl: "./payable.component.html",
  styleUrls: ["./payable.component.scss"],
})
export class payableComponent implements OnInit {
  @ViewChild("chart") chart;
  @ViewChild("Verticalchart") Verticalchart;
  public recentTransactions = []
  public top10Transactions = []

  lastyear: any = moment().format('YYYY')
  startDate: any = moment(new Date(this.lastyear, 0, 1)).format('YYYY-MM-DD')
  lastMonthStartDate: any = moment().subtract(1, "month").format('YYYY-MM-DD')
  endDate: any = moment().format('YYYY-MM-DD')
  secondary_color = localStorage.getItem("secondary_color") || "#f73164";
  primary_color = localStorage.getItem("primary_color") || "#5330ab";
  companyid;
  bills;
  formattedData;
  MTD;
  YTD;
  quarter;
  barData;
  totalSum;
  last30DaysSum;
  last6MonthsSum;
  notDueSum;
  last30DaysNotDue;
  last6MonthsNotDue;
  overDueSum;
  dueDateHead;
  paidHead;
  dueData;
  paidData;
  last30DaysOverDue;
  last6MonthsOverDue;
  currentSum;
  currentNotDue;
  currentOverDue;
  timeSelected;
  times: any = [
    { value: "Last 12 months" },
    { value: "Last 6 months" },
    { value: "Last 30 days" },
  ];
  bar: any = {
    series: [
      {
        name: "USD",
        data: [0, 0],
      },
    ],
    colors: [this.secondary_color],
    chart: {
      type: "bar",
      height: 150,
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
      labels: {
        formatter: function (value) {
          return "$" + value;
        },
      },
      categories: ["Payments Overdue", "Payments not due yet"],
    },
  };
  verticalBar: any = {
    series: [
      {
        name: "USD",
        data: [],
      },
    ],
    colors: [this.secondary_color],
    chart: {
      type: "bar",
      height: 150,
    },
    plotOptions: {
      bar: {
        vertical: true,
      },
    },
    dataLabels: {
      enabled: true,
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return '$' + value
        }
      }
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };
  constructor(
    private helperService: HelperService,
    private localService: LocalService,
    private http: AuthService,
    private toasterService: ToastrService
  ) { }
  ngOnInit(): void {
    this.timeSelected = this.times[0].value;
    this.companyid = this.localService.getJsonValue("company");
    // this.observe()
    if (this.companyid != null) {
      this.getpayments();
      // this.selectTime();
    } else return;
  }
  selectTime() {
    if (this.timeSelected == "Last 12 months") {
      this.currentSum = this.totalSum;
      this.currentNotDue = this.notDueSum;
      this.currentOverDue = this.overDueSum;
    } else if (this.timeSelected == "Last 30 days") {
      this.currentSum = this.last30DaysSum;
      this.currentNotDue = this.last30DaysNotDue;
      this.currentOverDue = this.last30DaysOverDue;
    } else if (this.timeSelected == "Last 6 months") {
      this.currentSum = this.last6MonthsSum;
      this.currentNotDue = this.last6MonthsNotDue;
      this.currentOverDue = this.last6MonthsOverDue;
    }
    this.bar.series[0].data[0] = this.currentOverDue;
    this.bar.series[0].data[1] = this.currentNotDue;
    this.chart?.updateSeries([
      {
        name: "USD",
        data: [this.currentOverDue, this.currentNotDue],
      },
    ]);
  }
  getpayments() {
    let mutableData = [];
    let mutableSum = 0;
    let mutable30DaysSum = 0;
    let mutable6MonthsSum = 0;
    let mutableOverDueSum = 0;
    let mutable30DaysOverDueSum = 0;
    let mutable6MonthsOverDueSum = 0;
    let mutableNotDueSum = 0;
    let mutable30DaysNotDueSum = 0;
    let mutable6MonthsNotDueSum = 0;

    const today = new Date();
    let last30Days = new Date();
    last30Days.setDate(today.getDate() - 30);
    let last6Months = new Date();
    last6Months.setMonth(today.getMonth() - 6);
    this.http.getMonilyData(`query?id=${this.companyid.id}&_query=select * from Bill startposition 1`, true).subscribe((res: any) => {
      if (res?.data != null) {
        res.data.QueryResponse.Bill.map((bill) => {
          let txnDate = new Date(bill.TxnDate).toLocaleString();
          txnDate = txnDate.substring(0, txnDate.indexOf(","));
          txnDate = this.helperService.formattedDate(bill.TxnDate);
          if (new Date(txnDate) >= last30Days && new Date(txnDate) <= today) {
            mutable30DaysSum += bill.Balance;
            mutable30DaysOverDueSum +=
              new Date(bill.DueDate) < new Date() ? bill.Balance : 0;
            mutable30DaysNotDueSum +=
              new Date(bill.DueDate) > new Date() ? bill.Balance : 0;
          }
          if (new Date(txnDate) >= last6Months && new Date(txnDate) <= today) {
            mutable6MonthsSum += bill.Balance;
            mutable6MonthsOverDueSum +=
              new Date(bill.DueDate) < new Date() ? bill.Balance : 0;
            mutable6MonthsNotDueSum +=
              new Date(bill.DueDate) > new Date() ? bill.Balance : 0;
          }
          const vendorName = bill.VendorRef.name;
          const dueDate = this.helperService.formattedDate(bill.DueDate);
          const pastDue = this.helperService.calculateDays(bill.DueDate);
          mutableSum += bill.Balance;
          mutableNotDueSum +=
            new Date(bill.DueDate) > new Date() ? bill.Balance : 0;
          mutableOverDueSum +=
            new Date(bill.DueDate) < new Date() ? bill.Balance : 0;
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
        this.dueData = mutableData.filter((item) => {
          return item.Amount != 0;
        });
        this.paidData = mutableData.filter((item) => {
          return item.Amount == 0;
        });
        this.barData = this.helperService.getMonthlyExpenses(mutableData);
        this.MTD = this.helperService.getCurrentMonthExpenses(mutableData);
        this.YTD = this.helperService.getYearlyExpenses(mutableData);
        const mutableQuarterly =
          this.helperService.getQuarterlyExpenses(mutableData);
        this.quarter = parseFloat(
          mutableQuarterly[Object.keys(mutableQuarterly).pop()]
        ).toFixed(2);
        this.totalSum = mutableSum;
        this.last30DaysSum = mutable30DaysSum;
        this.last6MonthsSum = mutable6MonthsSum;
        this.notDueSum = mutableNotDueSum;
        this.last30DaysNotDue = mutable30DaysNotDueSum;
        this.last6MonthsNotDue = mutable6MonthsNotDueSum;
        this.overDueSum = mutableOverDueSum;
        this.last30DaysOverDue = mutable30DaysOverDueSum;
        this.last6MonthsOverDue = mutable6MonthsOverDueSum;
        this.formattedData = mutableData;
        let arr = [];
        this.barData.map((e) => {
          if (e.hasOwnProperty("label")) {
            this.verticalBar.xaxis.categories.map((i) => {
              if (e.label == i) {
                arr.push(e.value);
              }
            });
          }
        });
        arr.map((v) => {
          this.verticalBar.series[0].data.push(v);
        });
        this.selectTime()
      }
      else {
        this.toasterService.error("No data found, please try again after few minutes")
      }
    })
    // recent transactions
    this.http.getMonilyData(`report?entity=TransactionList&id=${this.companyid.id}&start_date=${this.lastMonthStartDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res: any) => {
      if (res?.data != null) {
        res?.data?.Rows?.Row.reverse()?.map(e => {
          if (e?.ColData[e?.ColData?.length - 1].value != '' && e?.ColData[e?.ColData?.length - 1].value.includes('-')) {
            this.recentTransactions.push(e?.ColData)
          }
          else {
            return
          }
        })
      }
      else {
        this.toasterService.error("No data found, please try again after few minutes")
      }
    }), err => {
      console.log(err);
    }
    // top 10 transactions
    this.http.getMonilyData(
      `report?entity=TransactionList&id=${this.companyid.id}&transaction_type=bill`, true
    ).subscribe((res: any) => {
      let mutableData = [];
      res.data.Rows.Row?.map(e => {
        if (e?.ColData[e?.ColData?.length - 1].value != '' && e?.ColData[e?.ColData?.length - 1].value.includes('-')) {
          this.top10Transactions?.push(e?.ColData)
        }
      })
      const transactions = this.top10Transactions.sort(function (a, b) {
        let start: any = b?.[b?.length - 1]?.value
        let end: any = a?.[b?.length - 1]?.value
        return end - start
      });
      this.top10Transactions = transactions.slice(0,10)
    });
  }
  formatMinus(value){
    return value.replace(/-/g, '');
  }
}
