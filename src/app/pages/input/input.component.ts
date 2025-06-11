import { CommonModule, DatePipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeNode } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputIconModule } from 'primeng/inputicon';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TreeSelectModule } from 'primeng/treeselect';
interface City {
    name: string,
    code: string
}
@Component({
  selector: 'app-input',
  standalone : true,
  imports: [InputMaskModule , PanelModule  , MultiSelectModule , DropdownModule , CheckboxModule , RadioButtonModule ,
    CalendarModule , FormsModule , ReactiveFormsModule , CardModule , IconFieldModule , InputIconModule , AutoCompleteModule ,
   InputNumberModule , RadioButtonModule , ToggleButtonModule , InputSwitchModule , ListboxModule , MultiSelectModule,
   TreeSelectModule , SelectButtonModule , SliderModule , RatingModule , ColorPickerModule , KnobModule, InputGroupAddonModule , InputGroupModule , InputTextModule,
    InputGroupModule, CommonModule , 
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css' ,
})
export class InputComponent {
    value2 : number  = 50;
    confirmText: string = '';
    value3: number  = 5;
      color: string | undefined;
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            text: new FormControl<string | null>(null)
        });
                this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
            this.items = [
      {
        label: 'Documents',
        data: 'Documents Folder',
        expandedIcon: 'pi pi-folder-open',
        collapsedIcon: 'pi pi-folder',
        children: [
          {
            label: 'Work',
            icon: 'pi pi-cog',
            children: [
              { label: 'Expenses.doc', icon: 'pi pi-file' },
              { label: 'Resume.doc', icon: 'pi pi-file' }
            ]
          },
          {
            label: 'Home',
            icon: 'pi pi-home',
            children: [
              { label: 'Invoices.txt', icon: 'pi pi-file' }
            ]
          }
        ]
      },
      {
        label: 'Events',
        icon: 'pi pi-calendar'
      },
      {
        label: 'Movies',
        icon: 'pi pi-star'
      }
    ];
    
}
// value: string | undefined;
selectedCountry: string = '';
filteredCountries: string[] = [];
countries: string[] = [
  'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola',
  'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba',
  'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados',
  'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia',
  'Bosnia and Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil',
  'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria',
  // ... (continue with all countries from your list)
  'Zambia', 'Zimbabwe'
];
toggleValue: boolean = false;

options = [
  { label: 'Option 1', value: 1 },
  { label: 'Option 2', value: 2 },
  { label: 'Option 3', value: 3 }
];

selectedOption: number = 1;
// Filters countries when typing
filterCountries(event: any) {
  const query = event.query.toLowerCase();
  this.filteredCountries = this.countries.filter(country =>
    country.toLowerCase().includes(query)
  );
}

// Shows all countries on dropdown icon click
showAllCountries() {
  this.filteredCountries = [...this.countries];
}
 text1: string | undefined;
    cities!: City[];

    selectedCity!: City;
    selectedCities!: City[];

    // ngOnInit() {
    //     this.cities = [
    //         { name: 'New York', code: 'NY' },
    //         { name: 'Rome', code: 'RM' },
    //         { name: 'London', code: 'LDN' },
    //         { name: 'Istanbul', code: 'IST' },
    //         { name: 'Paris', code: 'PRS' }
    //     ];
    // }

date1: Date | undefined;
selectedDate: Date | undefined;
value1: number = 1;
  value4: number = 50;
ingredient!: string;
selectedToppings: string[] = [];
isToggled: boolean = false;
  selectedItem: any;
  ratingValue: number = 3;
  items: TreeNode[] = [];

    value!: number;

    paymentOptions: any[] = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 }
    ];
   checked: boolean = false;
}
