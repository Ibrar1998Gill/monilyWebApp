import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import * as financial from "../../../../dummyDatas/financial";

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})

export class financialComponent implements OnInit {
  totalIncomeHead:string;
  totalIncomeValue:number;
  totalExpensesHead:string;
  totalExpensesValue:number;
  totalNetOperHead:string;
  totalNetOperValue:number;
  totalNetIncHead:string;
  totalNetIncValue:number;
  salesHead:string;
  salesValue:number;
  expenses:any=[];
  ngOnInit(): void {
    console.log(financial.default.Rows.Row);
    this.getFinancial()
  }
  getFinancial(){
    financial.default.Rows.Row.map(e=>{
      if(e.hasOwnProperty('group')){
        if(e.group == "Income"){
          e.Rows.Row.map(s=>{
            this.salesHead = s.ColData[0].value
            this.salesValue = s.ColData[1].value
          })
          this.totalIncomeHead = e.Summary.ColData[0].value
          this.totalIncomeValue = e.Summary.ColData[1].value
        }
        if(e.group == "Expenses"){
          e.Rows.Row.map(ex=>{
            const expenseHead = ex.ColData[0].value
            const expenseValue = ex.ColData[1].value
            this.expenses.push({expenseHead, expenseValue})
          })
          this.totalExpensesHead = e.Summary.ColData[0].value
          this.totalExpensesValue = e.Summary.ColData[1].value
        }
        if(e.group == "NetOperatingIncome"){
          this.totalNetOperHead = e.Summary.ColData[0].value
          this.totalNetOperValue = e.Summary.ColData[1].value
        }
        if(e.group == "NetIncome"){
          this.totalNetIncHead = e.Summary.ColData[0].value
          this.totalNetIncValue = e.Summary.ColData[1].value
        }
      }
    })
    console.log(this.expenses);
  }
}
