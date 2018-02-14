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
    localStorage.setItem('2', JSON.stringify( [ 
      {
        "ID": 1,
        "Name":"HR Manager",
      },
      {
        "ID": 2,
        "Name":"IT Manager",
      },
      {
        "ID": 3,
        "Name":"IT Manager",
      },
      {
        "ID": 4,
        "Name":"Controller",
      },
      {
        "ID": 5,
        "Name":"Sales Manager",
      },
      {
        "ID": 6,
        "Name":"Support Manager",
      },
    ]));
  }

}


