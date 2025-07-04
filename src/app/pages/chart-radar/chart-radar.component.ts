import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-chart-radar',
  imports: [ChartModule , CardModule],
  templateUrl: './chart-radar.component.html',
  styleUrl: './chart-radar.component.css',
  standalone : true,
})
export class ChartRadarComponent {
  data: any;
  options: any;

  platformId = inject(PLATFORM_ID);
  private cd = inject(ChangeDetectorRef);

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');

      this.data = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
          {
            label: 'My First dataset',
            borderColor: documentStyle.getPropertyValue('--p-gray-400'),
            pointBackgroundColor: documentStyle.getPropertyValue('--p-gray-400'),
            pointBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
            pointHoverBackgroundColor: textColor,
            pointHoverBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            borderColor: documentStyle.getPropertyValue('--p-cyan-400'),
            pointBackgroundColor: documentStyle.getPropertyValue('--p-cyan-100'),
            pointBorderColor: documentStyle.getPropertyValue('--p-cyan-400'),
            pointHoverBackgroundColor: textColor,
            pointHoverBorderColor: documentStyle.getPropertyValue('--p-cyan-400'),
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      };

      this.options = {
              maintainAspectRatio: false,
      aspectRatio: 0.9,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          r: {
                   grid: {
        display: true,             // ✅ Shows horizontal grid lines
        drawBorder: true,
      },
      border: {
        display: false,
        color: textColor
      }
          }
        }
      };

      this.cd.markForCheck();
    }
  }
}
