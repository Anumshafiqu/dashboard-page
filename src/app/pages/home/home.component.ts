import { CurrencyPipe, isPlatformBrowser, NgClass, NgFor } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { AppconfigService } from '../../service/appconfig.service';
import { DesignerService } from '../../service/designer.service';
import { ChartComponent } from "../chart/chart.component";
import { MenuItem, PrimeIcons } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { pipe } from 'rxjs';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { PaginatorModule } from 'primeng/paginator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [CardModule ,  NgClass ,  NgFor, ChartModule,
     ChartComponent, SidebarModule , TableModule , ProgressBarModule , PaginatorModule],
  templateUrl: './home.component.html',
  standalone:true,
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
   data: any;
   options: any;

 platformId = inject(PLATFORM_ID);

   constructor(private cd: ChangeDetectorRef , private http : HttpClient) { }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
  
      const gradient = ctx!.createLinearGradient(0, 0, 0, 400); 
      gradient.addColorStop(1, 'rgba(13, 150, 104, 0.8)');  
      gradient.addColorStop(0.5, 'rgba(34, 243, 160, 0.7)'); 
      gradient.addColorStop(0, 'rgba(115, 236, 174, 0.6)');   
  
      this.data = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
          {
            type: 'bar',
            label: 'Sales',
            backgroundColor: gradient,            
            borderRadius: 10,
            data: [10000, 24000, 22000, 18000, 10000, 25000, 15000],
            barPercentage: 0.6,       
            categoryPercentage: 0.6,
          },
          {
            type: 'bar',
            label: 'Dummy',
            backgroundColor: 'rgba(0,0,0,0)',
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
              color: '#000' 
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
            barPercentage: 0.4,     
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

















  
























  sales = [
    { image: 'assets/bamboo-watch.jpg', name: 'Bamboo Watch', price: 65 },
    { image: 'assets/black-watch.jpg', name: 'Black Watch', price: 72 },
    { image: 'assets/blue-band.jpg', name: 'Blue Band', price: 79 },
    { image: 'assets/blue-tshirt.jpg', name: 'Blue T-Shirt', price: 29 },
    { image: 'assets/bracelet.jpg', name: 'Bracelet', price: 15 }
  ];

  progressItems = [
    { name: 'Space T-Shirt', category: 'Clothing', percent: 50, colorClass: 'bar-blue' },
    { name: 'Portal Sticker', category: 'Accessories', percent: 16, colorClass: 'bar-orange' },
    { name: 'Supernova Sticker', category: 'Accessories', percent: 67, colorClass: 'bar-purple' },
    { name: 'Wonders Notebook', category: 'Office', percent: 35, colorClass: 'bar-teal' },
    { name: 'Mat Black Case', category: 'Accessories', percent: 75, colorClass: 'bar-red' },
    { name: 'Robots T-Shirt', category: 'Clothing', percent: 50, colorClass: 'bar-green' }
  ];





  products = [
    { name: 'Bamboo Watch', price: 65, image: 'https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg' },
    { name: 'Black Watch', price: 72, image: 'https://primefaces.org/cdn/primevue/images/product/black-watch.jpg' },
    { name: 'Blue Band', price: 79, image: 'https://primefaces.org/cdn/primevue/images/product/blue-band.jpg' },
    { name: 'Blue T-Shirt', price: 29, image: 'https://primefaces.org/cdn/primevue/images/product/blue-t-shirt.jpg' },
    { name: 'Bracelet', price: 15, image: 'https://primefaces.org/cdn/primevue/images/product/bracelet.jpg' },
    { name: 'Brown Purse', price: 120, image: 'https://primefaces.org/cdn/primevue/images/product/brown-purse.jpg' },
    { name: 'Chakra Bracelet', price: 32, image: 'https://primefaces.org/cdn/primevue/images/product/chakra-bracelet.jpg' },
    { name: 'Galaxy Earrings', price: 34, image: 'https://primefaces.org/cdn/primevue/images/product/galaxy-earrings.jpg' },
    { name: 'Game Controller', price: 99, image: 'https://primefaces.org/cdn/primevue/images/product/game-controller.jpg' },
    { name: 'Gaming Set', price: 299, image: 'https://primefaces.org/cdn/primevue/images/product/gaming-set.jpg' }
  ];
  rows = 5;
  goToNextPage(table: any) {
    const currentPage = table.first / this.rows;
    const totalPages = Math.ceil(this.products.length / this.rows);
    if (currentPage < totalPages - 1) {
      table.first = table.first + this.rows;
    }
  }











}





