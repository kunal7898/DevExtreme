import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { DataGridService } from '../data-grid.service';
import { DataSourceService } from '../data-source.service';
import { Employe } from '../app.service';
import * as $ from 'jquery';
import {DevExtremeModule} from 'devextreme-angular';

@Component({
  selector: 'app-celltemplate',
  templateUrl: './celltemplate.component.html',
  styleUrls: ['./celltemplate.component.css']
})
export class CelltemplateComponent implements OnInit {
  @Output() ItemClickEvent: EventEmitter<any> = new EventEmitter();
  title:string;
  dragEnabled:boolean;
  closeOnOutsideClick:boolean;
  IsPopupVisible:any;
  allowColumnReordering=true;
  showBorders= true;
  showRowLines= true;
  width="100%";
  height="400";
  employees: Employe[];
  columns=[];

  editing={
    mode: "row",
    allowUpdating: false,
    allowAdding:true,
    allowDeleting :true,
};

  constructor(private Datagridservice:DataGridService) {
    DataSourceService.loadDataSource();
    this.employees = Datagridservice.getEmployees();
    this.columns=this.getColumns();
    
   }

  ngOnInit() {
  }


  public onCellPrepared(e){
    if(e.rowType === "data" && e.column.command === "edit") {
  }
            
  }

public testEventEmmiter(){

}

  public  getColumns(){
    
    let columns = new Array<object>();
    let obj = new DataGridService();
    
    obj.getColumns().forEach((eachObj) => {
        
         if (eachObj["AttributeType"]=='number'){
         columns.push({width :80, allowFiltering:true,allowSorting:true,dataField:eachObj["code"],caption:eachObj["code"],
         cellTemplate: eachObj["IscellTemplate"]==true? function(container, options){
          $('<a/>').addClass('dx-link')
                        .text(options.text)
                        .click('dxclick', function () {
                       window.alert(options.text);
                      
                        })
                        .appendTo(container);
         }:null})
     }
         if (eachObj["AttributeType"]=='string'){
         columns.push({width :100, allowFiltering:true,allowSorting:true,dataField:eachObj["code"],caption:eachObj["code"]})
     }
     if (eachObj["AttributeType"]=='date'){
         columns.push({width :80, allowFiltering:true,allowSorting:true,dataField:eachObj["code"],caption:eachObj["code"],dataType:'date'})
     }
 
     if(eachObj["AttributeType"]=='Lookup'){
         let tempData = JSON.parse(localStorage.getItem(eachObj["PicklistMasterId"]));  
         columns.push({width :100, allowFiltering:true,allowSorting:true, lookup: {
             dataSource:tempData,
             valueExpr: "ID",
             displayExpr: "Name"
         },dataField:eachObj["code"],caption:eachObj["code"]});
         
     }
    })
 
    return columns;
 
    }
 
  
}
