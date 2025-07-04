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
import { MiscpageComponent } from './pages/miscpage/miscpage.component';
import { LinePagesComponent } from './pages/line-pages/line-pages.component';
import { FilepageComponent } from './pages/filepage/filepage.component';
import { MessagePageComponent } from './pages/message-page/message-page.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ChartPageComponent } from './pages/chart-page/chart-page.component';
import { ChartpageComponent } from './pages/chartpage/chartpage.component';
import { PiechartComponent } from './pages/piechart/piechart.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { PolarareaComponent } from './pages/polararea/polararea.component';
import { ChartLineComponent } from './pages/chart-line/chart-line.component';

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
        {path : 'overlay-page' , component : OverlayPageComponent},
        {path : 'miscpage' , component : MiscpageComponent},
        {path : 'line-pages' , component : LinePagesComponent},
        {path : 'filepage' , component : FilepageComponent},
        {path :'message-page' , component : MessagePageComponent},
        {path : 'menu', component : MenuComponent},
        {path : 'chart-page', component : ChartPageComponent},
        {path : 'piechart' , component : PiechartComponent},
        {path : 'doughnut' , component : DoughnutComponent},
        {path : 'polararea' , component : PolarareaComponent},
        {path : 'chart-line', component : ChartLineComponent}


        
        
    ]}
];
