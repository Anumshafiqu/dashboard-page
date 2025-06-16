import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-formslayout',
  imports: [CardModule , DropdownModule],
  templateUrl: './formslayout.component.html',
  styleUrl: './formslayout.component.css',
  standalone : true,
})
export class FormslayoutComponent {
  states = [
    { label: 'Select One', value: null },
    { label: 'New York', value: 'NY' },
    { label: 'California', value: 'CA' },
    { label: 'Texas', value: 'TX' }
  ];
}
