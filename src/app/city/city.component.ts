import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {City} from '../model/city.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
@Input() selectedstate: string;
@Output() selected:EventEmitter<string> = new EventEmitter<string>();
cityname: string;
filteredCities: City[];
cities:City[] = [
      {
      id: "1",
      sid: "1",
      name:"India State1 City1"
    },
    {
      id: "2",
      sid: "1",
      name:"India State1 City2"
    },
    {
      id: "3",
      sid: "2",
      name:"India State2 City1"
    },
    {
      id: "4",
      sid: "2",
      name:"India State2 City2"
    },
    {
      id: "5",
      sid: "3",
      name:"France State1 City1"
    },
    {
      id: "6",
      sid: "3",
      name:"France State1 City2"
    },
    {
      id: "7",
      sid: "4",
      name:"France state2 City1"
    },
    {
      id: "8",
      sid: "4",
      name:"France state2 City2"
    },
    {
      id: "9",
      sid: "5",
      name:"Russia state1 City1"
    },
    {
      id: "10",
      sid: "5",
      name:"Russia state1 City2"
    },
    {
      id: "11",
      sid: "6",
      name:"Russia state2 City1"
    },
    {
      id: "12",
      sid: "6",
      name:"Russia state2 City2"
    },
    {
      id: "13",
      sid: "7",
      name:"Germany state1 City1"
    },
    {
      id: "14",
      sid: "7",
      name:"Germany state1 City2"
      },
    {
      id: "15",
      sid: "8",
      name:"Germany state2 City1"
    },
     {
      id: "16",
      sid: "8",
      name:"Germany state2 City2"
    },
    {
      id: "17",
      sid: "9",
      name:"America state1 City1"
    },
    {
      id: "18",
      sid: "9",
      name:"America state1 City2"
      },
    {
      id: "19",
      sid: "10",
      name:"America state2 City1"
    },
    {
      id: "20",
      sid: "10",
      name:"America state2 City2"
      }
    ]

  constructor() { }

  ngOnInit() {
  }
  oncitychange()
  {
    this.selected.emit(this.cityname);

  }
 ngOnChanges(){
    this.filteredCities = this.cities.filter(city => city.sid === this.selectedstate); 

  }
}
