import { Component } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem, MessageService } from 'primeng/api';
import { Accordion, AccordionModule, AccordionTab } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { SplitterModule } from 'primeng/splitter';
import { Card, CardModule } from 'primeng/card';


@Component({
  selector: 'app-panelpgae',
  imports: [SplitButtonModule , ToolbarModule , AccordionModule , PanelModule , FieldsetModule , TabViewModule , ButtonModule ,
    DividerModule , SplitterModule , CardModule
  ],
  templateUrl: './panelpgae.component.html',
  styleUrl: './panelpgae.component.css',
    standalone: true ,
})
export class PanelpgaeComponent {

}
