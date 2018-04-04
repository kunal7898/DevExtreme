import { Injectable } from '@angular/core';

@Injectable()
export class DataSourceService {
  
  constructor() { }

  

  public static loadDataSource(){
    // logic for getting the data from service
    
    localStorage.setItem('5', JSON.stringify( [ 
        {
          "ID": 1,
          "Name":"Las Vegas",
        },
        {
          "ID": 2,
          "Name":"San Jose",
        },
        {
          "ID": 3,
          "Name":"Denver",
        },
        {
          "ID": 4,
          "Name":"Seattle",
        },
        {
          "ID": 5,
          "Name":"Salt Lake City",
        },
        {
          "ID": 6,
          "Name":"San Diego",
        },
      ]));

    localStorage.setItem('1', JSON.stringify([{
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
    localStorage.setItem('3', JSON.stringify([{
        "ID": 1,
        "Name": "Tuscaloosa",
        "StateID": 1
    }, {
        "ID": 2,
        "Name": "Hoover",
        "StateID": 1
    }, {
        "ID": 3,
        "Name": "Dothan",
        "StateID": 1
    }, {
        "ID": 4,
        "Name": "Decatur",
        "StateID": 1
    }, {
        "ID": 5,
        "Name": "Anchorage",
        "StateID": 2
    }, {
        "ID": 6,
        "Name": "Fairbanks",
        "StateID": 2
    }, {
        "ID": 7,
        "Name": "Juneau",
        "StateID": 2
    }, {
        "ID": 8,
        "Name": "Avondale",
        "StateID": 3
    }, {
        "ID": 9,
        "Name": "Buckeye",
        "StateID": 3
    }, {
        "ID": 10,
        "Name": "Carefree",
        "StateID": 3
    }, {
        "ID": 11,
        "Name": "Springdale",
        "StateID": 4
    }, {
        "ID": 12,
        "Name": "Rogers",
        "StateID": 4
    }, {
        "ID": 13,
        "Name": "Sherwood",
        "StateID": 4
    }, {
        "ID": 14,
        "Name": "Jacksonville",
        "StateID": 4
    }, {
        "ID": 15,
        "Name": "Cabot",
        "StateID": 4
    }, {
        "ID": 16,
        "Name": "Adelanto",
        "StateID": 5
    }, {
        "ID": 17,
        "Name": "Glendale",
        "StateID": 5
    }, {
        "ID": 18,
        "Name": "Moorpark",
        "StateID": 5
    }, {
        "ID": 19,
        "Name": "Needles",
        "StateID": 5
    }, {
        "ID": 20,
        "Name": "Ontario",
        "StateID": 5
    }]));

  localStorage.setItem('4', JSON.stringify( ["Male", "Female"]));


 

  }

}


