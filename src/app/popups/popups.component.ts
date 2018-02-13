
import { Input,ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { PopupViewResolver } from '../PopupViewResolver';





@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css'],
})
export class PopupsComponent {
  _ref:any;  
  PopUpwidth:number;
  PopUpheight:number;
  showTitle:boolean;
  title:string;
  dragEnabled:boolean;
  closeOnOutsideClick:boolean;
  popupVisible : boolean;
  valueemitted:string ='hello';
  //dx form 
  formData:{};
  items :any[];
  buttonOptions = {
    text: "Register",
    type: "success",
    useSubmitBehavior: true,
    validationGroup: "customerData"
};
ButtonType:string;

  constructor() { 

  }

  public setPopupConfirguration( Width:number, Height:number, ShowTitle :boolean, Title : string,  DragEnabled : boolean, CloseOnOutsideClick:boolean){
    this.PopUpwidth=Width;
    this.PopUpheight=Height;
    this.showTitle=ShowTitle;
    this.title=Title;
    this.dragEnabled=DragEnabled;
    this.closeOnOutsideClick=CloseOnOutsideClick;
  } 



public setPopupFormData(Data){
  let viewresolver = new PopupViewResolver();
  this.formData=Data;
  this.items=this.LoadItems();
  this.ButtonType="success";
}



public LoadItems():Array<object>{
  let viewresolver = new PopupViewResolver();
  let Items = Array<object>();
  viewresolver.LoadMetaData().forEach(element => {
  Items.push({
    dataField:element["code"],
    editorType:this.getEditorType(element["AttributeType"]),
    editorOptions:this.getEditorOptions(this.getEditorType(element["AttributeType"]),element["PicklistId"]),
    validationRules: this.getMandatoryFieldsValidation(element["code"],element["IsMandatory"]) ,
    
  })
});
return Items;
}


public getMandatoryFieldsValidation(Code,IsMandatory):any{
 if(IsMandatory==true)
  return [
    {
    type: "required",
    message: Code+" is required"
}]
else
return null;
}

public getEditorType(Attributetype):any{
  if(Attributetype=="lookup")
   return "dxSelectBox";
   if(Attributetype=="Date")
   return "dxDateBox";
   else
   return null;

}

public getEditorOptions(Type,PicklistId):any{
  if(Type=="dxSelectBox")
    return  {
      dataSource:JSON.parse(localStorage.getItem(PicklistId)),
      displayExpr: "Name",
      valueExpr: "ID",
      searchEnabled: true,
      onSelectionChanged:function(e){
        window.alert("event fired");
       } 
    };  
  else
  return null;
}

public setPopUpVisible(value:boolean){
   this.popupVisible=value;
 }



}
