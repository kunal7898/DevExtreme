import { Injectable } from '@angular/core';

export class CustomerAddressResponse{
  JsonEntityResponse:Array<object>
}



let CUSTOMERADDRESS: CustomerAddressResponse[] = [{
  JsonEntityResponse:[{
    CustomerID:1,
    Address1 :'Address 1',
    Address2:'Address 2',
    City:'City'
  },{
    CustomerID:2,
    Address1 :'Address 1',
    Address2:'Address 2',
    City:'City'
  }]
}]

@Injectable()
export class CustomerAddressService {


  constructor() { }

  public getColumns(){
    let columns = new Array<object>();
    columns.push({code: 'CustomerID', AttributeType:'number'},
    {code:'Address1',AttributeType:'string'},
    {code:'Address2',AttributeType:'string'},
    {code:'City',AttributeType:'string'});
    return columns;
  }

  public getCustomerAddressResponse(): CustomerAddressResponse[] {
    return CUSTOMERADDRESS;

}

public getCustomerById(CustId : number){
  
  this.getCustomerAddressResponse().forEach(element => {
    
  }); 
}

}
