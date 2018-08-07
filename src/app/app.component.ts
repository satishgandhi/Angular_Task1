import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Country} from './model/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   countryid: string;
   stateid: string;
   cityid: string;
   name : string= "US" ;
  ngOnInit() {
    
  }
  OnCountrySelected(data: string){
  this.countryid = data;
  console.log("countryid: "+this.countryid);

}
OnStateSelected(data: string){
  this.stateid = data;
  console.log("Stateid: "+this.stateid);

}
OnCitySelected(data: string){
  this.cityid = data;
  console.log("Cityid: "+this.cityid);

}
}
