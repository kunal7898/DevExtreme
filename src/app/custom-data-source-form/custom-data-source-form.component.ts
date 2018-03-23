import { Component, OnInit } from '@angular/core';
import { CustomFormService } from './CustomFromService';

@Component({
  selector: 'app-custom-data-source-form',
  templateUrl: './custom-data-source-form.component.html',
  styleUrls: ['./custom-data-source-form.component.css']
})
export class CustomDataSourceFormComponent implements OnInit {
  FirstgroupCount:number=0;
  SecondGroupCount:number=0;
  formData:{};
  items :any[];

  constructor() { }

  ngOnInit() {
    this.formData=this.SetFormData();
  }

  private SetFormData(){
    var Obj = {"State":""};
    return Obj;
    }

    private LoadHeaderItems():Array<object>{
  
      let viewresolver = new CustomFormService();
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



    private LoadInnerItems(Inneritems:any):Array<object>{
      let viewresolver = new CustomFormService();
    
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
        
      
        return validationRule
      
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
        if(Type=="dxSelectBox")
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
      
         
        else
        return null;
      }
      
      
    


}
