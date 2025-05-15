import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';

export const routes: Routes = [
    {path : '', component : MainComponent , children :[
        {path : 'header' , component : HeaderComponent},
        {path : 'sidebar' , component : SidebarComponent}
    ]}
];
