
import { Input,ComponentFactoryResolver ,Output,EventEmitter} from '@angular/core';
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { PopupViewResolver } from '../PopupViewResolver';
import { TabComponent } from '../tab/tab.component';
import { confirm } from 'devextreme/ui/dialog';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css'],
})
export class PopupsComponent {
  _ref:any;  
  validationGroup:string ="validationGroup" 
  @Output() formdatas: EventEmitter<any> = new EventEmitter();
  PopUpwidth:number;
  PopUpheight:number;
  showTitle:boolean;
  title:string;
  IsDataGrid:boolean=false;
  dragEnabled:boolean;
  closeOnOutsideClick:boolean;
  popupVisible : boolean;
  valueemitted:string ='hello';
  tabserice:any;
  //dx form 
  formData:{};
  items :any[];

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



public setPopupFormData(Data,IsDataGrid,items){
  let viewresolver = new PopupViewResolver();
  this.formData=Data;
  this.IsDataGrid=IsDataGrid;
  if(IsDataGrid){
    this.items=this.LoadItems();
    this.ButtonType="success";
  }
  else{
    this.items=items;
    this.ButtonType="success";
  }
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

public AddTab(event){
  if(!this.IsDataGrid)
  this.formdatas.emit(this.formData);
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
        this.popupVisible=false;
       } 
    };  
  else
  return null;
}

public setPopUpVisible(value:boolean){
   this.popupVisible=value;
 }

 onButtonClick(Message,title): Promise<boolean> {
  var result = confirm(Message, title);

  return new Promise<boolean>((resolve, reject) => {
    result.done(function (dialogResult) {
      resolve(dialogResult);
    });
 
  });
}


}
