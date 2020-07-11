import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  years: string[] = [
    '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',
    '2020'
  ];
  constructor() { }

  ngOnInit(): void {
    const lineChart1 = new Chart('linechart-1', {
      type: 'line',
      data: {
        datasets: [{
          pointRadius: 0,
          borderWidth: 2,
          pointStyle: 'line',
          fill: true,
          backgroundColor: '#E7EFFB',
          borderColor: '#1664D7',
          data: [45, 60, 80],
        }]

      },
      options: {
        legend: {
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: -20
            }
          },
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
                tickMarkLength: 0,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false,
                max: 100,
                min: 0,
                stepSize: 50
              },
              gridLines: {
                display: false,
                tickMarkLength: 0,
              },
            },
          ],
        }
      }

    });

    const lineChart2 = new Chart('linechart-2', {
      type: 'line',
      data: {
        datasets: [{
          pointRadius: 0,
          fill: true,
          pointStyle: 'line',
          lineTension: 0.1,
          backgroundColor: '#EAF6EC',
          borderColor: '#68C476',
          data: [90, 30],
        }]
      },
      options: {
        legend: {
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: -20
            }
          },
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
                tickMarkLength: 0,
              }
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false,
                max: 100,
                min: 0,
                stepSize: 50
              },
              gridLines: {
                display: false,
                tickMarkLength: 0,
              }
            }
          ],
        }
      }

    });
    const lineChart3 = new Chart('linechart-3', {
      type: 'line',
      data: {
        datasets: [{
          pointRadius: 0,
          fill: true,
          pointStyle: 'line',
          lineTension: 0.1,
          backgroundColor: '#F0EEFE',
          borderColor: '#6758F3',
          data: [65, 80, 60, 40],
        }]

      },
      options: {
        legend: {
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: -20
            }
          },
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
                tickMarkLength: 0,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false,
                max: 100,
                min: 0,
                stepSize: 50
              },
              gridLines: {
                display: false,
                tickMarkLength: 0,
              },
            },
          ],
        }
      }

    });
    const lineChart4 = new Chart('linechart-4', {
      type: 'line',
      data: {
        datasets: [{
          pointRadius: 0,
          fill: true,
          pointStyle: 'line',
          lineTension: 0.1,
          backgroundColor: '#FEFAEE',
          borderColor: '#FACF55',
          data: [65, 80, 60, 40],
        }]
      },
      options: {
        legend: {
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: -20
            }
          },
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                display: false,
              },
              gridLines: {
                display: false,
                tickMarkLength: 0,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false,
                max: 100,
                min: 0,
                stepSize: 50
              },
              gridLines: {
                display: false,
                tickMarkLength: 0,
              },
            },
          ],
        }
      }

    });
  }

}
