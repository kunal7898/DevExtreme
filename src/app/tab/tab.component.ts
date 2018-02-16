import { Component, OnInit,ViewChild } from '@angular/core';
import {  Tab, TabServices } from '../tab.service';
import { PopupsComponent } from '../popups/popups.component';
import { TextAreaComponent } from '../text-area/text-area.component';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  providers:[TabServices]
})
export class TabComponent implements OnInit {
  @ViewChild(PopupsComponent) private popComponent :PopupsComponent;
  @ViewChild(TextAreaComponent) private TextAreaCompnoent :TextAreaComponent;
  TabPanelshow:boolean=false;
  DataGridshow:boolean=false;
  public tabs: Tab[];
  tabContent:any;
  constructor(TabService?:TabServices) {
    this.tabs = TabService.getTabs();
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

  OnTabPanelSelectionChanged(event){
    let value = this.TextAreaCompnoent.GetTextAreaData();
  }
}
