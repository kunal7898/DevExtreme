import { GridColumns } from './data-grid.columns';
import { Employe, DataGridService } from './../data-grid.service';
import { Component, OnInit,Input } from '@angular/core';
import {DevExtremeModule} from 'devextreme-angular';
import { DataSourceService } from '../data-source.service';
import { PopupsComponent } from '../popups/popups.component';
import { Window } from 'selenium-webdriver';
import { PopupHelper } from '../popups/popup-addhelper';


@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
  providers: [DataGridService,DataSourceService]
})
export class DataGridComponent implements OnInit  {
  employees: Employe[];
  ads: PopupHelper[];
  IsPopupVisible:any;
  allowColumnReordering=true;
  showBorders= true;
  showRowLines= true;
  width="100%";
  height="400";
  showColumnLines=true;
 
  editing={
    mode: "cell",
    allowUpdating: false,
    allowAdding:true,
    allowDeleting :true,
};
  columns=[];

  constructor(private Datagridservice:DataGridService) { 
    DataSourceService.loadDataSource();
    this.employees = Datagridservice.getEmployees();
    this.columns=GridColumns.getColumns();
    

    }
   
    ngOnInit() {
      this.ads = this.LoadComponetDynamically();
    }
    onRowClick(e){
      window.alert(e);
      this.IsPopupVisible=true;
      this.ads= this.LoadComponetDynamically();
    
    }
    LoadComponetDynamically(){
      let obj = new   PopupsComponent;
      obj.showInfo();
      return [new PopupHelper(PopupsComponent,{Body:'grid popup',Title:'Grid Popup',IsVisible:this.IsPopupVisible})];
  
    }
  }