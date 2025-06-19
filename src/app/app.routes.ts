import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { FormslayoutComponent } from './pages/formslayout/formslayout.component';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './pages/table/table.component';
import { ButtonComponent } from './pages/button/button.component';
import { InputComponent } from './pages/input/input.component';
import { TreeComponent } from './pages/tree/tree.component';
import { TreetableComponent } from './pages/treetable/treetable.component';
import { PanelpgaeComponent } from './pages/panelpgae/panelpgae.component';
import { MediaComponent } from './pages/media/media.component';
import { OverlayPageComponent } from './pages/overlay-page/overlay-page.component';

export const routes: Routes = [
    {path : '', component : MainComponent , children :[
        { path: '', component: HomeComponent }, 
        {path : "home", component : HomeComponent},
        {path : 'header' , component : HeaderComponent},
        {path : 'sidebar' , component : SidebarComponent},
        {path :'formslayout' , component : FormslayoutComponent},
        {path : 'table' , component : TableComponent},
        {path : 'button' , component : ButtonComponent},
        {path :'input' , component : InputComponent},
        {path :'tree' , component : TreeComponent},
        {path : 'treetable' , component : TreetableComponent},
        {path : 'panelpgae' , component : PanelpgaeComponent},
        {path : 'media' , component : MediaComponent},
        {path : 'overlay-page' , component : OverlayPageComponent}


        
        
    ]}
];
