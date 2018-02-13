export class PopupViewResolver {


  public getData():any{
    //Service For getting the Data
  let Values ={
    "ID": 1,
    "FirstName": "John",
    "LastName": "Heart",
    "Position": "CEO",
    "BirthDate": "1964/03/16",
    "HireDate": "1995/01/15",
    "Notes": "John has been in the Audio/Video industry since 1990. He has led DevAV as its CEO since 2003.\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.",
    "Address": "351 S Hill St.",
    "City": "Los Angeles",
    "State": "CA",
    "ZipCode": "90013",
    "Home": "555-684-1334",
    "Mobile": "555-684-1335",
    "Email": "jheart@dx-email.com",
    "Skype": "jheart_DX_skype",
}
  return Values;
 }



 
 public LoadMetaData():Array<object>{
   let Values =  new Array<object>();
   Values.push({code:'ID',Name:'ID',AttributeType:'number',PicklistId:null,IsMandatory:true},
   {code:'FirstName',Name:'First Name',AttributeType:'string',PicklistId:null,IsMandatory:true},
   {code:'LastName',Name:'Last Name',AttributeType:'string',PicklistId:null,IsMandatory:true},
   {code:'Position',Name:'Position',AttributeType:'lookup',PicklistId:2,IsMandatory:true},
   {code:'BirthDate',Name:'Date Of birth',AttributeType:'Date',PicklistId:null,IsMandatory:true},
   {code:'HireDate',Name:'Hire Date',AttributeType:'Date',PicklistId:null,IsMandatory:true},
   {code:'Address',Name:'Address',AttributeType:'string',PicklistId:null,IsMandatory:true}
 )
   return Values;
 }
 }