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
  dueData = [];
  paidData;
  last30DaysOverDue;
  last6MonthsOverDue;
  currentSum;
  currentNotDue;
  currentOverDue;
  timeSelected;
  today: any = new Date();
  quarter: any
  MTD: any;
  YTD: any;
  QTD: any;
  sortText:string = 'latest';
  quarterMonth: any = Math.ceil(this.today.getMonth() / 3);
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
  overDuePayments;
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
      this.overduePayments()
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
    this.dueData = []
    let mtd = []
    let qtd = []
    let ytd = []
    this.http.getMonilyData(`report?entity=TransactionList&id=${this.companyid.id}&transaction_type=bill&start_date=${this.startDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res: any) => {
      // console.log(res, this.startDate, this.endDate, "resres");
      res?.data?.Rows?.Row?.map(e => {
        var item = e?.ColData?.[9]?.value
        var month = e?.ColData?.[0]?.value.split('-')[1]
        var currentMonth = moment().format("MM")
        if (e?.ColData[9]?.value < 0) {
          this.dueData.push(e)
          ytd.push(this.formatMinus(item))
          if (this.quarterMonth == 1 && (month >= 1 && month <= 3)) {
            qtd.push(this.formatMinus(item))
          }
          if (this.quarterMonth == 2 && (month >= 4 && month <= 6)) {
            qtd.push(this.formatMinus(item))
          }
          if (this.quarterMonth == 3 && (month >= 7 && month <= 9)) {
            qtd.push(this.formatMinus(item))
          }
          if (this.quarterMonth == 4 && (month >= 10 && month <= 12)) {
            qtd.push(this.formatMinus(item))

          }
          if (month == currentMonth) {
            mtd.push(this.formatMinus(item))
          }
        }
      })
      if (mtd?.length > 0) { this.MTD = this.addItems(mtd) }
      if (qtd?.length > 0) { this.QTD = this.addItems(qtd) }
      if (ytd?.length > 0) { this.YTD = this.addItems(ytd) }
    }), err => {
      console.log(err);
    }
  }
  overduePayments(){
    this.http.getMonilyData(`report?entity=AgedPayableDetail&id=${this.companyid?.id}`, true).subscribe((res: any) => {
      let data = []
      if (res?.data != null) {
        if (res?.data?.Rows?.Row) {
          res?.data?.Rows?.Row?.map(e => {
            if (e?.Rows?.Row) {
              e?.Rows?.Row?.map(i => {
                if (i?.hasOwnProperty('ColData')) {
                  data.push(i?.ColData)
                }
                else {
                  this.helperService.recursion(i, data)
                }
              })
            }
          })
        }
        this.overDuePayments = data
      }
      else {
        this.toasterService.error("No data found, please try again after few minutes")
      }
    }), err => {
      console.log(err);
    }
  }
  formatMinus(value) {
    return value?.replace(/-/g, '');
  }
  addItems(array) {
    return array?.reduce(function (prev, curr) {
      return (Number(prev) || 0) + (Number(curr) || 0);
    });
  }
  sort(event){
    if(event == 'Earlier'){
      this.overDuePayments.reverse()
    }
    if(event == 'Latest'){
      this.overduePayments()
    }
  }
}
