import { Component, OnInit } from "@angular/core";
import { HelperService } from "src/app/shared/services/helper.service";
import { LocalService } from "src/app/shared/services/local.service";
import * as moment from "moment";
import { AuthService } from "src/app/shared/services/firebase/auth.service";
import { ToastrService } from "ngx-toastr";
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
  top10Expenses: any;
  currentMonthExpenses: any;
  quarterlyExpenses: any;
  yearlyExpenses: any;
  monthlyData: any;
  yearlyData: any;
  quaterlyData: any;
  totalExpenses: number;
  recentTransactions:any = []
  top10Transactions:any = []
  lastyear: any = moment().format('YYYY')
  startDate: any = moment(new Date(this.lastyear, 0, 1)).format('YYYY-MM-DD')
  lastMonthStartDate: any = moment().subtract(1, "month").format('YYYY-MM-DD')
  endDate: any = moment().format('YYYY-MM-DD')
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
    private http: AuthService,
    private toasterService:ToastrService
  ) {
  }
  ngOnInit(): void {
    this.companyid = this.localService.getJsonValue("company");
    this.mutableData = [];
    this.getExpenses()
    console.log(moment().subtract(1, "month").format('YYYY-MM-DD'));
    
  }
  getExpenses() {
    // by columns
    this.http.getMonilyData(`report?entity=ProfitAndLoss&id=${this.companyid.id}&summarize_column_by=Quarter&start_date=${this.startDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res: any) => {
      // let ExpenseDate = []
      if(res?.data != null){
      res?.data?.Rows?.Row ? res?.data?.Rows?.Row?.map(e => {
        if (e?.group == 'Expenses') {          
          this.yearlyExpenses = e?.Summary?.ColData[e?.Summary?.ColData.length - 1]?.value
          this.quarterlyExpenses = e?.Summary?.ColData[e?.Summary?.ColData.length - 2]?.value
        }
      }) : null
      }
      else{
        this.toasterService.error("No data found, please try again after few minutes")
      }
    }, err => {
      console.log('====================================');
      console.log(err, "error hai");
      console.log('====================================');
    })
    this.http.getMonilyData(`report?entity=ProfitAndLoss&id=${this.companyid.id}&summarize_column_by=Month&start_date=${this.startDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res: any) => {
      if(res?.data != null){
      res?.data?.Rows?.Row ? res?.data?.Rows?.Row?.map(e => {
        if (e?.group == 'Expenses') {
          console.log(e);
          this.currentMonthExpenses = e?.Summary?.ColData[e?.Summary?.ColData.length - 2]?.value
        }
      }) : null
      }
      else{
        this.toasterService.error("No data found, please try again after few minutes")
      }
    }, err => {
      console.log('====================================');
      console.log(err, "error hai");
      console.log('====================================');
    })
    // annual data
    this.http.getMonilyData(`report?entity=ProfitAndLoss&id=${this.companyid.id}&start_date=${this.startDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res: any) => {
      if (res?.data != null) {
        res.data.Rows.Row.map((v) => {
          if (v.hasOwnProperty("group")) {
            if (v.group == "Expenses") {
              if (v?.hasOwnProperty('Rows')) {
                this.rowsPush(v, this.pieArray)
              }
            }
          }
        });
        this.redrawChart()
      }
      else {
        this.toasterService.error("No data found, please try again after few minutes")
      }
    }, err => {
      if (err.hasOwnProperty('error')) {
        if (err?.error?.hasOwnProperty('errors')) {
          for (const key in err?.error?.errors) {
            this.toasterService.error(err?.error?.errors[key])
          }
        }
      }
      console.log(err, "error hai");
    })
    // recent transactions
    this.http.getMonilyData(`report?entity=TransactionList&id=${this.companyid.id}&start_date=${this.lastMonthStartDate.replace(/['"]+/g, '')}&end_date=${this.endDate.replace(/['"]+/g, '')}`, true).subscribe((res: any) => {
      if (res?.data != null) {
        res?.data?.Rows?.Row.reverse()?.map(e => {
          if (e?.ColData[e?.ColData?.length - 1].value != '' && e?.ColData[e?.ColData?.length - 1].value < 0) {
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
      res.data.Rows.Row?.map(e => {
        if (e?.ColData[e?.ColData?.length - 1].value != '' && e?.ColData[e?.ColData?.length - 1].value < 0) {
          this.top10Transactions?.push(e?.ColData)
        }
      })
      const transactions = this.top10Transactions.sort(function (a, b) {
        let start: any = b?.[b?.length - 1]?.value
        let end: any = a?.[b?.length - 1]?.value
        return end - start
      });
      if(transactions?.length > 10){
        this.top10Transactions = transactions.slice(0,10)
      }
      else return;
    });
    this.http.getMonilyData(`query?id=${this.companyid.id}&_query=select * from Bill startposition 1`,true).subscribe(res=>{
        console.log(res,'queryres');
    }),err=>{
        console.log(err,'queryerr');
    }
    
    
  }
  redrawChart() {
    let ccComponent = this.pieChart3?.component;
    //force a redraw
    ccComponent?.draw();
  }
  rowsPush(v, array){
      v?.Rows?.Row?.map((e, i) => {
        if (e?.hasOwnProperty('ColData')) {
          return array.push([e?.ColData[0]?.value, Math.round(e?.ColData[1]?.value)]);
        }
        else {
          e?.Rows?.Row?.map((s, i) => {
            this.rowsPush(s,array)
          })
        }
      })
  }
  findRows(v,val){
    let func = []
    if (v?.hasOwnProperty('Rows')) {
      v?.Rows?.Row?.map((e, i) => {
        if (e?.hasOwnProperty('group')) {
          if(e?.group == val){
            e?.Rows?.Row?.map(s=>{
              this.top10Transactions.push(s?.ColData)
            })
          }
          else{
            this.findRows(e, val)
          }
        }
        // else this.findRows(e, val)
      })
    }
  }
  formatMinus(value){
    return value.replace(/-/g, '');
  }
}
