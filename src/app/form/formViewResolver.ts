export class FormViewResolver{


    public LoadMetaData():Array<object>{
        let Values =  new Array<object>();
        Values.push(
        {code:'ID',Name:'ID',AttributeType:'number',PicklistId:null,IsMandatory:true,colCount: 4, cssClass: "first-group",length:null,IsCustomValidation:false,validationCallback:null},
        {code:'FirstName',Name:'First Name',AttributeType:'string',PicklistId:null,IsMandatory:true, cssClass: "first-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
        {code:'LastName',Name:'Last Name',AttributeType:'string',PicklistId:null,IsMandatory:true, cssClass: "first-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
        {code:'Position',Name:'Position',AttributeType:'lookup',PicklistId:2,IsMandatory:true, cssClass: "first-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
        {code:'BirthDate',Name:'Date Of birth',AttributeType:'Date',PicklistId:null,IsMandatory:true, cssClass: "first-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
        {code:'HireDate',Name:'Hire Date',AttributeType:'Date',PicklistId:null,IsMandatory:true, cssClass: "first-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
        {code:'URl',Name:'URL',AttributeType:'string',PicklistId:null,IsMandatory:true, cssClass: "first-group",colCount: null,length:null,IsCustomValidation:true,validationCallback:'validationCallback'},
        {code:'Address',Name:'Address',AttributeType:'string',PicklistId:null,IsMandatory:true, cssClass: "second-group",colCount: 2,length:null,IsCustomValidation:false,validationCallback:null},
        {code:'City',Name:'City',AttributeType:'lookup',PicklistId:3,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
        {code:'Kunal',Name:'State',AttributeType:'lookup',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
        {code:'ZipCode',Name:'Zip Code',AttributeType:'string',PicklistId:null,IsMandatory:true, cssClass: "second-group",colCount: null,length:6,IsCustomValidation:false,validationCallback:null},
        {code:'Notes',Name:'Notes',AttributeType:'textarea',PicklistId:null,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
        {code:'IsActive',Name:'Active',AttributeType:'checkbox',PicklistId:null,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
        {code:'Gender',Name:'Gender',AttributeType:'radiobox',PicklistId:4,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null}
      )
        return Values;
      }

     
}