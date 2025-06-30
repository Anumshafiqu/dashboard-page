import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';

@Component({
  selector: 'app-menu',
  imports: [MenuModule, MenubarModule, CardModule, TabViewModule, BreadcrumbModule, StepsModule, TabMenuModule,
    NgIf , TieredMenuModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  standalone: true,
})
export class MenuComponent {
  menuItems: MenuItem[] = [];
  breadcrumbItems: MenuItem[] = [];
  steps: MenuItem[] = [];
  tabs: MenuItem[] = [];
   plainMenu: MenuItem[] = [];
  activeStep = 0;
  activeTab: MenuItem = {};
  homeItem: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Customers',
        icon: 'pi pi-table',
        items: [
          {
            label: 'New',
            icon: 'pi pi-user-plus',
            items: [
              { label: 'Customer', icon: 'pi pi-plus' },
              { label: 'Duplicate', icon: 'pi pi-copy' }
            ]
          },
          { label: 'Edit', icon: 'pi pi-user-edit' }
        ]
      },
      { label: 'Orders', icon: 'pi pi-shopping-cart' },
      { label: 'Shipments', icon: 'pi pi-envelope' },
      { label: 'Profile', icon: 'pi pi-user' },
      { label: 'Quit', icon: 'pi pi-sign-out' },
      {
        label: 'Search',
        icon: 'pi pi-search',
        template: `<input type="text" placeholder="Search" class="p-inputtext p-component" />`
      }
    ];

    this.breadcrumbItems = [
      { label: 'Computer' },
      { label: 'Notebook' },
      { label: 'Accessories' },
      { label: 'Backpacks' },
      { label: 'Item' }
    ];

    this.steps = [
      { label: 'Header I' },
      { label: 'Header II' },
      { label: 'Header III' }
    ];

    this.tabs = [
      { label: 'Header I' },
      { label: 'Header II' },
      { label: 'Header III' }
    ];

    this.activeTab = this.tabs[0];
        this.plainMenu = [
      {
        label: 'Customers',
        icon: 'pi pi-table',
      },
      { label: 'Orders', icon: 'pi pi-shopping-cart' },
      { label: 'Shipments', icon: 'pi pi-envelope' },
      { label: 'Profile', icon: 'pi pi-user' },
    ];
  }




   


}
