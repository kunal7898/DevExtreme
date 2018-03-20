import { Component, OnInit } from '@angular/core';
import { TabServices, Tab } from '../tab.service';

@Component({
  selector: 'app-tab-data-grid',
  templateUrl: './tab-data-grid.component.html',
  styleUrls: ['./tab-data-grid.component.css'],
  providers:[TabServices]
})
export class TabDataGridComponent implements OnInit {
  public tabs: Tab[];
  public CurrentGridSetting :Array<any>;
  constructor(TabService?:TabServices) {
    this.tabs = TabService.getTabs();
   }

  ngOnInit() {
  }


  CloseEvent(event,index){
    

      }
      OnTabPanelSelectionChanged(event){
         this.CurrentGridSetting = event.addedItems;
      }
}
