import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Igeography} from './geography';

@Injectable()
export class GeographyService {

  constructor(private http:HttpClient) { }

   getAllGeoData():Observable<Igeography[]>{
    return this.http.get<Igeography[]>('/api/country').catch(this.handleError);
   }
  private handleError(err:HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
