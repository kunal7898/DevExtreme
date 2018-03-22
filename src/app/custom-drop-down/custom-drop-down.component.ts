import { Component, OnInit, Inject } from '@angular/core';
import { FormViewResolver } from '../form/formViewResolver';
import { Http, HttpModule } from '@angular/http';
import {
  DxDropDownBoxModule,
  DxTreeViewModule,
  DxDataGridModule,
  DxTreeViewComponent
} from 'devextreme-angular';

import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-custom-drop-down',
  templateUrl: './custom-drop-down.component.html',
  styleUrls: ['./custom-drop-down.component.css']
})
export class CustomDropDownComponent implements OnInit {

    gridDataSource: any;
    _gridBoxValue: number = 3;
    _gridSelectedRowKeys: number[] = [3];

  constructor(@Inject(Http) http: Http) {
    this.gridDataSource = this.makeAsyncDataSource(http, "customers.json");
   }

  ngOnInit() {
  }

  makeAsyncDataSource(http, jsonFile){
    return new CustomStore({
        loadMode: "raw",
        key: "ID",
        load: function() {
            return http.get('data/' + jsonFile)
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

gridBox_displayExpr(item){
    return item && item.CompanyName + " <" + item.Phone + ">";
}


}
