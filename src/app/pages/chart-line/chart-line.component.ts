import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DesignerService } from '../../service/designer.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-chart-line',
  imports: [ChartModule, CardModule],
  templateUrl: './chart-line.component.html',
  styleUrl: './chart-line.component.css',
  standalone: true,
})
export class ChartLineComponent {
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
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    // ✅ Define green and light green colors
    const green = '#2e7d32';       // Dark green
    const lightGreen = '#81c784';  // Light green

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: 0.4,
            pointBackgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
            borderColor: 'green'
        },
        {
          label: 'My Second dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          tension: 0.4,
                      pointBackgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
            borderColor: 'green'

          
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.7,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
            grid: {
        display: true,             // ✅ Shows horizontal grid lines
        drawBorder: true,
      },
      border: {
        display: false,
        color: textColor
      }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
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
