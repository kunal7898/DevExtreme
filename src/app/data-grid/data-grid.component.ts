import { PopupsComponent } from './../popups/popups.component';
import { GridColumns } from './data-grid.columns';
import { Employe, DataGridService } from './../data-grid.service';
import { Component, OnInit,Input } from '@angular/core';
import {DevExtremeModule} from 'devextreme-angular';
import { DataSourceService } from '../data-source.service';
<<<<<<< HEAD
import { PopupsComponent } from '../popups/popups.component';
import { Window } from 'selenium-webdriver';
=======
>>>>>>> d4439c689d640534b443b2b992f38844d9605284
import { PopupHelper } from '../popups/popup-addhelper';


@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
  providers: [DataGridService,DataSourceService]
})
<<<<<<< HEAD
export class DataGridComponent implements OnInit  {
  employees: Employe[];
  ads: PopupHelper[];
  IsPopupVisible:any;
=======
export class DataGridComponent implements OnInit {
  employees: Employe[];
  ads: PopupHelper[];
>>>>>>> d4439c689d640534b443b2b992f38844d9605284
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
<<<<<<< HEAD
   
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
=======

    ngOnInit() {
      this.ads = this.getAds();
    }

    getAds() {
      return [
        new PopupHelper(PopupsComponent, {headline: 'Hiring for several positions',
        body: 'Submit your resume today!'}),
  
       
      ];
    }

    

>>>>>>> d4439c689d640534b443b2b992f38844d9605284
  }