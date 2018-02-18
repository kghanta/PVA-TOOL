import {Component, Input, OnInit} from '@angular/core';
import {Ibargraphclass} from '../barplot/Ibargraphclass';
declare let d3: any;

@Component({
  selector: 'app-multi-bar-horizantalchart',
  templateUrl: './multi-bar-horizantalchart.component.html',
  styleUrls: ['./multi-bar-horizantalchart.component.css']
})
export class MultiBarHorizantalchartComponent extends Ibargraphclass implements OnInit {

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

        type: 'multiBarHorizontalChart',
        height: 450,
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showControls: true,
        showValues: true,
        duration: 500,
        xAxis: {
          showMaxMin: false
        },
        yAxis: {
          axisLabel: 'Values',
          tickFormat: function(d){
            return d3.format(',.2f')(d);
          }
        }
      }
    },
    this.data = [
      {
        key: "Cumulative Return",
        values:
        IbargrphaArray

      }
    ];
  }

}
