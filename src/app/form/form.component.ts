import { Component, OnInit ,ViewChild} from '@angular/core';

import { FormViewResolver } from './formViewResolver';
import { Tab, TabServices } from '../tab.service';
import { DataGridComponent } from '../data-grid/data-grid.component';
import { DataGridService } from '../data-grid.service';
import { GridColumns } from '../data-grid/data-grid.columns';
import * as $ from 'jquery';
import { EventEmitter } from 'selenium-webdriver';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild(DataGridComponent) private DataGridComponent :DataGridComponent;
  FirstgroupCount:number=0;
  SecondGroupCount:number=0;
  DataSource :any=JSON.parse(localStorage.getItem('3'))
  formData:{};
  items :any[];
  public tabs: Tab[];
  constructor(TabService:TabServices,private Datagridservice:DataGridService) {
    this.tabs = TabService.getTabs();

   }


  ngOnInit() {
    this.formData=this.SetFormData();
    this.items =this.LoadInnerItems(this.LoadHeaderItems());
    //this.DataGridComponent.SetData( this.Datagridservice.getEmployees());
    //this.DataGridComponent.SetColumn(GridColumns.getColumns());
  }

public SetFormData(){
  var Obj = {"ID":"","FirstName":"","LastName":"","Position":"","BirthDate":"","HireDate":"","Address":"","State":"","ZipCode":"","Notes":"","Isactive":""};
  return Obj;
  
}
  
public LoadHeaderItems():Array<object>{
  
  let viewresolver = new FormViewResolver();
  let Items = Array<object>();
  viewresolver.LoadMetaData().forEach(element => {
    if(element["cssClass"]=="first-group" && this.FirstgroupCount==0){
      Items.push({
        cssClass:element["cssClass"],
        colCount:element["colCount"],
        itemType:"group",
        items:[]
      })
      this.FirstgroupCount++;
    }
    if(element["cssClass"]=="second-group" && this.SecondGroupCount==0){
      Items.push({
        cssClass:element["cssClass"],
        colCount:element["colCount"],
        itemType:"group",
        items:[]
      })
      this.SecondGroupCount++;
    }
});

return Items;
}


public SetTemplate(template:any){

  return 
}

public LoadInnerItems(Inneritems:any):Array<object>{
  let viewresolver = new FormViewResolver();

  viewresolver.LoadMetaData().forEach(element => {
    if(this.FirstgroupCount==1 && element["cssClass"]=="first-group"){
      Inneritems[0].items.push({
        dataField:element["code"],
        editorType:this.getEditorType(element["AttributeType"]),
        editorOptions:this.getEditorOptions(this.getEditorType(element["AttributeType"]),element["PicklistId"],element["code"]),
        validationRules: this.getMandatoryFieldsValidation(element["code"],element["IsMandatory"],element["length"],element["IsCustomValidation"],element["validationCallback"]) ,
      })
    }
    if(this.SecondGroupCount==1 && element["cssClass"]=="second-group"){
      Inneritems[1].items.push({
        dataField:element["code"],
        editorType:this.getEditorType(element["AttributeType"]),
        editorOptions:this.getEditorOptions(this.getEditorType(element["AttributeType"]),element["PicklistId"],element["code"]),
        validationRules: this.getMandatoryFieldsValidation(element["code"],element["IsMandatory"],element["length"],element["IsCustomValidation"],element["validationCallback"]) ,
      })
    }
});

return Inneritems;
}





public getMandatoryFieldsValidation(Code,IsMandatory,length,IsCustomValidation,validationCallback):any{
let  validationRule =  Array<object>();
  if(IsMandatory==true)
  {
    validationRule.push({
      type: "required",
      message: Code+" is required"
    })
  }
  if(length!=null){
    validationRule.push({
      type: 'stringLength', min: 4, max: 6, message: 'Zip  length should be in a range from 4 to 6 symbols.'
    })
  }

  if(IsCustomValidation){
    validationRule.push({
      type: 'pattern', pattern: '^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$', message: 'Invalid URl'
    })
  }

  return validationRule

 }
 

 public validationCallback(options){
 
  if (options.value.length < 4) {
    options.rule.message = "The password is too short. The password length must be more than 4.";
    return false;
} else { return true; }
 }
 public getEditorType(Attributetype):any{
   if(Attributetype=="lookup")
    return "dxSelectBox";
    if(Attributetype=="Date")
    return "dxDateBox";
    if(Attributetype=="textarea")
    return "dxTextArea";
    if(Attributetype=="checkbox")
    return "dxCheckBox";
    if(Attributetype=="radiobox")
    return "dxRadioGroup";
    else
    return null;
 
 }

 public getEditorOptions(Type,PicklistId,Code):any{
  if(Type=="dxSelectBox" && Code!='City')
    return  {
      items:JSON.parse(localStorage.getItem(PicklistId)),
      displayExpr: "Name",
      valueExpr: "ID",
      searchEnabled: true,
      onSelectionChanged:function(e){
        window.alert("event fired");
        this.popupVisible=false;
       } ,
       onValueChanged:function(e){
         var get  = this.DataSource;
        window.alert("event fired");
        this.popupVisible=false;
       }
    };  
    if(Type=="dxSelectBox" && Code=='City')
    return  {
      items:this.DataSource,
      displayExpr: "Name",
      valueExpr: "ID",
      searchEnabled: true,
      onSelectionChanged:function(e){
        window.alert("event fired");
        this.popupVisible=false;
       } ,
       onValueChanged:function(e){
        window.alert("event fired");
        this.popupVisible=false;
       } ,onOpened:function(e){
        function StateID(element, index, array) { 
          return (element.StateID==1); 
       } 
       e.component._dataSource._storeLoadOptions.filter=e.component._options.items.filter(StateID)
       }
    };
    if(Type=="dxCheckBox"){
      return {
        disabled:false,
        value:true,
        readOnly:false,
        onValueChanged:function(e){
          
          window.alert(e);
         }
      }
    }
    if(Type=="dxRadioGroup"){
      return {
        items:JSON.parse(localStorage.getItem(PicklistId)),
        onValueChanged:function(e){
          
          window.alert(e);
         }
      }
    }
  else
  return null;
}


public CheckBoxEvent(){
  window.alert("dff");
}
 

}
