import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { DataGridService } from '../data-grid.service';
import { DataSourceService } from '../data-source.service';
import { Employe } from '../app.service';
import * as $ from 'jquery';
import {DevExtremeModule} from 'devextreme-angular';
import { confirm } from 'devextreme/ui/dialog';


@Component({
  selector: 'app-celltemplate',
  templateUrl: './celltemplate.component.html',
  styleUrls: ['./celltemplate.component.css']
})
export class CelltemplateComponent implements OnInit {
  @Output() ItemClickEvent: EventEmitter<any> = new EventEmitter();
  parameters:Array<string> = ["FU"];
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
  editing:any;
  paging:any;
  pager:any;



  constructor(private Datagridservice:DataGridService) {
    DataSourceService.loadDataSource();
    this.employees = Datagridservice.getEmployees();
    this.columns=this.getColumns();
    
   }

  ngOnInit() {
    var self = this;
   this.Gridconfiguration();
  }

  public Gridconfiguration(){
    this.editing={
      mode: "row",
      allowUpdating: false,
      allowAdding:true,
      allowDeleting :true,
  };
  
  this.paging= {
    pageSize: 5
  }
  this.pager= {
    showNavigationButtons: true
  }


  }

  public onCellPrepared(e){
  
    if(e.rowType === "data" && e.column.command === "edit") {
  }
            
  }

public RowItemClick(options){
window.alert(options)
}

  public  getColumns(){
    
    let columns = new Array<object>();
    let obj = new DataGridService();
    
    obj.getColumns().forEach((eachObj) => {
      var component = this;
         if (eachObj["AttributeType"]=='number'){
         columns.push({width :80, allowFiltering:true,allowSorting:true,dataField:eachObj["code"],caption:eachObj["code"],
         cellTemplate:function(container, options){
        var  Data=options;
          var dataGrid = options.component;
            $('<a/>').addClass('dx-link')
                        .text(options.text)
                        .click('dxclick', function(){
                          component.RowItemClick(options.data);
                        })
                        .appendTo(container);
         }})
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


// .click('dxclick', (options) => {
// var _rowIndex = options.currentTarget.getAttribute('rowIndex');
// var data = dataGrid.getKeyByRowIndex(_rowIndex);
// component.testEventEmmiter(data);
// }) .click('dxclick', (options) => {
// var _rowIndex = options.currentTarget.getAttribute('rowIndex');
// var data = dataGrid.getKeyByRowIndex(_rowIndex);
// component.testEventEmmiter(data);
// }) 
 

// $('<a/>').addClass('dx-link')
// .text(options.text)
// .attr('rowIndex', options.rowIndex)
// .click('dxclick', (options) => {
// var _rowIndex = options.currentTarget.getAttribute('rowIndex');
// var data = dataGrid.getKeyByRowIndex(_rowIndex);
// component.testEventEmmiter(data);
// })
// .appendTo(container);

