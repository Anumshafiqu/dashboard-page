import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent , SidebarComponent , HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
