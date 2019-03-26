import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from './../../services/data.service';
import { Country, State } from '../../models/country-state';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
})
export class PropertyComponent implements OnInit {
  public propertyForm: FormGroup;
  public selectedCountry: Country = new Country(1, 'USA');
  public countries: Country[];
  public states: State[];

// tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.countries = this.dataService.getCountries();
    this.states = this.dataService.getStates();
  }

  ngOnInit() {
    this.propertyForm = this.fb.group({
      companyName: ['', Validators.required],
      propertyName: ['', Validators.required],
      address: this.fb.group ({
        line1: ['', Validators.required],
        line2: [''],
        line3: [''],
        city: ['', Validators.required],
        state: ['', Validators.required],
        postalCode: ['', Validators.required],
        country: ['', Validators.required],
      })
    });
  }

  onSelect(countryId) {
    this.states = this.dataService.getStates().filter((item) => item.countryid === countryId);
  }

}
