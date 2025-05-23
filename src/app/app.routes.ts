import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { FormslayoutComponent } from './pages/formslayout/formslayout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path : '', component : MainComponent , children :[
        { path: '', component: HomeComponent }, 
        {path : "home", component : HomeComponent},
        {path : 'header' , component : HeaderComponent},
        {path : 'sidebar' , component : SidebarComponent},
        {path :'formslayout' , component : FormslayoutComponent}
    ]}
];
