export class CustomFormService{

    public LoadMetaData():Array<object>{
        let Values =  new Array<object>();
        Values.push(
       
        {code:'State',Name:'State',AttributeType:'lookup',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
       // {code:'Grid',Name:'Grid',AttributeType:'DataGrid',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
        {code:'Tabs',Name:'Tab',AttributeType:'Tab',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null}
       
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
}