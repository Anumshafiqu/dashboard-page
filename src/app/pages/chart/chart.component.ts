import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-chart',
  imports: [ChartModule ,HttpClientModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  // data: any;
  // options: any;

  // platformId = inject(PLATFORM_ID);

  // constructor(private cd: ChangeDetectorRef) {}

  // ngOnInit() {
  //   this.initChart();
  // }

  // initChart() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const documentStyle = getComputedStyle(document.documentElement);
  //     const textColor = documentStyle.getPropertyValue('--p-text-color');
  //     const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  //     const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  //     this.data = {
  //       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  //       datasets: [
  //         {
  //           label: 'Dataset 1',
  //           backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
  //           borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
  //           data: [65, 59, 80, 81, 56, 55, 40],
  //           borderRadius: 10,
  //         },
  //         {
  //           label: 'Dataset 2',
  //           backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
  //           borderColor: documentStyle.getPropertyValue('--p-gray-500'),
  //           data: [28, 48, 40, 19, 86, 27, 90],
  //           borderRadius: 10
  //         }
  //       ]
  //     };

  //     this.options = {
  //       indexAxis: 'y', // horizontal bar
  //       maintainAspectRatio: false,
  //       aspectRatio: 0.8,
  //       plugins: {
  //         legend: {
  //           labels: {
  //             color: textColor
  //           }
  //         }
  //       },
  //       scales: {
  //         x: {
  //           ticks: {
  //             color: textColorSecondary,
  //             font: {
  //               weight: 500
  //             }
  //           },
  //           grid: {
  //             color: surfaceBorder,
  //             drawBorder: true,
  //             // display: true
  //           }
  //         },
  //         y: {
  //           ticks: {
  //             color: textColorSecondary
  //           },
  //           grid: {
  //             display: true // 🚫 hide Y-axis grid
  //           }
  //         }
  //       }
  //     };

  //     this.cd.markForCheck();
  //   }
  // }





















  data: any;
  options: any;

  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef, private http: HttpClient) {}

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      // API: Get exchange rates for USD
      this.http.get<any>('https://api.exchangerate-api.com/v4/latest/USD')
        .subscribe((res:any) => {
          const rates = res.rates;

          // Select 7 currencies
          const currencies = ['EUR', 'INR', 'JPY', 'AUD', 'CAD', 'GBP', 'CNY'];
          const values = currencies.map(cur => rates[cur]);

          this.data = {
            labels: currencies,
            datasets: [
              {
                label: 'Exchange Rate (USD)',
                backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
                borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                data: values,
                borderRadius: 10
              }
            ]
          };

          this.options = {
            indexAxis: 'y', // horizontal bar
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
              legend: {
                labels: {
                  color: textColor
                }
              }
            },
            scales: {
              x: {
                type: 'logarithmic',
                ticks: {
                  color: textColorSecondary,
                  font: {
                    weight: 500
                  }
                },
                grid: {
                  color: surfaceBorder,
                  drawBorder: true
                }
              },
              y: {
                ticks: {
                  color: textColorSecondary
                },
                grid: {
                  display: true
                }
              }
            }
          };

          this.cd.markForCheck();
        });
    }
  }

}
