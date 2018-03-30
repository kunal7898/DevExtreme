export class CustomFormService{

    public LoadMetaData():Array<object>{
        let Values =  new Array<object>();
        Values.push(
       
        {code:'State',Name:'State',AttributeType:'lookup',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
        {code:'Grid',Name:'Grid',AttributeType:'DataGrid',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
        //{code:'Tabs',Name:'Tab',AttributeType:'Tab',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null}
       
      )
        return Values;
      }


      public static LoadTabs():Array<object>{
        var tabs = [
            {     
                id: 0,
                text: "user", 
                icon: "user", 
                content: "User tab content" 
            },
            { 
                id: 1,
                text: "comment", 
                icon: "comment", 
                content: "Comment tab content" 
            },
            { 
                id: 2,
                text: "find", 
                icon: "find", 
                content: "Find tab content" 
            }
        ]

        return  tabs;
      }

      getColumns(){
        let columns = new Array<object>();
        columns.push({code: 'OrderNumber', AttributeType:'number',IscellTemplate:true,PicklistMasterId:null},
        {code:'SaleAmount',AttributeType:'number',IscellTemplate:false,PicklistMasterId:null},
        {code:'StoreCity',AttributeType:'Lookup',IscellTemplate:false,PicklistMasterId:5},
        {code:'StoreState',AttributeType:'string',IscellTemplate:false,PicklistMasterId:null},
        {code:'OrderDate',AttributeType:'date',IscellTemplate:false,PicklistMasterId:null},
        {code:'Employee',AttributeType:'string',PicklistMasterId:null,IscellTemplate:false});
        return columns;
      }
}