import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarModule , CommonModule , RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('400ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]

})
export class SidebarComponent {
  visible: boolean = true;
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      // { label: 'Buttons', icon: PrimeIcons.CHECK_SQUARE },
      // { label: 'Inputs', icon: PrimeIcons.PENCIL , routerLink: 'input'},
      { label: 'List', icon: PrimeIcons.LIST },
      // { label: 'Tree', icon: PrimeIcons.SITEMAP },
      { label: 'Panel', icon: PrimeIcons.CLONE },
      { label: 'Overlay', icon: PrimeIcons.SLIDERS_H },
      { label: 'Menu', icon: PrimeIcons.BARS },
      { label: 'Media', icon: PrimeIcons.IMAGE },
      {label: 'Messages', icon: 'pi pi-envelope', route: '/messages'},
      {label: 'File', icon: 'pi pi-file', route: '/file'},
      {label: 'Chart', icon: 'pi pi-chart-line', route: '/chart'},
      {label: 'Timeline', icon: 'pi pi-calendar', route: '/timeline'},
      {label: 'Landing', icon: 'pi pi-globe', route: '/landing'},
      {label: 'Auth', icon: 'pi pi-user', route: '/auth'},
      {label: 'Not Found', icon: 'pi pi-exclamation-triangle', route: '/notfound'},
      {label: 'Empty', icon: 'pi pi-ban', route: '/empty'}
    ];
  }





}
