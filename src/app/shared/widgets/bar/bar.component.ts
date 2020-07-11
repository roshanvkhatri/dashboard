import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  public barChartOptions = {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
            tickMarkLength: 0,
          }
        }
      ],
      yAxes: [
        {
          position: 'right',
          ticks: {
            max: 10000,
            min: 0,
            stepSize: 5000,
          },
        }
      ]
    },
    tooltips: {
      xPadding: 20,
      yPadding: 20
    },
    scaleShowVerticals: true,
    responsive: true,
  };
  public barChartLabels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
  public barChartType = 'bar';
  public barChartLegend = false;

  public barChartData = [
    {
      data: [6500, 5900, 8000, 8100, 5600, 5500, 4000, 5900,
        8000, 8100, 5600, 5500, 4000, 5900, 8000, 8100, 5600,
        5500, 4000, 5900, 8000, 8100, 5600, 5500, 4000, 5900, 8000, 8100, 5600, 5500],
      backgroundColor: '#1665D8',
      barThickness: 10,
    },
  ];




  constructor() { }


  ngOnInit(): void { }

}
