import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import { Country } from '../shared/country';
import { Countries } from '../shared/countries';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  constructor() {
  }
  @Input()
  country: Country;

  @ViewChild('info') info: ElementRef;

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
  showInfo(): void{
    this.info.nativeElement.style.display = 'block';
  }

  hideInfo(): void{
    this.info.nativeElement.style.display = 'none';
  }

}
