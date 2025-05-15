import { isPlatformBrowser, NgClass, NgFor } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { AppconfigService } from '../../service/appconfig.service';
import { DesignerService } from '../../service/designer.service';
import { ChartComponent } from "../chart/chart.component";
import { MenuItem, PrimeIcons } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-home',
  imports: [CardModule ,  NgClass ,  NgFor, ChartModule, ChartComponent, SidebarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards = [
    {
      title: 'Orders',
      value: '152',
      subtext: '24 new since last visit',
      icon: 'pi pi-shopping-cart',
      iconBg: 'bg-blue-200 text-blue-600'
    },
    {
      title: 'Revenue',
      value: '$2.100',
      subtext: '%52+ since last week',
      icon: 'pi pi-dollar',
      iconBg: 'bg-orange-100 text-orange-500'
    },
    {
      title: 'Customers',
      value: '28441',
      subtext: '520 newly registered',
      icon: 'pi pi-users',
      iconBg: 'bg-cyan-100 text-cyan-500'
    },
    {
      title: 'Comments',
      value: '152 Unread',
      subtext: '85 response',
      icon: 'pi pi-comment',
      iconBg: 'bg-purple-100 text-purple-500'
    }
  ];









  // revenueData: any;
  // revenueOptions: any;

  // ngOnInit() {
  //   this.revenueData = {
  //     labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  //     datasets: [
  //       {
  //         label: 'Subscriptions',
  //         data: [10000, 20000, 30000, 25000, 40000],
  //         backgroundColor: 'rgba(6, 182, 212, 0.8)'
  //       },
  //       {
  //         label: 'Advertising',
  //         data: [5000, 10000, 5000, 8000, 6000],
  //         backgroundColor: 'rgba(139, 92, 246, 0.8)'
  //       },
  //       {
  //         label: 'Affiliate',
  //         data: [2000, 3000, 4000, 2000, 1000],
  //         backgroundColor: 'rgba(16, 185, 129, 0.8)'
  //       }
  //     ]
  //   };

  //   this.revenueOptions = {
  //     responsive: true,
  //     maintainAspectRatio: true,
  //     plugins: {
  //       legend: {
  //         labels: {
  //           color: '#495057'
  //         }
  //       },
  //       title: {
  //         display: true,
  //         text: 'Revenue Stream',
  //         color: '#495057',
  //         font: {
  //           size: 16
  //         }
  //       }
  //     },
  //     scales: {
  //       x: {
  //         stacked: true,
  //         ticks: {
  //           color: '#6c757d'
  //         },
  //         grid: {
  //           display: false
  //         }
  //       },
  //       y: {
  //         stacked: true,
  //         beginAtZero: true,
  //         max: 90000,
  //         ticks: {
  //           color: '#6c757d',
  //           stepSize: 100000,
  //          callback: (value: number) => value.toLocaleString()

  //         },
  //         grid: {
  //           color: '#e0e0e0'
  //         }
  //       }
  //     }
  //   };
  // }


  // revenueData: any;
  // revenueOptions: any;

  // ngOnInit() {
  //   this.revenueData = {
  //     labels: ['Q1', 'Q2', 'Q3', 'Q4'], 
  //     datasets: [
  //       {
  //         label: 'Subscriptions',
  //         data: [10000, 24000, 23000, 18000],
  //         backgroundColor: 'rgba(6, 182, 212, 0.8)'
  //       },
  //       {
  //         label: 'Advertising',
  //         data: [5000, 10000, 5000, 8000],
  //         backgroundColor: 'rgba(139, 92, 246, 0.8)'
  //       },
  //       {
  //         label: 'Affiliate',
  //         data: [2000, 3000, 4000, 2000],
  //         backgroundColor: 'rgba(16, 185, 129, 0.8)'
  //       }
  //     ]
  //   };

  //   this.revenueOptions = {
  //     responsive: true,
  //     maintainAspectRatio: true,
  //     plugins: {
  //       legend: {
  //         labels: {
  //           color: '#495057'
  //         }
  //       },
  //       title: {
  //         display: true,
  //         text: 'Revenue Stream',
  //         color: '#495057',
  //         font: {
  //           size: 16
  //         }
  //       }
  //     },
  //     scales: {
  //       x: {
  //         stacked: true,
  //         ticks: {
  //           color: '#6c757d',
  //           callback: (value: string) => value 
  //         },
  //         grid: {
  //           display: true, 
  //           color: '#e0e0e0'
  //         },
  //         border: {
  //           color: '#6c757d', 
  //           width: 1
  //         }
  //       },
  //       y: {
  //         stacked: true,
  //         beginAtZero: true,
  //         min: 0, 
  //         max: 25000, 
  //         ticks: {
  //           color: '#6c757d',
  //           stepSize: 5000, 
  //           callback: (value: number) => {
  //             const customTicks = [5000, 10000, 15000, 20000, 25000];
  //             if (customTicks.includes(value)) {
  //               return value.toLocaleString();  
  //             }
  //             return ''; 
  //           }
  //         },
  //         grid: {
  //           color: '#e0e0e0'
  //         }
  //       }
  //     }
  //   };
  // }


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
  //       labels: [],
  //       datasets: [
  //         {
  //           type: 'bar',
  //           label: 'Dataset 1',
  //           backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
  //           borderRadius: 10,
  //           data: [50, 25, 12, 48, 90, 76, 42]
  //         },
  //         {
  //           type: 'bar',
  //           label: 'Dataset 2',
  //           backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
  //           borderRadius: 10,
  //           data: [21, 84, 24, 75, 37, 65, 34]
  //         },
  //         {
  //           type: 'bar',
  //           label: 'Dataset 3',
  //           backgroundColor: documentStyle.getPropertyValue('--p-orange-500'),
  //           borderRadius: 10,
  //           data: [41, 52, 24, 74, 23, 21, 32]
  //         }
  //       ]
  //     };

  //     this.options = {
  //       maintainAspectRatio: false,
  //       aspectRatio: 0.8,
  //       plugins: {
  //         tooltip: {
  //           mode: 'index',
  //           intersect: false
  //         },
  //         legend: {
  //           labels: {
  //             color: textColor
  //           }
  //         }
  //       },
  //       scales: {
  //         x: {
  //           stacked: true,
  //           ticks: {
  //             color: textColorSecondary
  //           },
  //           grid: {
  //             color: surfaceBorder,
  //             drawBorder: false
  //           }
  //         },
  //         y: {
  //           stacked: true,
  //           ticks: {
  //             color: textColorSecondary
  //           },
  //           grid: {
  //             color: surfaceBorder,
  //             drawBorder: false
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

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
  
      const gradient = ctx!.createLinearGradient(0, 0, 0, 400); // vertical gradient
      gradient.addColorStop(1, 'rgba(13, 150, 104, 0.8)');   // dark green (top)
      gradient.addColorStop(0.5, 'rgba(34, 243, 160, 0.7)'); // medium green (middle)
      gradient.addColorStop(0, 'rgba(115, 236, 174, 0.6)');   // light green (bottom)
  
      this.data = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            type: 'bar',
            label: 'Sales',
            backgroundColor: gradient,            
            borderRadius: 10,
            data: [10000, 24000, 22000, 18000, 10000, 25000, 15000],
            barPercentage: 0.6,        // narrower bars
            categoryPercentage: 0.6,
          },
          {
            type: 'bar',
            label: 'Dummy',
            backgroundColor: 'rgba(0,0,0,0)', // invisible, forces x-axis grid lines
            data: [0, 0, 0, 0, 0, 0, 0]
          }
        ]
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          },
          legend: {
            labels: {
              color: '#000' // black text
            }
          }
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: '#666'
            },
            grid: {
              display: false,
              drawOnChartArea: true,
              drawBorder: true,
              drawTicks: true,
              color: '#ccc',
              lineWidth: 1
            },
            barPercentage: 0.4,       // <-- Decrease bar width
            categoryPercentage: 0.6
          },
          y: {
            stacked: true,
            min: 0,
            max: 25000,
            ticks: {
              stepSize: 5000,
              color: '#666',
              callback: function (value: number) {
                return value.toLocaleString();
              }
            },
            grid: {
              display: true,
              drawOnChartArea: true,
              drawBorder: true,
              drawTicks: true,
              color: '#ccc',
              lineWidth: 1
            }
          }
        }
      };

      this.cd.markForCheck();
    }
  }





























}





