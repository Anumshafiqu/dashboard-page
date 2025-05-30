import { CommonModule} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule} from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Customer } from '../domain/customer';
import { CustomerService } from '../service/customer.service';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { ProgressBar, ProgressBarModule } from 'primeng/progressbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { AutoFocusModule } from 'primeng/autofocus';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TableGroupComponent } from '../table-group/table-group.component';
import { TableExpandComponent } from '../table-expand/table-expand.component';


@Component({
  selector: 'app-table',
  standalone : true,
  imports: [TableModule, ButtonModule, IconFieldModule, InputIconModule, MultiSelectModule,
    TagModule, SliderModule, ProgressBarModule, FormsModule, ReactiveFormsModule,
    HttpClientModule, ToggleButtonModule, SliderModule, DropdownModule, AutoFocusModule, ToastModule, ProgressBarModule,
     IconFieldModule , CommonModule , ToastModule , TableGroupComponent , TableExpandComponent


  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [CustomerService],
})
export class TableComponent {
  balanceFrozen: boolean = false;

  customers!: Customer[];

  // constructor(private customerService : CustomerService) {}

  // ngOnInit() {
  //     this.customerService.getCustomersMedium().then((data) => {
  //         this.customers = data;
  //     });
  // }

  formatCurrency(value: number) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }













  // customers!: Customer[];

//   representatives!: Representative[];

//   statuses!: any[];

//   loading: boolean = false;

//   activityValues: number[] = [0, 100];

//   searchValue: string | undefined;
// activityRange: number[] = [0, 100]; 
//   constructor(private customerService: CustomerService) { }

  // ngOnInit() {
  //   this.customerService.getCustomersMedium().then((data) => {
  //     this.customers = data;
  //   });
  //   this.customerService.getCustomersLarge().then((customers) => {
  //     this.customers = customers;
  //     this.loading = false;

  //     this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
  //   });

  //   this.representatives = [
  //     { name: 'Amy Elsner', image: 'amyelsner.png' },
  //     { name: 'Anna Fali', image: 'annafali.png' },
  //     { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
  //     { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
  //     { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
  //     { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
  //     { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
  //     { name: 'Onyama Limba', image: 'onyamalimba.png' },
  //     { name: 'Stephen Shaw', image: 'stephenshaw.png' },
  //     { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
  //   ];

  //   this.statuses = [
  //     { label: 'Unqualified', value: 'unqualified' },
  //     { label: 'Qualified', value: 'qualified' },
  //     { label: 'New', value: 'new' },
  //     { label: 'Negotiation', value: 'negotiation' },
  //     { label: 'Renewal', value: 'renewal' },
  //     { label: 'Proposal', value: 'proposal' }
  //   ];
  // }


  // clear(table: Table) {
  //   table.clear();
  //   this.searchValue = ''
  // }


  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' | undefined {
  switch (status.toLowerCase()) {
    case 'unqualified':
      return 'danger';
    case 'qualified':
      return 'success';
    case 'new':
      return 'info';
    case 'negotiation':
      return 'warning'; 
    case 'renewal':
      return undefined;
    default:
      return undefined;
  }
}
// selectedStatus: string | undefined;
// selectedRepresentatives: any[] = [];





















  // customers: any[] = [];
  loading: boolean = true;

  activityRange: number[] = [0, 100];

  representatives = [
    { name: 'Amy Elsner', image: 'amyelsner.png' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
    { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
    { name: 'Stephen Shaw', image: 'stephenshaw.png' },
    { name: 'Onyama Limba', image: 'onyamalimba.png' },
    { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
    { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
  ];

  statuses = [
    { label: 'Unqualified', value: 'unqualified' },
    { label: 'Qualified', value: 'qualified' },
    { label: 'New', value: 'new' },
    { label: 'Negotiation', value: 'negotiation' },
    { label: 'Renewal', value: 'renewal' },
  ];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomersXLarge().then((data) => {
      this.customers = data;
      this.loading = false;
    });
     
  }

 

  



}




