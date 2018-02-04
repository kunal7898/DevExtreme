import { PopupsComponent } from './../popups/popups.component';
import { GridColumns } from './data-grid.columns';
import { Employe, DataGridService } from './../data-grid.service';
import { Component, OnInit } from '@angular/core';
import {DevExtremeModule} from 'devextreme-angular';
import { DataSourceService } from '../data-source.service';
import { PopupHelper } from '../popups/popup-addhelper';


@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
  providers: [DataGridService,DataSourceService]
})
export class DataGridComponent implements OnInit {
  employees: Employe[];
  ads: PopupHelper[];
  allowColumnReordering=true;
  showBorders= true;
  showRowLines= true;
  width="100%";
  height="400";
  showColumnLines=true;
  editing={
    mode: "cell",
    allowUpdating: true,
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
      this.ads = this.getAds();
    }

    getAds() {
      return [
        new PopupHelper(PopupsComponent, {headline: 'Hiring for several positions',
        body: 'Submit your resume today!'}),
  
       
      ];
    }

    

  }