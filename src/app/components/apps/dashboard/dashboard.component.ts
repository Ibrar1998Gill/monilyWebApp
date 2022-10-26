import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UniversalService } from 'src/app/shared/services/universal.service';
import * as $ from 'jquery'
import { AuthService } from 'src/app/shared/services/firebase/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class dashboardComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef, private http:AuthService){}
  secondary_color = localStorage.getItem('secondary_color') || '#f73164';
  primary_color = localStorage.getItem('primary_color') || '#5330ab';
  companyid:any;
  pieChart3: any = {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work', 2],
      ['Eat', 2],
      ['Commute', 11],
      ['Watch TV', 2],
      ['Sleep', 7]
    ],
    options: {
      width: '100%',
      height: 200,
      colors: ["#f8d62b", "#51bb25", "#a927f9", this.secondary_color, this.primary_color],
      backgroundColor: '#FEF5ED'
    },
  };
  bar = {
    series: [
        {
            name: "basic",
            data: [12400, 43430]
        }
    ],
    colors: [this.secondary_color],
    chart: {
        type: "bar",
        height: 185
    },
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: [
            "Income",
            "Expenses"
        ]
    }
};
  ngOnInit(): void {
    this.companyid = JSON.parse(localStorage.getItem("company"));
    this.getExpenses()
  }
  // observing company selected or not
  async observe() {
    UniversalService.companyModal.subscribe((res: any) => {
      setTimeout(() => {
        if (res) {
          // $("#companyModal").trigger('click')
        }
        else {
          // $("#closeModal").trigger('click')
        }
      }, 500);
      this.cd.detectChanges();
    })
  }
  getExpenses(){
    this.http.postQuickbooks(`/${this.companyid}/query`,
          'select * from purchase startposition 1',{}).subscribe(res=>{
            console.log('====================================');
            console.log(res);
            console.log('====================================');
          }),err=>{
            console.log('====================================');
            console.log(err);
            console.log('====================================');
          }
  }
}
