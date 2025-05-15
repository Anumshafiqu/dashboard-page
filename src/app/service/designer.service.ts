import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignerService {

  constructor() {}

  getChartData() {
    return {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Sales',
          data: [10000, 24000, 22000, 18000],  // Updated data
          backgroundColor: [
            'rgba(249, 115, 22, 0.5)',
            'rgba(6, 182, 212, 0.5)',
            'rgb(107, 114, 128, 0.5)',
            'rgba(139, 92, 246, 0.5)',
          ],
          borderColor: [
            'rgb(249, 115, 22)',
            'rgb(6, 182, 212)',
            'rgb(107, 114, 128)',
            'rgb(139, 92, 246)',
          ],
          borderWidth: 1,
          borderRadius: 10, // Add border radius to the bars
        },
      ],
    };
  }
}
