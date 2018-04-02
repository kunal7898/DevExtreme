import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { CustomerService } from '../Services/customer.service';
import {DevExtremeModule} from 'devextreme-angular';
import { CustomerComponent } from '../customer/customer.component';
import { TreeViewService } from '../tree-view/Tree-view.service';


@Component({
  selector: 'app-slide-out',
  templateUrl: './slide-out.component.html',
  styleUrls: ['./slide-out.component.css']
})
export class SlideOutComponent implements OnInit {
  @Output() ItemClickEvent: EventEmitter<any> = new EventEmitter();
  height :number = 500;
  Items :Array<object> = null;
  @Input() sideBar: CustomerComponent;
  dataSource : any [];
  menuVisible: boolean=false;
  formData:{};
  items :any[];

  constructor(CustomerService:CustomerService) { 
    
   this.menuVisible = true;
  }

  ngOnInit() {
    this.Items= this.CreateTreeView(TreeViewService.GetTreeDataFromService());
this.menuVisible = true;
this.formData =  this.SetFormData();
  }

  public CreateTreeView(Value){
  
    let TreeValue = Array<object>();
    
    if(Value==null)
      return;
      
      //https://js.devexpress.com/Documentation/Guide/Themes/Icon_Library/
  
      Value.forEach(element => {
         TreeValue.push({
            Id:element["ID"],
            ValueName:element["text"],
            icon: element["ParentID"]==0?'folder':'doc',
            ParentID: element["ParentID"] ,
          })
  
      });
  
     return TreeValue;
    }

  public SetMenuVisible(value:boolean){
    this.menuVisible=value;
  }

  public onItemClick(event){
    let g = this.sideBar;
      this.ItemClickEvent.emit(event);
  }
  
  public SetMenuItems(Data:any){
   this.dataSource=Data;
  }

  public FormData(event){

 this.formData =  event;
  }

  public SetFormData(){
    var Obj = {"ID":"","FirstName":"","LastName":"","Position":"","BirthDate":"","HireDate":"","Address":"","State":"","ZipCode":"","Notes":""};
    return Obj;
    }
}
