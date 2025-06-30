import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { pipe } from 'rxjs';
interface EventItem {
    status: string;
    date: string;
    icon: string;
    color: string;
    image?: string;
    description?: string;
}
@Component({
  selector: 'app-line-pages',
  imports: [TimelineModule , CardModule  , NgIf , ButtonModule , NgStyle ],
  templateUrl: './line-pages.component.html',
  styleUrl: './line-pages.component.css',
  standalone : true,
})
export class LinePagesComponent {
//   events1 = [
//   { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', image: 'https://primefaces.org/cdn/primeng/images/demo/product/controller.jpg', description: 'Product ordered successfully' },
//   { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', description: 'Order is being processed' },
//   { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-envelope', description: 'Package shipped' },
//   { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', description: 'Order delivered' }
// ];
// timeline-demo.component.ts
events1 = ['2020', '2021', '2022', '2023'];

years = [2020, 2021, 2022, 2023];
events: EventItem[] = [
    {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: 'pi pi-shopping-cart',
        color: '#9C27B0',
        image: 'game-controller.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!'
    },
    {
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: 'pi pi-cog',
        color: '#673AB7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!'
    },
    {
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: 'pi pi-send',
        color: '#FF9800',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!'
    },
    {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#607D8B',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!'
    }
];

}
