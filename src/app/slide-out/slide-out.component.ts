import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { CustomerService } from '../Services/customer.service';
import {DevExtremeModule} from 'devextreme-angular';
import { CustomerComponent } from '../customer/customer.component';


@Component({
  selector: 'app-slide-out',
  templateUrl: './slide-out.component.html',
  styleUrls: ['./slide-out.component.css']
})
export class SlideOutComponent implements OnInit {
  @Output() ItemClickEvent: EventEmitter<any> = new EventEmitter();
  
  @Input() sideBar: CustomerComponent;
  dataSource : any [];
  menuVisible: boolean=false;
  formData:{};
  items :any[];

  constructor(CustomerService:CustomerService) { 
    
   this.menuVisible = true;
  }

  ngOnInit() {

this.menuVisible = true;
this.formData =  this.SetFormData();
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
