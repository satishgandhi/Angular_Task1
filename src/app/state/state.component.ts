import { State } from '../model/state.model';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit, OnChanges {

  @Input() selectedcountry: string;
  @Output() selected:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  filteredStates: State[];
  sname: string;
   states:State[] = [
      {
      cid: "1",
      sid: "1",
      name:"India State1"
    },
    {
      cid: "1",
      sid: "2",
      name:"India State2"
    },
    {
      cid: "2",
      sid: "3",
      name:"France State1"
    },
    {
      cid: "2",
      sid: "4",
      name:"France state2"
    },
    {
      cid: "3",
      sid: "5",
      name:"Russia state1"
    },
    {
      cid: "3",
      sid: "6",
      name:"Russia state2"
    },
    {
      cid: "4",
      sid: "7",
      name:"Germany state1"
      },
    {
      cid: "4",
      sid: "8",
      name:"Germany state2"
      },
    {
      cid: "5",
      sid: "9",
      name:"America state1"
      },
    {
      cid: "5",
      sid: "10",
      name:"America state2"
      }
    ]
  ngOnInit() {
   
  }
  onstatechange()
  {
    this.selected.emit(this.sname);

  }
  ngOnChanges(){
    this.filteredStates = this.states.filter(state => state.cid === this.selectedcountry); 

  }


}

