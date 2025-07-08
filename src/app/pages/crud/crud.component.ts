import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Button, ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { RatingModule } from 'primeng/rating';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { Product } from '../domain/product';
import { ProductService } from '../service/product.service';
import { CurrencyPipe, NgIf } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { RadioButtonModule } from 'primeng/radiobutton';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';


interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-crud',
  imports: [ToolbarModule, ButtonModule, RatingModule, TableModule, DialogModule, FormsModule, ReactiveFormsModule, TagModule, ToastModule,
    FileUploadModule, ConfirmDialogModule, IconFieldModule, InputIconModule, CurrencyPipe, NgIf, InputTextModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule,
    ButtonModule,
    ToolbarModule,
    InputTextModule,
    FileUploadModule,
    InputNumberModule,
    RadioButtonModule,
    DropdownModule,
    RatingModule,
    TagModule,
    HttpClientModule,
    CardModule
  ],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
  standalone: true,
  styles: [
    `:host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }`
  ],
  providers: [MessageService, ConfirmationService, ProductService],
})
export class CrudComponent {
  @ViewChild('dt') dt!: Table;

  productDialog: boolean = false;
  products: Product[] = [];
  product: Product = {};
  selectedProducts: Product[] = [];
  submitted: boolean = false;

  statuses = [
    { label: 'INSTOCK', value: 'INSTOCK' },
    { label: 'LOWSTOCK', value: 'LOWSTOCK' },
    { label: 'OUTOFSTOCK', value: 'OUTOFSTOCK' },
  ];

  cols = [
    { field: 'code', header: 'Code' },
    { field: 'name', header: 'Name' },
    { field: 'image', header: 'Image' },
    { field: 'price', header: 'Price' },
    { field: 'category', header: 'Category' },
  ];

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.loadDemoData();
  }

  loadDemoData() {
    this.productService.getProducts().then((data) => {
      this.products = data;
      this.cd.markForCheck();
    });
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(
          (val) => !this.selectedProducts.includes(val)
        );
        this.selectedProducts = [];
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete ${product.name}?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter((val) => val.id !== product.id);
        this.product = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.name?.trim()) {
      if (this.product.id) {
        const index = this.findIndexById(this.product.id);
        this.products[index] = this.product;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Updated',
          life: 3000,
        });
      } else {
        this.product.id = this.createId();
        this.product.image = 'product-placeholder.svg';
        this.products.push(this.product);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Created',
          life: 3000,
        });
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
    }
  }

  findIndexById(id: string): number {
    return this.products.findIndex((product) => product.id === id);
  }

  createId(): string {
    let id = '';
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  getSeverity(status: string): 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'contrast' | undefined {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';   // note: should be 'warning', not 'warn'
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined;
    }
  }

  exportCSV() {
    this.dt.exportCSV();
  }


}
