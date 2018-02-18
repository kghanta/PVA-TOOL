import {Component, OnInit} from '@angular/core';
import {GeographyService} from './geography.service';
import {salesService} from './sales.service';
import {Igeography} from './geography';
import {Isalesfact} from './salesFact';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  isCountrySelected: boolean = false;
  countryData = new Map();
  geographyData: Igeography[];

  selectedCountry: string;
  errorMessage: string;
  countriesOptions: string[];
  sales_factData: Isalesfact[];
  /* defining maps for countries */
  countryQuantityMap= new Map();
  countrySaleMap = new Map();
  countryStatesMap =new Map();

  constructor(private geoService: GeographyService, private salesData: salesService) {

  }

  ngOnInit(): void {
    /*
         initiating the services and pulling out the services into their interface arrays
     */
    this.geoService.getAllGeoData().subscribe(geography => {
      this.geographyData = geography;
      console.log(geography);

    }, error => this.errorMessage = <any>error);
    this.salesData.getAllSalesFactData().subscribe(sales => {
      this.sales_factData = sales;
      if (this.geographyData.length > 0) {
        this.testHash(this.geographyData, this.sales_factData);
      }
      console.log(sales)
    }, error => this.errorMessage = <any>error);
  }

  /*
      this function is called when the service data is availabel for use from the array we generate the list of countries as a dropdown option
   */

  testHash(geogrData: Igeography[],salesValues:Isalesfact[]): void {
    let countries = [];
    let SalesAmountcount = 0;
    let SalesQuantity = 0;
    for (let ge of geogrData) {
      if (countries.indexOf(ge.country) == -1) {
        countries.push(ge.country);
      }
    }
    this.countriesOptions = countries;

    /* creating mapping functions */
    this.countriesOptions.forEach((givenCountry)=>{
      let statesListed = [];
      let filteredCountry = [];
      let countryStoreId = [];
      let filteredStoredIds :Isalesfact[];
      let filteredSalesFactData = [];


      /* getting the country values for each country */
          filteredCountry = this.geographyData.filter((geodata, index) => {
            if (geodata.country == givenCountry) {
              return index;
            }
          });
       /*creating stateID and storeID values
           */
      /* assigning the states && storeId's to the local array for the selected country */
      for (let geo of filteredCountry) {
        if (statesListed.indexOf(geo.state) == -1) {
          statesListed.push(geo.state);
        }
        if (countryStoreId.indexOf(geo.store_id) == -1) {
          countryStoreId.push(geo.store_id);
        }
      }
      for (let storeId of countryStoreId) {


        /* filtering the salesfact for the storeId present for the country */
        filteredStoredIds=(salesValues.filter((storeValue, index) => {
          if (storeValue.store_id === storeId) {

            return index
          }
        }));
        filteredStoredIds.forEach((storeLog)=>{
          filteredSalesFactData.push(storeLog);
          SalesAmountcount =SalesAmountcount+(+storeLog.sales_dollars);
          SalesQuantity = SalesQuantity+(+storeLog.sales_qty);
        });


      }
      this.countryQuantityMap.set(givenCountry,SalesQuantity);
      this.countrySaleMap.set(givenCountry,SalesAmountcount);
      this.countryStatesMap.set(givenCountry,statesListed);
      var test =  JSON.stringify(this.countrySaleMap);

      console.log(test);
    });


  }

  /*
    below function is called from angular component when there is a change in the selected option  of countries
   */
  onSelect(countrySlected: string): void {

    if (countrySlected != undefined) {
      let altSalesData = [];
      this.isCountrySelected = true;
      /* filtering the rows for selected country */
       let  listOfstates = this.countryStatesMap.get(countrySlected);
       console.log(listOfstates);
       console.log(countrySlected);

    }

  }
}
