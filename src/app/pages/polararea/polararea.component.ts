import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-polararea',
  imports: [ChartModule , CardModule],
  templateUrl: './polararea.component.html',
  styleUrl: './polararea.component.css',
  standalone : true,
})
export class PolarareaComponent {
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
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.data = {
        datasets: [
          {
            data: [10, 14, 5, 3, 2],
              backgroundColor: [
        'indigo', // dark green
        'purple', // light green
        'teal' , // very light green
        'orange'
      ],
            label: 'My dataset'
          }
        ],
        labels: ['Pink', 'Gray', 'Orange', 'Purple', 'Cyan']
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
        // display: true,             // ✅ Shows horizontal grid lines
        // drawBorder: true,
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
