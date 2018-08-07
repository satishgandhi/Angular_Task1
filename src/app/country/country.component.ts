import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Country} from '../model/country.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input() country: Country;
  @Output() selected:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  countries: Country[];
  cname: string;
  ngOnInit() {
    this.countries = [
      {
      id: "1",
      name:"India"
    },
    {
      id: "2",
      name:"France"
    },
    {
      id: "3",
      name:"Russia"
    },
    {
      id: "4",
      name:"Germany"
    },
    {
      id: "5",
      name:"North America"
      }
    ]
  }
  oncountrychange()
  {
    this.selected.emit(this.cname);

  }

}
