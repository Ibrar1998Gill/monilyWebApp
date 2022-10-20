import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class dashboardComponent implements OnInit {
  secondary_color = localStorage.getItem('secondary_color') || '#f73164';
  primary_color = localStorage.getItem('primary_color') || '#5330ab';
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
  }
}
