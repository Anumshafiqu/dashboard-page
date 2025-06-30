import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@Component({
  selector: 'app-overlay-page',
  imports: [DialogModule , ButtonModule , CardModule , SidebarModule , TableModule , OverlayPanelModule , TooltipModule ,
    ConfirmDialogModule , ToastModule , ConfirmPopupModule
  ] ,
  templateUrl: './overlay-page.component.html',
  styleUrl: './overlay-page.component.css' , 
  standalone : true,
    providers: [ConfirmationService, MessageService]
})
export class OverlayPageComponent {
display: boolean = false;
drawerVisible: boolean = false;
drawerPosition: 'left' | 'right' | 'top' | 'bottom' = 'left';

showDialog: boolean = false;

openDrawer(position: 'left' | 'right' | 'top' | 'bottom') {
  this.drawerPosition = position;
  this.drawerVisible = true;
}





products = [
  {
    name: 'Bamboo Watch',
    image: 'https://primefaces.org/cdn/primeng/images/demo/product/bamboo-watch.jpg',
    price: 65
  },
  {
    name: 'Black Watch',
    image: 'https://primefaces.org/cdn/primeng/images/demo/product/black-watch.jpg',
    price: 72
  },
  {
    name: 'Blue Band',
    image: 'https://primefaces.org/cdn/primeng/images/demo/product/blue-band.jpg',
    price: 79
  },
  {
    name: 'Blue T-Shirt',
    image: 'https://primefaces.org/cdn/primeng/images/demo/product/blue-t-shirt.jpg',
    price: 29
  },
  {
    name: 'Bracelet',
    image: 'https://primefaces.org/cdn/primeng/images/demo/product/bracelet.jpg',
    price: 15
  }
];


  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

confirmDelete(event: Event) {
  this.confirmationService.confirm({
    target: event.target as EventTarget,
    message: 'Do you want to delete this record?',
    icon: 'pi pi-info-circle',
    acceptLabel: 'Delete',
    rejectLabel: 'Cancel',
    acceptIcon: 'pi pi-trash',
    rejectIcon: 'pi pi-times',
    accept: () => {
      this.messageService.add({
        severity: 'success',
        summary: 'Deleted',
        detail: 'Record deleted',
        life: 3000
      });
    },
    reject: () => {
      this.messageService.add({
        severity: 'warn',
        summary: 'Cancelled',
        detail: 'You cancelled the action',
        life: 3000
      });
    }
  });
}



}
