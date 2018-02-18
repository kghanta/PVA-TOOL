import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Ibargraphclass} from './Ibargraphclass'

declare let d3: any;

@Component({
  selector: 'app-barplot',
  templateUrl: './barplot.component.html',
  styleUrls: ['./barplot.component.css'],
  inputs:['quantityData']
})


export class BarplotComponent extends Ibargraphclass implements OnInit {
  testClass:Ibargraphclass;
  keysForMap:number[];
   valuesForgiven:any;
  @Input('quantityData') quantityMap;
  options:any;
  data:any;

  constructor(){
      super("x",2323);
  }
  ngOnInit() {


      this.drawGraph();



    }

    drawGraph():void{

    var graphMap = new Map()
    graphMap = this.quantityMap;
    console.log(this.quantityMap.size);
    let IbargrphaArray =[];
      for (let entry of Array.from(graphMap.entries())) {
        let key = entry[0];
        let value = entry[1];
        let needObj = new Ibargraphclass(key,value)
        IbargrphaArray.push(needObj);
        console.log(needObj);
      }
    let keys = graphMap.keys();
    console.log('Keys size' + keys.next().value)
    let valuesObj = new Ibargraphclass('k',122);
    console.log(valuesObj);
      this.options = {
        chart: {

          type: 'discreteBarChart',
          height: 450,
          margin : {
            top: 20,
            right: 20,
            bottom: 50,
            left: 55
          },
          x: function(d){return d.label;},
          y: function(d){return d.value;},
          showValues: true,
          valueFormat: function(d){
            return d3.format(',.4f')(d);
          },
          duration: 500,
          xAxis: {
            axisLabel: 'X Axis'
          },
          yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: -10
          }
        }
      }
      this.data = [
        {
          key: "Cumulative Return",
          values:
            IbargrphaArray

        }
      ];
    }
  }



