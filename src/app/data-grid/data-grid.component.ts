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

  columns: any[] = [{
 
    width: 100,
    allowFiltering: false,
    allowSorting: false,
    cellTemplate: 'cellTemplate'
}, {
    dataField: 'Prefix',
    caption: 'Title',
    width: 70
},
'FirstName',
'LastName',
{
    dataField: 'Position',
    caption: 'Position'
}, {
    dataField: 'BirthDate',
    caption: 'BirthDate',
    dataType: 'date'
}, {
    dataField: 'HireDate',
    dataType: 'date'
}];
  constructor(private Datagridservice:DataGridService) { 
    this.employees = Datagridservice.getEmployees();
  }

 
 
}
