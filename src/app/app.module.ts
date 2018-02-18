///<reference path="geography.service.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {GeographyService} from './geography.service';
import {HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import Chart  from 'C:\\Users\\ghantk2\\angularproject\\mean-app\\node_modules\\chart.js\\src\\chart.js'
import {salesService} from './sales.service';

import { ChartsModule } from 'ng2-charts';
import { BarplotComponent } from './barplot/barplot.component';
 // import {Plotly} from '@types/plotly.js'
import { NvD3Module } from 'ng2-nvd3';

// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';
import { StateDataComponent } from './state-data/state-data.component';
import { PiechartComponent } from './piechart/piechart.component';
import { MultiBarHorizantalchartComponent } from './multi-bar-horizantalchart/multi-bar-horizantalchart.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    BarplotComponent,
    StateDataComponent,
    PiechartComponent,
    MultiBarHorizantalchartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ChartsModule,
    NvD3Module,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [GeographyService,salesService],
  bootstrap: [AppComponent],
  exports: [BarplotComponent]
})
export class AppModule { }
