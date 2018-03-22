import { Component, OnInit } from '@angular/core';
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
  formData:{};
  items :any[];
  FirstgroupCount:number=0;
  SecondGroupCount:number=0;
  constructor() { }

  ngOnInit() {
  }

 

}
