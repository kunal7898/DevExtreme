import { Observable } from "rxjs/Observable";

export  class CascadingFormService {

    constructor() { }
    public LoadMetaData():Array<object>{
        let Values =  new Array<object>();
        Values.push(
        {code:'Grid',Name:'Grid',AttributeType:'DataGrid',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
      )
        return Values;
      }

      getColumns(){
        let columns = new Array<object>();
        columns.push({code: 'OrderNumber', AttributeType:'number',IscellTemplate:true,PicklistMasterId:null,MasterId:null,ParentRelation:null,IsMandatory:true,IsCustomValidation:true,validationCallback:'Length'},
        {code:'SaleAmount',AttributeType:'number',IscellTemplate:false,PicklistMasterId:null,MasterId:null,ParentRelation:null,IsMandatory:true,IsCustomValidation:false,validationCallback:null},
        {code:'StateID',AttributeType:'Lookup',IscellTemplate:false,PicklistMasterId:1,MasterId:null,ParentRelation:null,IsMandatory:false,IsCustomValidation:false,validationCallback:null},
        {code:'CityID',AttributeType:'Lookup',IscellTemplate:false,PicklistMasterId:3,MasterId:1,ParentRelation :'StateID',IsMandatory:true,IsCustomValidation:false,validationCallback:null},
        {code:'OrderDate',AttributeType:'date',IscellTemplate:false,PicklistMasterId:null,MasterId:null,ParentRelation:null,IsMandatory:false,IsCustomValidation:false,validationCallback:null},
        {code:'Employee',AttributeType:'string',PicklistMasterId:null,IscellTemplate:false,MasterId:null,ParentRelation:null,IsMandatory:true,IsCustomValidation:false,validationCallback:null});
        return columns;
      }





 static  getMetaData(){
          return  [
            {
                "OrderNumber": 35703,
                "SaleAmount": 11800,
                "CityID": 17,
                "StateID": 5,
                "Employee": "Harv Mudd",
                "OrderDate": "2013/11/12"
            },
            {
                "OrderNumber": 35706,
                "SaleAmount": 6150,
                "CityID": 17,
                "StateID": 5,
                "Employee": "Harv Mudd",
                "OrderDate": "2013/11/14"
            },
            {
                "OrderNumber": 35709,
                "SaleAmount": 13200,
                "CityID": 14,
                "StateID": 4,
                "Employee": "Harv Mudd",
                "OrderDate": "2013/11/18"
            },
            {
                "OrderNumber": 35711,
                "SaleAmount": 16050,
                "CityID": 14,
                "StateID": 4,
                "Employee": "Jim Packard",
                "OrderDate": "2013/11/22"
            },
            {
                "OrderNumber": 35714,
                "SaleAmount": 14750,
                "CityID": 3,
                "StateID": 1,
                "Employee": "Harv Mudd",
                "OrderDate": "2013/11/30"
            },
            {
                "OrderNumber": 35789,
                "SaleAmount": 6050,
                "CityID": 3,
                "StateID": 1,
                "Employee": "Clark Morgan",
                "OrderDate": "2013/12/01"
            },
            {
                "OrderNumber": 35983,
                "SaleAmount": 3725,
                "CityID": 9,
                "StateID": 3,
                "Employee": "Todd Hoffman",
                "OrderDate": "2013/12/03"
            },
            {
                "OrderNumber": 36488,
                "SaleAmount": 9500,
                "CityID": 9,
                "StateID": 3,
                "Employee": "Todd Hoffman",
                "OrderDate": "2013/12/05"
            },
            {
                "OrderNumber": 36987,
                "SaleAmount": 14200,
                "CityID": 9,
                "StateID": 3,
                "Employee": "Clark Morgan",
                "OrderDate": "2013/12/07"
            },
            {
                "OrderNumber": 37642,
                "SaleAmount": 22650,
                "CityID": 14,
                "StateID": 4,
                "Employee": "Clark Morgan",
                "OrderDate": "2013/12/08"
            }
        ];
      }
}