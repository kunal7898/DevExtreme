import { Component, OnInit } from '@angular/core';
import { TabServices, Tab } from '../tab.service';

@Component({
  selector: 'app-tabed-data-grid',
  templateUrl: './tabed-data-grid.component.html',
  styleUrls: ['./tabed-data-grid.component.css'],
  providers:[TabServices]
})
export class TabedDataGridComponent implements OnInit {
  public tabs: Tab[];
  constructor(TabService?:TabServices) { 
    this.tabs = TabService.getTabs();
    var dataItems = [
      {
          title: "Personal Data",
          itemTitleTemplate: 'tabTitle',
          contentTemplate: 'gridItem'
      },
  ];
  }

  ngOnInit() {
  }

}
