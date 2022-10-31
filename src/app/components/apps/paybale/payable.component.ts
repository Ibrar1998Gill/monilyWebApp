import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HelperService } from 'src/app/shared/services/helper.service';
import { LocalService } from 'src/app/shared/services/local.service';
import * as paymentData from "../../../../dummyDatas/payment";

@Component({
  selector: 'app-payable',
  templateUrl: './payable.component.html',
  styleUrls: ['./payable.component.scss']
})

export class payableComponent implements OnInit {
  @ViewChild('chart') chart;
  secondary_color = localStorage.getItem("secondary_color") || "#f73164";
  primary_color = localStorage.getItem("primary_color") || "#5330ab";
  companyid;
  bills
  formattedData
  MTD;
  YTD;
  quarter;
  barData
  totalSum;
  last30DaysSum;
  last6MonthsSum;
  notDueSum;
  last30DaysNotDue;
  last6MonthsNotDue;
  overDueSum;
  dueDateHead;
  paidHead;
  dueData
  paidData
  last30DaysOverDue;
  last6MonthsOverDue;
  currentSum;
  currentNotDue;
  currentOverDue;
  timeSelected;
  times:any=[
    {value:"Last 12 months"},
    {value:"Last 6 months"},
    {value:"Last 30 days"}
  ]
  bar: any = {
    series: [
      {
        name: "basic",
        data: [0, 0]
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
      enabled: false,
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return "$" + value;
        }
      },
      categories: ["Payments Overdue", "Payments not due yet"],
    },
  };
  constructor(private helperService: HelperService,
    private localService: LocalService){}
  ngOnInit(): void {
    this.timeSelected = this.times[0].value
    this.companyid = this.localService.getJsonValue("company");
    // this.observe()
    if (this.companyid != null) {
      this.getpayments();
      this.selectTime()
    }
    else return
  }
  selectTime(){
    if (this.timeSelected == 'Last 12 months') {
      this.currentSum = this.totalSum;
      this.currentNotDue = this.notDueSum;
      this.currentOverDue = this.overDueSum;
    } else if (this.timeSelected == 'Last 30 days') {
      this.currentSum = this.last30DaysSum;
      this.currentNotDue = this.last30DaysNotDue;
      this.currentOverDue  = this.last30DaysOverDue;
    } else if (this.timeSelected == 'Last 6 months') {
      this.currentSum = this.last6MonthsSum;
      this.currentNotDue = this.last6MonthsNotDue;
      this.currentOverDue  = this.last6MonthsOverDue;
    }
    this.bar.series[0].data[0] = this.currentOverDue
    this.bar.series[0].data[1] = this.currentNotDue
    this.chart?.updateSeries([
      {
        name: "basic",
        data: [this.currentOverDue, this.currentNotDue],
      }
    ])
  }
  getpayments(){
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
        last30Days.setDate(today.getDate() - 30); // date 30 days from now
        let last6Months = new Date();
        last6Months.setMonth(today.getMonth() - 6); // data 6 months from now
        let bills = paymentData.default.Bill;
        console.log('====================================');
        console.log(bills);
        console.log('====================================');
        bills.map(bill => {
          let txnDate = new Date(bill.TxnDate).toLocaleString();
          txnDate = txnDate.substring(0, txnDate.indexOf(','));
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
        this.dueData =mutableData.filter(item => {return item.Amount != 0;});
        this.paidData=mutableData.filter(item => {return item.Amount == 0;});
        this.barData=this.helperService.getMonthlyExpenses(mutableData);
        this.MTD=this.helperService.getCurrentMonthExpenses(mutableData);
        this.YTD=this.helperService.getYearlyExpenses(mutableData);
        const mutableQuarterly = this.helperService.getQuarterlyExpenses(mutableData);
        this.quarter=parseFloat(mutableQuarterly[Object.keys(mutableQuarterly).pop()]).toFixed(2);
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
  }
}
