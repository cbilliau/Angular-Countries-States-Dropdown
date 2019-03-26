import { Injectable } from '@angular/core';
import { Country, State } from '../models/country-state';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  getCountries() {
    return [
      new Country(1, 'USA'),
      new Country(2, 'Canada')
    ];
  }

  getStates() {
    return [
      new State(1, 1, 'AL', 'Alabama'),
      new State(2, 1, 'AK', 'Alaska'),
      new State(3, 1, 'AS', 'American Samoa'),
      new State(4, 1, 'AZ', 'Arizona'),
      new State(5, 1, 'AR', 'Arkansas'),
      new State(6, 1, 'CA', 'California'),
      new State(7, 1, 'CO', 'Colorado'),
      new State(8, 1, 'CT', 'Connecticut'),
      new State(9, 1, 'DE', 'Delaware'),
      new State(10, 1, 'DC', 'District of Columbia'),
      new State(11, 1, 'FM', 'Federated States of Micronesia'),
      new State(12, 1, 'FL', 'Florida'),
      new State(13, 1, 'GA', 'Georgia'),
      new State(14, 1, 'GU', 'Guam'),
      new State(15, 1, 'HI', 'Hawaii'),
      new State(16, 1, 'ID', 'Idaho'),
      new State(17, 1, 'IL', 'Illinois'),
      new State(18, 1, 'IN', 'Indiana'),
      new State(19, 1, 'IA', 'Iowa'),
      new State(20, 1, 'KS', 'Kansas'),
      new State(21, 1, 'KY', 'Kentucky'),
      new State(22, 1, 'LA', 'Louisiana'),
      new State(23, 1, 'ME', 'Maine'),
      new State(24, 1, 'MH', 'Marshall Islands'),
      new State(25, 1, 'MD', 'Maryland'),
      new State(26, 1, 'MA', 'Massachusetts'),
      new State(27, 1, 'MI', 'Michigan'),
      new State(28, 1, 'MN', 'Minnesota'),
      new State(29, 1, 'MS', 'Mississippi'),
      new State(30, 1, 'MO', 'Missouri'),
      new State(31, 1, 'MT', 'Montana'),
      new State(32, 1, 'NE', 'Nebraska'),
      new State(33, 1, 'NV', 'Nevada'),
      new State(34, 1, 'NH', 'New Hampshire'),
      new State(35, 1, 'NJ', 'New Jersey'),
      new State(36, 1, 'NM', 'New Mexico'),
      new State(37, 1, 'NY', 'New York'),
      new State(38, 1, 'NC', 'North Carolina'),
      new State(39, 1, 'ND', 'North Dakota'),
      new State(40, 1, 'MP', 'Northern Mariana Islands'),
      new State(41, 1, 'AZ', 'Arizona'),
      new State(42, 1, 'NE', 'Nebraska'),
      new State(43, 1, 'NV', 'Nevada'),
      new State(44, 1, 'NH', 'New Hampshire'),
      new State(45, 1, 'NJ', 'New Jersey'),
      new State(46, 1, 'NM', 'New Mexico'),
      new State(47, 1, 'NY', 'New York'),
      new State(48, 1, 'NC', 'North Carolina'),
      new State(49, 1, 'ND', 'North Dakota'),
      new State(50, 1, 'MP', 'Northern Mariana Islands'),
      new State(51, 1, 'OH', 'Ohio'),
      new State(52, 1, 'OK', 'Oklahoma'),
      new State(53, 1, 'OR', 'Oregon'),
      new State(54, 1, 'PW', 'Palau'),
      new State(55, 1, 'PA', 'Pennsylvania'),
      new State(56, 1, 'PR', 'Puerto Rico'),
      new State(57, 1, 'RI', 'Rhode Island'),
      new State(58, 1, 'SC', 'South Carolina'),
      new State(59, 1, 'SD', 'South Dakota'),
      new State(60, 1, 'TN', 'Tennessee'),
      new State(61, 1, 'TX', 'Texas'),
      new State(62, 1, 'UT', 'Utah'),
      new State(63, 1, 'VT', 'Vermont'),
      new State(64, 1, 'VI', 'Virgin Islands'),
      new State(65, 1, 'VA', 'Virginia'),
      new State(66, 1, 'WA', 'Washington'),
      new State(67, 1, 'WV', 'West Virginia'),
      new State(68, 1, 'WI', 'Wisconsin'),
      new State(69, 1, 'WY', 'Wyoming'),
      new State(70, 2, 'NL', 'Newfoundland and Labrador'),
      new State(71, 2, 'PE', 'Prince Edward Island	'),
      new State(72, 2, 'NS', 'Nova Scotia'),
      new State(73, 2, 'NB', 'New Brunswick'),
      new State(74, 2, 'QC', 'Quebec'),
      new State(75, 2, 'ON', 'Ontario'),
      new State(76, 2, 'MB', 'Manitoba'),
      new State(77, 2, 'SK', 'Saskatchewan'),
      new State(78, 2, 'AB', 'Alberta'),
      new State(79, 2, 'BC', 'British Columbia'),
      new State(80, 2, 'YT', 'Yukon'),
      new State(81, 2, 'NT', 'Northwest Territoires'),
      new State(82, 2, 'NU', 'Nunavut'),
    ];
  }
}
