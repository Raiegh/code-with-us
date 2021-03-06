import { Component } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-list',  // to use me, do this in html <customer-list>
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css'],
})

export class CustomerListComponent {

  customer: Customer;

  customers: Customer[] = [
    {
      id: 1,
      name: 'John Smith',
      address: {
        street: '221A Baker Street',
        city: 'City of London',
        county: 'Greater London',
        region: 'Capital'
      }
    },
    {
      id: 2,
      name: 'Alex Smith',
      address: {
        street: '123 Main Street',
        city: 'Shrewsbury',
        county: 'Shropshire',
        region: 'West'
      }
    },
    {
      id: 3,
      name: 'Pierre Pasmal',
      address: {
        street: '456 Rue de Main',
        city: 'Boston',
        county: 'Lincolnshire',
        region: 'East'
      }
    },
    {
      id: 4,
      name: 'Margarita Nadie',
      address: {
        street: '789 Calle Principal',
        city: 'Basingstoke ',
        county: 'Hampshire',
        region: 'South'
      }
    },
    {
      id: 5,
      name: 'Katie O\'Leary',
      address: {
        street: '137 DeKoven Street',
        city: 'Morpeth',
        county: 'Northumberland',
        region: 'North'
      }
    },
  ];
}