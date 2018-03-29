import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import {
  DxDropDownBoxModule,
  DxDataGridModule,
  DxDropDownBoxComponent,
  DxTemplateDirective
} from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source'
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-custom-drop-down',
  templateUrl: './custom-drop-down.component.html',
  styleUrls: ['./custom-drop-down.component.css']
})
export class CustomDropDownComponent implements OnInit, AfterViewInit {

  selectBoxDataCustom: any = {};
  DropDownBoxData: any = {};
  _gridBoxValue: number = 3;
  _gridSelectedRowKeys: number[] = [3];
  isOpened = false;

  _gridBoxValueCustom: number; 
  _gridSelectedRowKeysCustom: number[];

  gridCustomDataSource : DataSource;

  gridDataSource: any;

    constructor(private http: Http) {
  }

  ngOnInit() {
    this.gridDataSource = this.makeAsyncDataSource("customers.json");
    //this.GetSelectBoxData();
    this.gridCustomDataSource = this.GetDropDownBoxData();
    this.gridCustomDataSource.load();
    
  }

  ngAfterViewInit() {
  }

  //*************Select Box Changes***********************/
  selectBoxData = [
    { id: 1, country: "Afghanistan", capital: "Kabul" },
    { id: 2, country: "Albania", capital: "Tirana" },
  ];

  GetSelectBoxData() {
    var http = this.http;
    this.selectBoxDataCustom = new DataSource({
      store: new CustomStore({
        load: function (loadOptions: any) {

          var params = '?';

          params += 'skip=' + loadOptions.skip || 0;
          params += '&take=' + loadOptions.take || 10;

          return http.get('https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems' + params)
            .toPromise()
            .then(response => {
              var json = response.json();
              console.log(json.items);
              return {
                data: json.items
              };
            });
        },
      }),
      paginate: true,
      pageSize: 10
    })
  }

  //************************************** */

  //**************** Drop Down Changes ***********/
  GetDropDownBoxData() {
    var http = this.http;
   return new DataSource({
      store: new CustomStore({
        // loadMode: "raw",
        byKey: function (key) {
          return key;
        },
        load: function (loadOptions: any) {

          var params = '?';

          params += 'skip=' + loadOptions.skip || 0;
          params += '&take=' + loadOptions.take || 10;

          return http.get('https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems' + params)
            .toPromise()
            .then(response => {
              var json = response.json();
              console.log(json.items);
              return {
                data: json.items
              };
            });
        },

      }),
      paginate: true,
      pageSize: 5
    })
  }

  makeAsyncDataSource(jsonFile) {
    var that = this;
    return new CustomStore({
      loadMode: "raw",
      key: "ID",
      load: function () {
        return that.http.get('https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/data/' + jsonFile)
          .toPromise()
          .then(response => {
            return response.json();
          });
      }
    });
  };


  get gridBoxValue(): number {
    return this._gridBoxValue;
  }

  set gridBoxValue(value: number) {
    this._gridSelectedRowKeys = value && [value] || [];
    this._gridBoxValue = value;
  }

  get gridSelectedRowKeys(): number[] {
    return this._gridSelectedRowKeys;
  }

  set gridSelectedRowKeys(value: number[]) {
    this._gridBoxValue = value.length && value[0] || null;
    this._gridSelectedRowKeys = value;
  }

  gridBox_displayExpr(item) {
    return item && item.CompanyName + " <" + item.Phone + ">";
  }


  get gridBoxValueCustom(): number {
    return this._gridBoxValueCustom;
  }

  set gridBoxValueCustom(value: number) {
    this._gridSelectedRowKeysCustom = value && [value] || [];
    this._gridBoxValueCustom = value;
  }

  get gridSelectedRowKeysCustom(): number[] {
  
    return this._gridSelectedRowKeysCustom;
  }

  set gridSelectedRowKeysCustom(value: number[]) {
    this._gridBoxValueCustom = value.length && value[0] || null;
    this._gridSelectedRowKeysCustom = value;
    this.isOpened=false;
  }

  gridBox_displayExprCustom(item) {
      return item && item.StoreCity + " <" + item.StoreState + ">";
  }


  
}
