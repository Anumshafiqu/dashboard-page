import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomeComponent } from '../home/home.component';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { FormslayoutComponent } from '../formslayout/formslayout.component';
import {  NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  imports: [ HeaderComponent , SidebarComponent ,  NgIf , RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  standalone:true,
})
export class MainComponent {
  isSidebarVisible = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }


  hideLayout = false;

  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      this.hideLayout = event.url.includes('/notfound');
    });
  }


  
}
