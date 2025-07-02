import { NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ContextMenu, ContextMenuModule } from 'primeng/contextmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { Menu, MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { StepsModule } from 'primeng/steps';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';

@Component({
  selector: 'app-menu',
  imports: [MenuModule, MenubarModule, CardModule, TabViewModule, BreadcrumbModule, StepsModule, TabMenuModule,
    NgIf, TieredMenuModule, PanelMenuModule , ButtonModule , TieredMenuModule , ContextMenuModule , MegaMenuModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  standalone: true,
})
export class MenuComponent {
  menuItems: MenuItem[] = [];
  breadcrumbItems: MenuItem[] = [];
   panelItems: MenuItem[] = [];
   menuData: MegaMenuItem[] | undefined;
     items: MenuItem[] | undefined;
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
        label: 'Customer',
        icon: 'pi pi-users',
        expanded: true, // This makes the submenu open by default
        items: [
          { label: 'New', icon: 'pi pi-user-plus', routerLink: ['/customer/new'] },
          { label: 'Edit', icon: 'pi pi-user-edit', routerLink: ['/customer/edit'] }
        ]
      }
    ];
 
 
         this.items = [
            {
                label: 'File',
                icon: 'pi pi-file',

            },
            {
                label: 'Edit',
                icon: 'pi pi-file-edit',
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            },
            {
                separator: true
            },
            {
                label: 'Share',
                icon: 'pi pi-share-alt',
            }
        ]
          this.panelItems = [
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
      { label: 'Quit', icon: 'pi pi-sign-out' }
    ];
  
        this.menuData = [
      {
        label: 'Furniture',
        icon: 'pi pi-box',
        items: [
          [
            {
              label: 'Living Room',
              items: [
                { label: 'Accessories' },
                { label: 'Armchair' },
                { label: 'Coffee Table' },
                { label: 'Couch' },
                { label: 'TV Stand' },
              ],
            },
          ],
          [
            {
              label: 'Kitchen',
              items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }],
            },
            {
              label: 'Bathroom',
              items: [{ label: 'Accessories' }],
            },
          ],
          [
            {
              label: 'Bedroom',
              items: [
                { label: 'Bed' },
                { label: 'Chaise lounge' },
                { label: 'Cupboard' },
                { label: 'Dresser' },
                { label: 'Wardrobe' },
              ],
            },
          ],
          [
            {
              label: 'Office',
              items: [
                { label: 'Bookcase' },
                { label: 'Cabinet' },
                { label: 'Chair' },
                { label: 'Desk' },
                { label: 'Executive Chair' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Electronics',
        icon: 'pi pi-mobile',
        items: [
          [
            {
              label: 'Computer',
              items: [
                { label: 'Monitor' },
                { label: 'Mouse' },
                { label: 'Notebook' },
                { label: 'Keyboard' },
                { label: 'Printer' },
                { label: 'Storage' },
              ],
            },
          ],
          [
            {
              label: 'Home Theater',
              items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }],
            },
          ],
          [
            {
              label: 'Gaming',
              items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }],
            },
          ],
          [
            {
              label: 'Appliances',
              items: [
                { label: 'Coffee Machine' },
                { label: 'Fridge' },
                { label: 'Oven' },
                { label: 'Vaccum Cleaner' },
                { label: 'Washing Machine' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Sports',
        icon: 'pi pi-clock',
        items: [
          [
            {
              label: 'Football',
              items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }],
            },
          ],
          [
            {
              label: 'Running',
              items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }],
            },
          ],
          [
            {
              label: 'Swimming',
              items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }],
            },
          ],
          [
            {
              label: 'Tennis',
              items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }],
            },
          ],
        ],
      },
    ];
  
 
 
  }









 



  constructor() {
    this.items = [
      {
        label: 'Save',
        icon: 'pi pi-save',
        command: () => {
          alert('Save clicked');
        },
      },
      {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
          alert('Update clicked');
        },
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
          alert('Delete clicked');
        },
      },
      {
        separator: true,
      },
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          alert('Home clicked');
        },
      },
    ];
  }

  onRightClick(event: MouseEvent, menu: Menu) {
    event.preventDefault(); // prevent default context menu
    menu.toggle(event);
  }


}
