export class CustomTabbedFormService{

    public LoadMetaData():Array<object>{
        let Values =  new Array<object>();
        Values.push(
       
        {code:'State',Name:'State',AttributeType:'lookup',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
       // {code:'Grid',Name:'Grid',AttributeType:'DataGrid',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
        {code:'Tabs',Name:'Tab',AttributeType:'Tab',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null}
       
      )
        return Values;
      }


    

      getColumns(){
        let columns = new Array<object>();
        columns.push({code: 'OrderNumber', AttributeType:'number',IscellTemplate:true},{code:'SaleAmount',AttributeType:'string',IscellTemplate:false},{code:'StoreCity',AttributeType:'string',IscellTemplate:false},{code:'Employee',AttributeType:'string',IscellTemplate:false},{code:'OrderDate',AttributeType:'date',IscellTemplate:false});
        return columns;
      }

      getColumnsTree(){
        let columns = new Array<object>();
        columns.push({code: 'name', AttributeType:'string',IscellTemplate:true},
        {code:'size',AttributeType:'string',IscellTemplate:false},
        {code:'createdDate',AttributeType:'date',IscellTemplate:false},
        {code:'modifiedDate',AttributeType:'date',IscellTemplate:false});
        return columns;
      }
    }