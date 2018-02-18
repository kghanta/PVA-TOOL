import {Component, Input, OnInit} from '@angular/core';
import {Ibargraphclass} from '../barplot/Ibargraphclass';
import {Ipieclass} from './Ipieclass';


declare let d3: any;
@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css'],
  inputs:['quantityData']
})
export class PiechartComponent extends Ibargraphclass implements OnInit {
  testClass:Ipieclass;
  keysForMap:number[];
  valuesForgiven:any;
  @Input('quantityData') quantityMap;
  options:any;
  data:any;


  constructor() {
     super('x',234324);
  }

  ngOnInit() {
    this.drawGraph();
  }
  drawGraph():void{

    var graphMap = new Map()
    graphMap = this.quantityMap;
    console.log(this.quantityMap.size);
    let IpieclassData =[];
    for (let entry of Array.from(graphMap.entries())) {
      let key = entry[0];
      let value = entry[1];
      let needObj = new Ipieclass(key,value);
      IpieclassData.push(needObj);
      console.log(needObj);
    }
    let keys = graphMap.keys();
    console.log('Keys size' + keys.next().value)
    let valuesObj = new Ibargraphclass('k',122);
    console.log(valuesObj);
    this.options = {
      chart: {

        type: 'pieChart',
        height: 500,
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };
    this.data = IpieclassData;
  }

}
