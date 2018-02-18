import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-state-data',
  templateUrl: './state-data.component.html',
  styleUrls: ['./state-data.component.css'],
  inputs:['countrySelected','countryMapdata']
})
export class StateDataComponent implements OnInit {
   @Input('countrySelected') countryIncoming :string;
   @Input('countryMapdata') countriesMapData;
  constructor() {

  }

  ngOnInit() {
    console.log('selectedCountry' + this.countryIncoming);
    console.log('countryMapdata' + this.countriesMapData.get(this.countryIncoming));
  }

}
