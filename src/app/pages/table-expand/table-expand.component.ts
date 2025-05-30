import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TableRowExpandEvent, TableRowCollapseEvent, TableModule } from 'primeng/table';
import { Product } from '../domain/product';
import { ProductService } from '../service/product.service';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-expand',
  standalone: true,
  imports: [TableModule , ToastModule , ButtonModule , RatingModule , TagModule , CurrencyPipe , CommonModule , FormsModule,
    ReactiveFormsModule , 
  ],
  templateUrl: './table-expand.component.html',
  styleUrl: './table-expand.component.css',
   providers: [ProductService, MessageService]
})
export class TableExpandComponent {
    products!: Product[];

    expandedRows = {};

    constructor(private productService: ProductService , private messageService: MessageService) {}

    // ngOnInit() {
    //     this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));
   
    // }
ngOnInit() {
    this.productService.getProductsWithOrdersSmall().then((data) => {
        this.products = data;
        console.log('Products loaded:', this.products);
    });
}
    // expandAll() {
    //     this.expandedRows = this.products.reduce((acc, p) => (acc[p.id] = true) && acc, {});
    // }
    expandAll() {
    this.expandedRows = this.products.reduce((acc: { [key: string]: boolean }, p: Product) => {
        if (p.id !== undefined && p.id !== null) {
            acc[p.id] = true;
        }
        return acc;
    }, {});
}

    collapseAll() {
        this.expandedRows = {};
    }

 getSeverity(status: string) {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';  // ✅ replaced 'warn' with 'warning'
        case 'OUTOFSTOCK':
            return 'danger';
        default:
            return undefined;
    }
}
getStatusSeverity(status: string) {
    switch (status) {
        case 'PENDING':
            return 'warning';  // ✅ replaced 'warn' with 'warning'
        case 'DELIVERED':
            return 'success';
        case 'CANCELLED':
            return 'danger';
        default:
            return undefined;
    }
}
    onRowExpand(event: TableRowExpandEvent) {
        this.messageService.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
    }

    onRowCollapse(event: TableRowCollapseEvent) {
        this.messageService.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
    }
}
