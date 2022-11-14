import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/shared/services/firebase/auth.service';
import { LocalService } from 'src/app/shared/services/local.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})

export class financialComponent implements OnInit {
  companyid: any;
  totalIncomeHead: string;
  totalIncomeValue: number;
  totalExpensesHead: string;
  totalExpensesValue: number;
  totalNetOperHead: string;
  totalNetOperValue: number;
  totalNetIncHead: string;
  totalNetIncValue: number;
  salesHead: string;
  salesValue: number;
  expenses: any = [];
  bank: any = [];
  AR: any = [];
  otherAsset: any = [];
  totalCurrentAssetsHead: string;
  totalCurrentAssetsValue: number;
  totalAssetsHead: string;
  totalAssetsValue: number;
  AP: any = [];
  totalAPHead: string;
  totalAPValue: number;
  CreditCards: any = [];
  totalCreditCardsHead: string;
  totalCreditCardsValue: number;
  totalLiabilitiesHead: string;
  totalLiabilitiesValue: number;
  totalCurrentLiabilitiesHead: string;
  totalCurrentLiabilitiesValue: number;
  equities: any = [];
  totalEquityHead: string;
  totalEquityValue: number;
  totalLiabilitiesandEquityHead: string;
  totalLiabilitiesandEquityValue: number;
  constructor(private http: AuthService, private localService: LocalService, private toasterService: ToastrService) { }
  ngOnInit(): void {
    this.companyid = this.localService.getJsonValue("company");
    this.getFinancial()
  }
  getFinancial() {
    this.http.getMonilyData(`report?entity=ProfitAndLoss&id=${this.companyid.id}`, true).subscribe((res: any) => {
      console.log(res, "hello financial response");
      if (res?.data != null) {
        res?.data?.Rows.Row.map(e => {
          if (e.hasOwnProperty('group')) {
            if (e.group == "Income") {
              e.Rows.Row.map(s => {
                this.salesHead = s.ColData[0].value
                this.salesValue = s.ColData[1].value
              })
              this.totalIncomeHead = e.Summary.ColData[0].value
              this.totalIncomeValue = e.Summary.ColData[1].value
            }
            if (e.group == "Expenses") {
              e.Rows.Row.map(ex => {
                const expenseHead = ex.ColData[0].value
                const expenseValue = ex.ColData[1].value
                this.expenses.push({ expenseHead, expenseValue })
              })
              this.totalExpensesHead = e.Summary.ColData[0].value
              this.totalExpensesValue = e.Summary.ColData[1].value
            }
            if (e.group == "NetOperatingIncome") {
              this.totalNetOperHead = e.Summary.ColData[0].value
              this.totalNetOperValue = e.Summary.ColData[1].value
            }
            if (e.group == "NetIncome") {
              this.totalNetIncHead = e.Summary.ColData[0].value
              this.totalNetIncValue = e.Summary.ColData[1].value
            }
          }
        })
      }
      else {
        this.toasterService.error("No data found, please try again after few minutes")
      }
    }, err => {
      console.log(err);
    })
    this.http.getMonilyData(`report?entity=BalanceSheet&id=${this.companyid.id}`, true).subscribe((res: any) => {
      console.log(res, "hello financial response");
      if (res?.data != null) {
        res?.data?.Rows.Row.map(b => {
          if (b.hasOwnProperty('group')) {
            if (b.group == "TotalAssets") {
              b.Rows.Row.map(ba => {
                ba.Rows.Row.map(balAss => {
                  if (balAss.group == "BankAccounts") {
                    balAss.Rows.Row.map(bank => {
                      this.bank.push(bank)
                    })
                  }
                  if (balAss.group == "AR") {
                    balAss.Rows.Row.map(AR => {
                      this.AR.push(AR)
                    })
                  }
                  if (balAss.group == "OtherCurrentAssets") {
                    balAss.Rows.Row.map(otherAsset => {
                      this.otherAsset.push(otherAsset)
                    })
                  }
                })
                if (ba.group == 'CurrentAssets') {
                  this.totalCurrentAssetsHead = ba.Summary.ColData[0].value;
                  this.totalCurrentAssetsValue = ba.Summary.ColData[1].value;
                }
              })
              if (b.group == 'TotalAssets') {
                this.totalAssetsHead = b.Summary.ColData[0].value;
                this.totalAssetsValue = b.Summary.ColData[1].value;
              }
            }
            if (b.group == "TotalLiabilitiesAndEquity") {
              b.Rows.Row.map(ba => {
                if (ba.group == "Liabilities") {
                  ba.Rows.Row.map(balAss => {
                    if (balAss.group == "CurrentLiabilities") {
                      balAss.Rows.Row.map(currentLiablities => {
                        if (currentLiablities.group == "AP") {
                          currentLiablities.Rows.Row.map(Ap => {
                            this.AP.push(Ap)
                          })
                          this.totalAPHead = currentLiablities.Summary.ColData[0].value;
                          this.totalAPValue = currentLiablities.Summary.ColData[1].value;
                        }
                        if (currentLiablities.group == "CreditCards") {
                          currentLiablities.Rows.Row.map(CreditCards => {
                            this.CreditCards.push(CreditCards)
                          })
                          this.totalCreditCardsHead = currentLiablities.Summary.ColData[0].value;
                          this.totalCreditCardsValue = currentLiablities.Summary.ColData[1].value;
                        }
                      })
                      this.totalCurrentLiabilitiesHead = balAss.Summary.ColData[0].value
                      this.totalCurrentLiabilitiesValue = balAss.Summary.ColData[1].value
                    }
                  })
                  this.totalLiabilitiesHead = ba.Summary.ColData[0].value
                  this.totalLiabilitiesValue = ba.Summary.ColData[1].value
                }
                if (ba.group == "Equity") {
                  ba.Rows.Row.map(equity => {
                    this.equities.push(equity)
                  })
                  this.totalEquityHead = ba.Summary.ColData[0].value
                  this.totalEquityValue = ba.Summary.ColData[1].value
                }
              })
              console.log('====================================');
              console.log(b, "helloba");
              console.log('====================================');
              this.totalLiabilitiesandEquityHead = b.Summary.ColData[0].value
              this.totalLiabilitiesandEquityValue = b.Summary.ColData[1].value
            }
          }
          console.log('====================================');
          console.log(b, "helloeu");
          console.log('====================================');
        })
      }
      else {
        this.toasterService.error("No data found, please try again after few minutes")
      }
    }, err => {
      console.log(err);
    })

    console.log('====================================');
    console.log(this.bank,
      this.CreditCards);
    console.log('====================================');
  }
}
