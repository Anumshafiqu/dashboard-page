import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, PLATFORM_ID } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-doughnut',
  imports: [ChartModule , CardModule],
  templateUrl: './doughnut.component.html',
  styleUrl: './doughnut.component.css',
  standalone : true,
})
export class DoughnutComponent {
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

      this.data = {
        labels: ['A', 'B', 'C'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
        'indigo', // dark green
        'purple', // light green
        'teal'  // very light green
      ],
      hoverBackgroundColor: [
        '#1b5e20', // hover green
        '#66bb6a',
        '#a5d6a7'
      ]
          }
        ]
      };

      this.options = {
          maintainAspectRatio: false,
  aspectRatio: 0.8,
        cutout: '60%',
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        }
      };

      this.cd.markForCheck();
    }
  }
}
