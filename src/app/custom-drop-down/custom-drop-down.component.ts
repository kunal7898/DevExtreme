import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {
  DxDropDownBoxModule,
  DxDataGridModule,
} from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source'
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-custom-drop-down',
  templateUrl: './custom-drop-down.component.html',
  styleUrls: ['./custom-drop-down.component.css']
})
export class CustomDropDownComponent implements OnInit {

    selectBoxDataCustom: any = {};
     DropDownBoxData: any = {};
     _gridBoxValue: number = 3;
     _gridSelectedRowKeys: number[] = [3];
  
    // gridData: any;
  
    constructor(private http: Http) {
    }
  
    ngOnInit() {
       this.GetSelectBoxData();
     this.GetDropDownBoxData();
    //   this.GetDataGridData();
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
          // loadMode: "raw",
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
      this.DropDownBoxData = new DataSource({
        store: new CustomStore({
          // loadMode: "raw",
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
      this.gridBox_displayExpr(this._gridBoxValue);
      this._gridSelectedRowKeys = value;
    }
  
    gridBox_displayExpr(item) {
      return item.OrderNumber && item.StoreCity + " <" + item.StoreState + ">";
    }
    //************************************** */
  
  
    //***************Data Grid Changes************* */
    GetDataGridData(){
  
    }

}
