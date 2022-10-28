import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
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
    if(yearlyExpenses == null){
      return 0
    }
    else{
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
      var dateMomentObject = expense.Date // 1st argument - string, 2nd argument - format
      var dateObject = new Date(dateMomentObject)
      const month = dateObject.getMonth();
      const currentMonth = new Date().getMonth();
      if (month === currentMonth) {
        if (currentMonthExpenses[month]) {
          currentMonthExpenses[month] += parseFloat(expense.Amount);
        } else {
          currentMonthExpenses[month] = parseFloat(expense.Amount);
        }
      }
    });
    if(currentMonthExpenses == null){
      return 0
    }
    else return currentMonthExpenses[new Date().getMonth() - 1]
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
}
