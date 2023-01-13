import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './firebase/auth.service';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  constructor(private httpService: AuthService, private localService:LocalService, private Toaster:ToastrService) {
   }
  public authToken = this.localService.getJsonValue('authUser')
  // yearly quaterly monthly sepration
  getYearlyExpenses = expenses => {
    const yearlyExpenses = {};
    expenses.map(expense => {
      const currentYear = new Date().getFullYear();
      const year = new Date(expense.Date).getFullYear();
      if (year === currentYear) {
        if (yearlyExpenses[year]) {
          yearlyExpenses[year] += parseFloat(expense.Amount);
        } else {
          yearlyExpenses[year] = parseFloat(expense.Amount);
        }
      }
    });
    if (yearlyExpenses == null) {
      return 0
    }
    else {
      return parseFloat(yearlyExpenses[new Date().getFullYear()]).toFixed(2);
    }
  };
  getQuarterlyExpenses = expenses => {
    const quarterlyExpenses = {};
    expenses.map(expense => {
      const month = new Date(expense.Date).getMonth();
      const year = new Date(expense.Date).getFullYear();
      const currentYear = new Date().getFullYear();
      if (year === currentYear) {
        if (month <= 2) {
          if (quarterlyExpenses['Q1']) {
            quarterlyExpenses['Q1'] += parseFloat(expense.Amount);
          } else {
            quarterlyExpenses['Q1'] = parseFloat(expense.Amount);
          }
        } else if (month <= 5) {
          if (quarterlyExpenses['Q2']) {
            quarterlyExpenses['Q2'] += parseFloat(expense.Amount);
          } else {
            quarterlyExpenses['Q2'] = parseFloat(expense.Amount);
          }
        } else if (month <= 8) {
          if (quarterlyExpenses['Q3']) {
            quarterlyExpenses['Q3'] += parseFloat(expense.Amount);
          } else {
            quarterlyExpenses['Q3'] = parseFloat(expense.Amount);
          }
        } else {
          if (quarterlyExpenses['Q4']) {
            quarterlyExpenses['Q4'] += parseFloat(expense.Amount);
          } else {
            quarterlyExpenses['Q4'] = parseFloat(expense.Amount);
          }
        }
      }
    });
    return quarterlyExpenses;
  }
  getCurrentMonthExpenses = expenses => {
    const currentMonthExpenses = {};
    expenses.map(expense => {
      var dateMomentObject = expense.Date
      var dateObject = new Date(dateMomentObject)
      const month = dateObject.getMonth();
      const currentMonth = new Date().getMonth() + 1;
      if (month === currentMonth) {
        if (currentMonthExpenses[month]) {
          currentMonthExpenses[month] += parseFloat(expense.Amount);
        } else {
          currentMonthExpenses[month] = parseFloat(expense.Amount);
        }
      }
    });
    if (currentMonthExpenses == null) {
      return 0
    }
    else return currentMonthExpenses[new Date().getMonth() - 1]
  };
  getMonthlyExpenses = (
    expenses,
    frontColor = '#006DFF',
    gradientColor = '#009FFF',
  ) => {
    let monthlyExpensesPaid = {},
      monthlyExpensesUnpaid = {};
    expenses.map(expense => {
      const date = new Date(expense.Date);
      const month = date.getMonth();
  
      if (monthlyExpensesPaid[month]) {
        monthlyExpensesPaid[month] +=
          parseFloat(expense.TotalAmt) - parseFloat(expense.Amount);
      } else if (!monthlyExpensesPaid[month])
        monthlyExpensesPaid[month] =
          parseFloat(expense.TotalAmt) - parseFloat(expense.Amount);
      if (monthlyExpensesUnpaid[month]) {
        monthlyExpensesUnpaid[month] += parseFloat(expense.Amount);
      } else monthlyExpensesUnpaid[month] = parseFloat(expense.Amount);
    });
    // initialising the empty months with 0
    for (let i = 0; i < new Date().getMonth(); i++) {
      if (!monthlyExpensesPaid[i]) monthlyExpensesPaid[i] = 0;
      if (!monthlyExpensesUnpaid[i]) monthlyExpensesUnpaid[i] = 0;
    }
    // yahan se krna hai
    let chartData = [];
    Object.keys(monthlyExpensesPaid).map(month => {
      chartData.push({
        value: monthlyExpensesPaid[month],
        frontColor: "yellow",
        gradientColor: "yellow",
        label: this.monthNames[month],
        spacing: 2,
        labelWidth: 30,
      });
      chartData.push({
        value: monthlyExpensesUnpaid[month],
        frontColor: "orange",
        gradientColor: "orange",
      });
    });
    return chartData;
  };
  // top 10
  top10ExpensesFunc = expenses => {
    return expenses
      .sort((a, b) => {
        const bAmt = parseFloat(b.Amount);
        const aAmt = parseFloat(a.Amount);
        return bAmt - aAmt;
      })
      .slice(0, 10);
  };
  // calculate days
  calculateDays = oldDate => {
    const time = <any>new Date() - <any>new Date(oldDate);
    return Math.floor(time / (1000 * 3600 * 24));
  };
  // format date
  formattedDate = date => {
    const dateMomentObject = moment(date, 'YYYY/MM/DD'); // 1st argument - string, 2nd argument - format
    const day = dateMomentObject.format('DD');
    const month = dateMomentObject.format('MM');
    const year = dateMomentObject.format('YYYY');
    return `${month}/${day}/${year}`;
  };
  // upload image
  uploadImage = (event, remarks) =>{
    const file:File = event.target.files[0];

        if (file) {

            // this.fileName = file.name;

            const formData = new FormData();
            formData.append('user_id', this.authToken.userId);
            formData.append("file", file);
            this.httpService.uploadImage('uploadFile', formData).subscribe(res=>{
            }),err=>{
              console.log('====================================');
              console.log(err);
              console.log('====================================');
            }
            // const upload$ = this.http.post("/api/thumbnail-upload", formData);

            // upload$.subscribe();
        }
  }
  numberWithCommas = x => {
    if (!x) return x;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  formatMMDDYY(inputDate) {
    // var date = new Date(inputDate);
    const dd = inputDate.substring(8, inputDate.length);
    const mm = inputDate.substring(5, 7);
    const yyyy = inputDate.substring(0, 4);
    return `${mm}/${dd}/${yyyy}`;
  }
  getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}
recursion(data, formattedData){
  if(data?.Rows?.Row){
    data?.Rows?.Row?.map(e=>{
      if(e?.Rows?.Row){
        e?.Rows?.Row?.map(i=>{
          if(i?.hasOwnProperty('ColData')){
            formattedData.push(i?.ColData)
          }
          else{
            this.recursion(i, formattedData)
          }
        })
      }
    })
  }
}
numberOnly(event): boolean {
  const charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    this.Toaster.error("Use number only")
    return false;
  }
  return true;
}
formattedInvoiceDataE = async companyId => {
  this.httpService.getMonilyData(`query?id=${companyId}&_query=select * from invoice`,true).subscribe((res:any)=>{
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
    invoice.map(inv => {
      let txnDate = this.formatMMDDYY(inv?.TxnDate);
      let balance = parseFloat(inv?.Balance);
      let tempDueDate = this.formatMMDDYY(inv?.DueDate);
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
  
      let dueDate = this.calculateDays(tempDueDate);
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
    const dueData = mutableData.filter(item => {
      return item?.Amount != 0;
    });
    const paidData = mutableData.filter(item => {
      return item?.Amount == 0;
    });
  
    const barData = this.getMonthlyExpenses(mutableData);
    const totalSum = mutableSum;
    const last30DaysSum = mutable30DaysSum;
    const last6MonthsSum = mutable6MonthsSum;
    const notDueSum = mutableNotDueSum;
    const last30DaysNotDue = mutable30DaysNotDueSum;
    const last6MonthsNotDue = mutable6MonthsNotDueSum;
    const overDueSum = mutableOverDueSum;
    const last30DaysOverDue = mutable30DaysOverDueSum;
    const last6MonthsOverDue = mutable6MonthsOverDueSum;
    const tableData = mutableData;
    const returnedValue = {
      totalSum,
      last30DaysSum,
      last6MonthsSum,
      notDueSum,
      last30DaysNotDue,
      last6MonthsNotDue,
      overDueSum,
      last30DaysOverDue,
      last6MonthsOverDue,
      tableData,
      barData,
      paidData,
      dueData,
    };
    return totalSum;
  })
};
errToaster(err:string){
  return alert('hello')
}
}
