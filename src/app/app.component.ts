import { Component } from '@angular/core';
import { Customer } from './model';

@Component({
  selector: 'my-app',  // to use me, do this in html <my-app>
  template: `
  <h1>{{customer.name}}</h1>

  <p><i>{{customer.name}} in the {{customer.address.region}} region at {{customer.address.street}}, {{customer.address.city}}, {{customer.address.county}}</i></p>
  <br />

  <fieldset>
    <label>Name: <input [(ngModel)]="customer.name"></label>
  </fieldset>

  <label><input type="checkbox" [(ngModel)]="hideAdress"> Hide Address</label>

  <div [hidden]="hideAdress" >
    <fieldset>
      <label>Street: <input [(ngModel)]="customer.address.street"></label>
    </fieldset>
    <fieldset>
      <label>City: <input [(ngModel)]="customer.address.city"></label>
    </fieldset>
    <fieldset>
      <label>Region: </label>
      <select [(ngModel)]="customer.address.region">
        <option>North</option>
        <option>East</option>
        <option>South</option>
        <option>West</option>
        <option>Capital</option>
      </select>
    </fieldset>
        <fieldset>
      <label>County: </label>
      <select [(ngModel)]="customer.address.county">
        <option>Northumberland</option>
        <option>Lincolnshire</option>
        <option>Hampshire</option>
        <option>Shropshire</option>
        <option>Greater London</option>
      </select>
    </fieldset>
  </div>
  `,
})

export class AppComponent {
  customer: Customer = {
    id: 1,
    name: 'John Smith',
    address: {
      street: '221A Baker Street',
      city: 'City of London',
      county: 'Greater London',
      region: 'Capital'
    }
  };
  hideAdress = false;
}