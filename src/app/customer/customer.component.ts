import { Component, OnInit,ViewChild ,Output,EventEmitter} from '@angular/core';
import { SlideOutComponent } from '../slide-out/slide-out.component';
import {DevExtremeModule} from 'devextreme-angular';
import { CustomerService } from '../Services/customer.service';
import { Window } from 'selenium-webdriver';
import { DataGridComponent } from '../data-grid/data-grid.component';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @ViewChild(SlideOutComponent) private SlideOutComponent :SlideOutComponent;
  @ViewChild(DataGridComponent) private DataGridComponent :DataGridComponent;
  @Output() FormData: EventEmitter<any> = new EventEmitter();
  @Output() FormColumns: EventEmitter<any> = new EventEmitter();
  formData:{};
  items :any[];

  GlobalCustomerRefobj : CustomerService;
  MenuData:any[];

  constructor(CustomerService:CustomerService,private route: ActivatedRoute,
    private router: Router) {
   this.MenuData=CustomerService.getCustomerList();
   this.GlobalCustomerRefobj = CustomerService;
 
   }

  ngOnInit() {
    this.formData = this.SetFormData();
    this.SlideOutComponent.SetMenuItems(this.FormatMenuData(this.MenuData));
    this.SlideOutComponent.menuVisible=true;
}



// Formate Menu Data 
  public FormatMenuData(JsonData:any){
   let MenuData = Array<object>();
   JsonData.forEach(element => {
    MenuData.push({
      key:'Customer',
      items:this.GetInternalData(element)
    })
   });
 
   return MenuData;
  }

  public  GetInternalData(InternalData:any){
    let Data  = Array<object>();
    Data.push({
      ID:InternalData.ID,
      text:InternalData.Name,
      
    })
    return Data;
  }


//

public SetFormData(){
  var Obj = {"ID":"","FirstName":"","LastName":"","Position":"","BirthDate":"","HireDate":"","Address":"","State":"","ZipCode":"","Notes":""};
  return Obj;
  }

public  ItemClickEvent(event){
  this.formData =  this.GlobalCustomerRefobj.getCustomerById(event.itemData.ID);
  this.items = this.LoadInnerItems(this.GlobalCustomerRefobj.getColumns());
  this.router.navigate([ '/CustomerForm/view', event.itemData.ID ], { relativeTo: this.route });
}


public LoadInnerItems(Inneritems:any):Array<object>{
let InnerData  = Array<object>();
  Inneritems.forEach(element => {
    InnerData.push({
        dataField:element["code"],
        editorType:this.getEditorType(element["AttributeType"]),
        editorOptions:this.getEditorOptions(this.getEditorType(element["AttributeType"]),element["PicklistId"],element["code"]),
        validationRules: this.getMandatoryFieldsValidation(element["code"],element["IsMandatory"],element["length"],element["IsCustomValidation"],element["validationCallback"]) ,
      })
   
});

return InnerData;
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
