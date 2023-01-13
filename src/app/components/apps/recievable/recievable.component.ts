import { LocalService } from 'src/app/shared/services/local.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from "moment";
import { AuthService } from 'src/app/shared/services/firebase/auth.service';
import { ToastrService } from 'ngx-toastr';
import { UniversalService } from 'src/app/shared/services/universal.service';

@Component({
  selector: 'app-recievable',
  templateUrl: './recievable.component.html',
  styleUrls: ['./recievable.component.scss']
})

export class recievableComponent implements OnInit {
  @ViewChild("chart") chart;
  @ViewChild("Verticalchart") Verticalchart;
  secondary_color = localStorage.getItem("secondary_color") || "#f73164";
  primary_color = localStorage.getItem("primary_color") || "#5330ab";
  companyid;
  Invoice;
  formattedData;
  MTD;
  YTD;
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
  dueData: Array<Object> = [];
  paidData;
  last30DaysOverDue;
  last6MonthsOverDue;
  currentSum;
  currentNotDue;
  currentOverDue;
  timeSelected;
  MonthlyprofitAndLoss: any = 0
  YearlyprofitAndLoss: any = 0
  QuaterlyprofitAndLoss: any = 0
  lastyear: any = moment().format('YYYY')
  startDate: any = moment(new Date(this.lastyear, 0, 1)).format('YYYY-MM-DD')
  endDate: any = moment().format('YYYY-MM-DD')
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
      style: {
        color: "black"
      },
      formatter: function (val, opt) {
        return "$" + val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
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
      style: {
        color: "black"
      },
      formatter: function (val, opt) {
        return "$" + val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
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
    if (this.companyid?.id != null) {
      this.getpayments();
      this.getArDues()
      // this.selectTime();
    } else this.toasterService.error("No company found"); return;
  }
  // selectTime() {
  //   if (this.timeSelected == "Last 12 months") {
  //     this.currentSum = this.totalSum;
  //     this.currentNotDue = this.notDueSum;
  //     this.currentOverDue = this.overDueSum;
  //   } else if (this.timeSelected == "Last 30 days") {
  //     this.currentSum = this.last30DaysSum;
  //     this.currentNotDue = this.last30DaysNotDue;
  //     this.currentOverDue = this.last30DaysOverDue;
  //   } else if (this.timeSelected == "Last 6 months") {
  //     this.currentSum = this.last6MonthsSum;
  //     this.currentNotDue = this.last6MonthsNotDue;
  //     this.currentOverDue = this.last6MonthsOverDue;
  //   }
  //   this.bar.series[0].data[0] = this.currentOverDue;
  //   this.bar.series[0].data[1] = this.currentNotDue;
  //   this.chart?.updateSeries([
  //     {
  //       name: "USD",
  //       data: [this.currentOverDue, this.currentNotDue],
  //     },
  //   ]);
  // }
  getpayments() {
    this.http.getMonilyData(`report?entity=ProfitAndLoss&id=${this.companyid?.id}&summarize_column_by=Quarter&start_date=${this.startDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res: any) => {
      if (res?.data != null) {
        res.data.Rows.Row.map((v) => {
          if (v.hasOwnProperty("group")) {
            if (v.group == "Income") {
              if (v?.hasOwnProperty("Summary")) {
                this.YearlyprofitAndLoss = v?.Summary?.ColData[v?.Summary?.ColData?.length - 1]?.value;
                this.QuaterlyprofitAndLoss = v?.Summary?.ColData[v?.Summary?.ColData?.length - 2]?.value;
              }
            }
          }
        });
      }
      else {
        this.toasterService.error("No data found, please try again after few minutes")
      }
    },
    error => {
      this.toasterService.error(error)
    })
    this.http.getMonilyData(`report?entity=ProfitAndLoss&id=${this.companyid?.id}&summarize_column_by=Month&start_date=${this.startDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe(
        (res: any) => {
        if (res?.data != null) {
          res.data.Rows.Row.map((v) => {
            if (v.hasOwnProperty("group")) {
              if (v.group == "Income") {
                if (v?.hasOwnProperty("Summary")) {
                  this.MonthlyprofitAndLoss = v?.Summary?.ColData[v?.Summary?.ColData?.length - 2]?.value;
                }
              }
            }
          });
        }
        else {
          this.toasterService.error("No data found, please try again after few minutes")
        }
      },
      error => {
        this.toasterService.error(error)
      }
    )
  }
  getArDues() {
    this.http.getMonilyData(`query?id=${this.companyid?.id}&_query=select * from invoice`, true).subscribe((res: any) => {
      const invoice = res?.data?.QueryResponse?.Invoice;
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
      invoice?.map(inv => {
        let txnDate = this.helperService.formatMMDDYY(inv?.TxnDate);
        let balance = parseFloat(inv?.Balance);
        let tempDueDate = this.helperService.formatMMDDYY(inv?.DueDate);
        let txnTime = inv?.MetaData?.LastUpdatedTime;
        let date = txnDate;
        if (new Date(date) <= last30Days && new Date(date) <= today) {
          mutable30DaysSum += balance;
          mutable30DaysOverDueSum +=
            new Date(tempDueDate) < new Date() ? balance : 0;
          mutable30DaysNotDueSum +=
            new Date(tempDueDate) >= new Date() ? balance : 0;
        }
        if (new Date(tempDueDate) >= last6Months && new Date(date) <= today) {
          mutable6MonthsSum = balance;
          mutable6MonthsOverDueSum +=
            new Date(tempDueDate) < new Date() ? balance : 0;
          mutable6MonthsNotDueSum +=
            new Date(tempDueDate) > new Date() ? balance : 0;
        }
        mutableSum += balance;

        mutableNotDueSum += new Date(tempDueDate) > new Date() ? balance : 0;
        mutableOverDueSum += new Date(tempDueDate) < new Date() ? balance : 0;

        let dueDate = this.helperService.calculateDays(tempDueDate);
        mutableData.push({
          Date: txnDate,
          Time: txnTime,
          num: inv?.DocNumber,
          Customer: inv?.CustomerRef?.name,
          Amount: balance,
          TotalAmt: parseFloat(inv?.TotalAmt),
          Status: dueDate,
          id: inv?.Id,
          type: 'Invoice',
        });
      });
      this.dueData = mutableData.filter(item => {
        return item?.Amount != 0;
      });
      this.paidData = mutableData.filter(item => {
        return item?.Amount == 0;
      });

      // const barData = this.helperService.getMonthlyExpenses(mutableData);
      // let arr = [];
      // barData.map((e) => {
      //   if (e.hasOwnProperty("label")) {
      //     this.verticalBar.xaxis.categories.map((i) => {
      //       if (e.label == i) {
      //         arr.push(e.value);
      //       }
      //     });
      //   }
      // });
      // arr.map((v) => {
      //   this.verticalBar.series[0].data.push(v);
      // });
    },
    error => {
      this.toasterService.error(error)
    })
  }
}
