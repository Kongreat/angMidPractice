import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../shared/country';
import { Countries } from '../shared/countries';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  @Input()
  country: Country;
  constructor() {
  }

  ngOnInit(): void {
  }

  changeName(event: any): void{
    this.country.name = event.target.value;
  }

  changeArea(event: any): void{
    this.country.area = event.target.value;
  }

  changeInfo(event: any): void{
    this.country.addInfo = event.target.value;
  }

}
