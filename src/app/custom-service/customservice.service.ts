import { Injectable } from '@angular/core';

export class Column {
  dataField: string;
  caption: string;
  datataype: any;
  format: any;
  visible: boolean;
  showLookUp: boolean;
  lookup: any;
  cellTemplate: any;
}

let gridColumns: Column[] = [
  { "dataField": "OrderNumber", "caption": "OrderNumber", "datataype": "string", "format": "", "visible": true, "lookup": "", showLookUp: false, cellTemplate: "buttonCellTemplate" },
  { "dataField": "OrderDate", "caption": "OrderDate", "datataype": "date", "format": "", "visible": true, "lookup": "", showLookUp: false, cellTemplate: "" },
  { "dataField": "StoreCity", "caption": "StoreCity", "datataype": "string", "format": "", "visible": true, "lookup": "", showLookUp: false, cellTemplate: "" },
  { "dataField": "StoreState", "caption": "StoreState", "datataype": "", "format": "", "visible": true, "lookup": "", showLookUp: false, cellTemplate: "" },
  { "dataField": "Employee", "caption": "Employee", "datataype": "string", "format": "", "visible": true, "lookup": "", showLookUp: false, cellTemplate: "" },
  { "dataField": "SaleAmount", "caption": "SaleAmount", "datataype": "number", "format": "", "visible": false, "lookup": "", showLookUp: false, cellTemplate: "" },
];

@Injectable()
export class CustomService {

  constructor() { }

  getColumns() {
    return gridColumns;
  }

}
