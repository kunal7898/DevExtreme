import { Component, OnInit,ViewChild } from '@angular/core';
import {  Tab, TabServices } from '../tab.service';
import { PopupsComponent } from '../popups/popups.component';
import { TextAreaComponent } from '../text-area/text-area.component';
import { AlertService } from '../Services/alert.service';
import { ToastService } from '../Services/toast.service';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  providers:[AlertService,ToastService,TabServices]
})
export class TabComponent implements OnInit {
  @ViewChild(PopupsComponent) private popComponent :PopupsComponent;
  @ViewChild(TextAreaComponent) private TextAreaCompnoent :TextAreaComponent;
  TabPanelshow:boolean=false;
  DataGridshow:boolean=false;
  selectedItem:string=null;
  public tabs: Tab[];
  SelectedIndex:number=null;
  tabContent:any;
  Alertservice:any;
  Toastservice:any;
  constructor( AlertService:AlertService, ToastService:ToastService,TabService?:TabServices) {
    this.tabs = TabService.getTabs();
   this.Toastservice= ToastService;
   this.Alertservice=AlertService;
   }


  ngOnInit() {
  }

  Settabs(tab:any){
    this.tabs= tab;
  }

  selectTab(event){
    if(event.itemIndex == 2){
      this.TabPanelshow=true;
      return ;
    }
    if(event.itemIndex == 0){
      this.DataGridshow=true;
      return;
    }
    this.DataGridshow=false;
    this.TabPanelshow=false;
    this.tabContent = this.tabs[event.itemIndex].content;

  }

  formdatas(event){
    this.tabs.push(event);
  }
  AddTab(event){
    this.Toastservice.SuccessNotify("Message",500,null);

    this.Alertservice.ConfirmAlert("Are You Sure You want to Delete","Confirm Changes").then((response) => {
    if(response){
    window.alert("hhe") }
 });
 this.Alertservice.SuccessAlert("Test message","Message").then((response)=>{
   //
   window.alert(response);

 })
    let Items = Array<object>();
    Items.push({
      dataField:'ID',
      editorType:null,
      editorOptions:null,
},
    {
      dataField:'text',
      editorType:null,
      editorOptions:null,
},
    {
      dataField:'icon',
      editorType:null,
      editorOptions:null,
},
    {
      dataField:'content',
      editorType:null,
      editorOptions:null,

      
    })
   
    this.popComponent.setPopupConfirguration(500,500,true,"Add New Tab",true,true);
    this.popComponent.setPopupFormData({
      "ID":"",
      "text":"",
      "icon":"",
      "content":""
 
    },false,Items);
    this.popComponent.popupVisible=true;

  }

  CloseEvent(event,index){
    
// this.popComponent.onButtonClick("Are You Sure You want to Delete","Confirm Changes").then((response) => {
//  if(response){
//    this.tabs.splice(this.SelectedIndex,1);
//  }
// });
  }
  OnTabPanelSelectionChanged(event){
    let value = this.TextAreaCompnoent.GetTextAreaData();
  }
  onItemRendered(event){
this.SelectedIndex = event.itemIndex; 
  }
  
}
