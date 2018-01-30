import { Injectable } from '@angular/core';

@Injectable()
export class DataSourceService {
  
  constructor() { }

  public static loadDataSource(){
    // logic for getting the data from service
    
    localStorage.setItem('1', JSON.stringify( [{
    "ID": 1,
    "Name": "Alabama"
    }, {
    "ID": 2,
    "Name": "Alaska"
    }, {
    "ID": 3,
    "Name": "Arizona"
    }, {
    "ID": 4,
    "Name": "Arkansas"
    }, {
    "ID": 5,
    "Name": "California"
    }]));
  }

}
