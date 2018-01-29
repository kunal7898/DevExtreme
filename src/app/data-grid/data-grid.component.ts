import { GridColumns } from './data-grid.columns';
import { Employe, DataGridService } from './../data-grid.service';
import { Component, OnInit } from '@angular/core';
import {DevExtremeModule} from 'devextreme-angular';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
  providers: [DataGridService]
})
export class DataGridComponent  {
  employees: Employe[];
  
  columns=[];
  constructor(private Datagridservice:DataGridService) { 
    this.employees = Datagridservice.getEmployees();
    this.columns=GridColumns.getColumns();
    }

    

 
 
}