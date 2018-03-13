import { Injectable } from '@angular/core';


export class Customer {

 JsonEntityProperty:Array<object>
 
}


let CUSTOMER: Customer[] = [{
JsonEntityProperty:[{
  ID: 1,
  FirstName: 'Kunal',
  LastName: 'Singh',
  Prefix: 'Mr.',
  Position: 'CEO',
  Picture: 'images/employees/01.png',
  BirthDate: '1964/03/16',
  HireDate: '1995/01/15',
  Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
  Address: '351 S Hill St.',
  state:'Alabama',
}, {
  ID: 2,
  FirstName: 'Prabodh',
  LastName: 'Singh',
  Prefix: 'Mr.',
  Position: 'CEO',
  Picture: 'images/employees/01.png',
  BirthDate: '1964/03/16',
  HireDate: '1995/01/15',
  Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
  Address: '351 S Hill St.',
  state:'Alabama',
  }]
}
];
@Injectable()
export class CustomerService {

  constructor() { }

  public getColumns(){
    let columns = new Array<object>();
    columns.push({code: 'ID', AttributeType:'number'},
    {code:'FirstName',AttributeType:'string'},
    {code:'LastName',AttributeType:'string'},
    {code:'Position',AttributeType:'string'},
    {code:'BirthDate',AttributeType:'date'},
    {code:'state',AttributeType:'Lookup',PicklistMasterId:1});
    return columns;
  }

  public getCustomerResponse(): Customer[] {
    return CUSTOMER;
  }

  public getCustomerById(CustId : number){
  
   if(CustId==1){
     return [{
      ID: 1,
      FirstName: 'Kunal',
      LastName: 'Singh',
      Prefix: 'Mr.',
      Position: 'CEO',
      Picture: 'images/employees/01.png',
      BirthDate: '1964/03/16',
      HireDate: '1995/01/15',
      Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
      Address: '351 S Hill St.',
      state:'Alabama',
    }];
   }
}

public getCustomerList(){
  let List = Array<object>();
  let Counter  = 0 ;
  this.getCustomerResponse().forEach(element => {
  List.push({
    ID:1,Name:'Kunal Singh'},{ID:2,Name:'Prabodh Singh'})
  }); 
  return List;
}


}

