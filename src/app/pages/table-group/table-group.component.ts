import { Component } from '@angular/core';
import { Customer } from '../domain/customer';
import { CustomerService } from '../service/customer.service';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-table-group',
  standalone : true,
  imports: [TableModule , TagModule , HttpClientModule , DatePipe],
  templateUrl: './table-group.component.html',
  styleUrl: './table-group.component.css',
  providers: [CustomerService]
})
export class TableGroupComponent {
    customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMedium().then((data:any) => {
            this.customers = data;
        });
    }

    calculateCustomerTotal(name: string) {
        let total = 0;

        if (this.customers) {
            for (let customer of this.customers) {
                if (customer.representative?.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

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
}
