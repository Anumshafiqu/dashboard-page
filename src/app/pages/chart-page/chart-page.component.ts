import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DesignerService } from '../../service/designer.service';
import { CardModule } from 'primeng/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChartpageComponent } from '../chartpage/chartpage.component';
import { ChartLineComponent } from '../chart-line/chart-line.component';
import { PiechartComponent } from "../piechart/piechart.component";
import { DoughnutComponent } from "../doughnut/doughnut.component";
import { PolarareaComponent } from '../polararea/polararea.component';
import { ChartRadarComponent } from '../chart-radar/chart-radar.component';

@Component({
  selector: 'app-chart-page',
  imports: [ChartModule, CardModule, HttpClientModule, ChartLineComponent, PiechartComponent, DoughnutComponent , PolarareaComponent , ChartRadarComponent],
  templateUrl: './chart-page.component.html',
  styleUrl: './chart-page.component.css',
  standalone: true,
})
export class ChartPageComponent {


  data: any;
  options: any;

  private http = inject(HttpClient);
  private cd = inject(ChangeDetectorRef);
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            tension: 0.4,
            borderWidth: 3, // ✅ Thicker line
            // borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
            pointBackgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
            borderColor: 'green'
          },
          {
            label: 'Second Dataset',
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            tension: 0.4,
            borderWidth: 3, // ✅ Thicker line
            // borderColor: documentStyle.getPropertyValue('--p-green-300'),
            pointBackgroundColor: documentStyle.getPropertyValue('--p-green-300'),
            borderColor: 'gray',
            
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
        color: textColorSecondary
      },
      grid: {
        display: true,            // ❌ Hides vertical grid lines
        drawBorder: true
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
