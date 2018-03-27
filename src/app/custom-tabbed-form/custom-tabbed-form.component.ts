
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as $ from 'jquery';
import { Http } from '@angular/http';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { CustomTabbedFormService } from './Custom-Tabbed-Service';

@Component({
  selector: 'app-custom-tabbed-form',
  templateUrl: './custom-tabbed-form.component.html',
  styleUrls: ['./custom-tabbed-form.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class CustomTabbedFormComponent implements OnInit {

  FirstgroupCount: number = 0;
  SecondGroupCount: number = 0;
  formData: any;
  items: any[];
  tabs :any[];
  constructor(private http: Http) { }

  ngOnInit() {
    

    this.formData = this.SetFormData();
    this.items = this.LoadInnerItems(this.LoadHeaderItems());
    //this.tabs = CustomTabbedFormService.LoadTabs();
  }

  private SetFormData() {
    var Obj = [{ "State": "" }];
    return Obj;
  }

  private LoadHeaderItems(): Array<object> {

    let viewresolver = new CustomTabbedFormService();
    let Items = Array<object>();
    viewresolver.LoadMetaData().forEach(element => {
      if (element["cssClass"] == "first-group" && this.FirstgroupCount == 0) {
        Items.push({
          cssClass: element["cssClass"],
          colCount: element["colCount"],
          itemType: "group",
          items: []
        })
        this.FirstgroupCount++;
      }
      if (element["cssClass"] == "second-group" && this.SecondGroupCount == 0) {
        Items.push({
          cssClass: element["cssClass"],
          colCount: element["colCount"],
          itemType: "group",
          items: []
        })
        this.SecondGroupCount++;
      }
    });

    return Items;
  }



  private LoadInnerItems(Inneritems: any): Array<object> {
    let viewresolver = new CustomTabbedFormService();

    viewresolver.LoadMetaData().forEach(element => {

      if (this.SecondGroupCount == 1 && element["cssClass"] == "second-group" && element["AttributeType"]!="Tab") {
        Inneritems[0].items.push({
          dataField: element["code"],
          editorType: this.getEditorType(element["AttributeType"]),
          editorOptions: this.getEditorOptions(this.getEditorType(element["AttributeType"]), element["PicklistId"], element["code"]),
          validationRules: this.getMandatoryFieldsValidation(element["code"], element["IsMandatory"], element["length"], element["IsCustomValidation"], element["validationCallback"]),
        })
      }

      if (this.SecondGroupCount == 1 && element["cssClass"] == "second-group" && element["AttributeType"]=="Tab") {
        var component = this;
        Inneritems[0].items.push({
          itemType: "tabbed",
            //colSpan: 2,
            tabs: [{
                title: "Info",
                // Makes this tab span both general columns
               //colSpan: 2,
                // Organizes items inside this tab in three columns
                height:"500",
                //colCount: 3,
                items: [
                  
                {
                  editorType: 'dxDataGrid',
                  editorOptions: {
                      dataSource: this.GetCustomDataSource(),
                      columns:component.getColumns(),
                      height:"500",
                      width:"1000",
                      remoteOperations:{
                        paging:true
                      },
                      allowColumnReordering: true,
                      allowColumnResizeing: true,
                      filterRow: {
                        visible: true
                    },
                    onCellPrepared: function(options) {
                      if(options.rowType=="data"){
                       // options.cellElement.innerHTML="<a class='dx-link'>" + options.cellElement.innerHTML +"</a>"
                      }
                    
                    },
                    showRowLines: true,
                    showBorders: true,
                    allowFiltering:true,
                    allowSorting:true,
                    
                    paging: {
                      pagesize: 2
                  },
                  sorting: {   
                    mode: "multiple"
                    },
                  }
              },]
            }, {
                title: "Tree List",
               
                items: [   
                  {
                    editorType: 'dxTreeList',
                    editorOptions: {
                   dataSource: this.GetCustomDataSourceTree(),
                    remoteOperations: {
                      filtering: true
                  },
                  keyExpr: "id",
                  parentIdExpr: "parentId",
                  hasItemsExpr: "hasItems",
                  rootValue: "",
                  columns: this.GetTreeColumns()
                        
                    }
                }]
            }]
        })
      }
    });

    return Inneritems;
  }

 
  public  getColumns(){
    
    let columns = new Array<object>();
    let obj = new CustomTabbedFormService();
    
    obj.getColumns().forEach((eachObj) => {
      var component = this;
         if (eachObj["AttributeType"]=='number'){
         columns.push({width :150, allowFiltering:true,allowSorting:true,dataField:eachObj["code"],caption:eachObj["code"],
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
         columns.push({width :150, allowFiltering:true,allowSorting:true,dataField:eachObj["code"],caption:eachObj["code"],
       
        })
         
     }
     if (eachObj["AttributeType"]=='date'){
         columns.push({width :50, allowFiltering:true,allowSorting:true,dataField:eachObj["code"],caption:eachObj["code"],dataType:'date'})
     }
 
  
    })
 
    return columns;
 
    }


public GetTreeColumns(){
  let columns = new Array<object>();
    let obj = new CustomTabbedFormService();
    
    obj.getColumnsTree().forEach((eachObj) => {
      var component = this;
         if (eachObj["AttributeType"]=='number'){
         columns.push({width :200, allowFiltering:true,allowSorting:true,dataField:eachObj["code"],caption:eachObj["code"],
         })
     }
         if (eachObj["AttributeType"]=='string'){
         columns.push({width :200, allowFiltering:true,allowSorting:true,dataField:eachObj["code"],caption:eachObj["code"],
       
        })
         
     }
     if (eachObj["AttributeType"]=='date'){
         columns.push({width :200, allowFiltering:true,allowSorting:true,dataField:eachObj["code"],caption:eachObj["code"],dataType:'date'})
     }
 
  
    })
 
    return columns;
} 

public RowItemClick(options){
  window.alert(options)
  }

  public getMandatoryFieldsValidation(Code, IsMandatory, length, IsCustomValidation, validationCallback): any {
    let validationRule = Array<object>();
    if (IsMandatory == true) {
      validationRule.push({
        type: "required",
        message: Code + " is required"
      })
    }


    return validationRule

  }


  public getEditorType(Attributetype): any {
    if (Attributetype == "lookup")
      return "dxSelectBox";
    if (Attributetype == "Date")
      return "dxDateBox";
    if (Attributetype == "textarea")
      return "dxTextArea";
    if (Attributetype == "checkbox")
      return "dxCheckBox";
    if (Attributetype == "radiobox")
      return "dxRadioGroup";
    if(Attributetype == "DataGrid" )
    return "dxDataGrid";
    if(Attributetype == "Tab" )
    return "dxTabPanel";
    
    else
      return null;

  }

  public getEditorOptions(Type, PicklistId, Code): any {
    if (Type == "dxSelectBox")
      return {
        dataSource: this.GetCustomDataSource(), //JSON.parse(localStorage.getItem(PicklistId)),
        displayExpr: "OrderNumber",
        // valueExpr: "ID",
        searchEnabled: true,
        onSelectionChanged: function (e) {
          window.alert("event fired");
          this.popupVisible = false;
        },
        onValueChanged: function (e) {
          var get = this.DataSource;
          window.alert("event fired");
          this.popupVisible = false;
        }
      };
      if (Type == "dxDataGrid")
      return {
        dataSource: this.GetCustomDataSource(),
        showRowLines: true,
        showBorders: true,
        height:"2",
        paging: {
            pagesize: 2
        },
        sorting: {   
            mode: "multiple"
            },
        allowColumnReordering: true,
        allowColumnResizeing: true,
        filterRow: {
            visible: true
        },
        remoteOperations:{
          paging:true
        }
      };
      if (Type == "dxTabs")
      return {
        
              
            itemType: 'tabbed',
            tabs: [
                {
                    title: 'Data',
                    items: [{
                        editorType: 'dxDataGrid',
                        editorOptions: {
                            dataSource: null,
                            columns: [
                                { dataField: 'name', caption: 'Name', },
                                { dataField: 'street', caption: 'Street', },
                            ]
                        }
                    }]
                }
            
          ,
          
      ],
     
      };


    else
      return null;
  }

  GetCustomDataSource() {
    var http = this.http;
    return new DataSource({
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
                totalCount:json.totalCount,
                data: json.items
              };
            });

        },
      }),
      paginate: true,
      pageSize: 10
    });
  }

 GetCustomDataSourceTree(){
  var http = this.http;
  return new DataSource({
    store: new CustomStore({
      load: function (loadOptions: any) {
        return $.ajax({
          url: "https://js.devexpress.com/Demos/Mvc/api/treeListData",
          dataType: "json",
          data: { parentIds: loadOptions.parentIds.join(",") }
      });

      },
    }),
    paginate: true,
    pageSize: 10
  });
 }
  public LoadMetaData():Array<object>{
    let Values =  new Array<object>();
    Values.push(
   
    {code:'State',Name:'State',AttributeType:'lookup',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
   // {code:'Grid',Name:'Grid',AttributeType:'DataGrid',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
    {code:'Tabs',Name:'Tab',AttributeType:'Tab',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null}
   
  )
    return Values;
  }

  private LoadHeaderItemsTab(): Array<object> {

    let Values =  new Array<object>();
    Values.push(
   
    {code:'State',Name:'State',AttributeType:'lookup',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
   // {code:'Grid',Name:'Grid',AttributeType:'DataGrid',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
    //{code:'Tabs',Name:'Tab',AttributeType:'Tab',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null}
   
  )
    let Items = Array<object>();
    Values.forEach(element => {
      if (element["cssClass"] == "first-group" ) {
        Items.push({
          cssClass: element["cssClass"],
          colCount: element["colCount"],
          itemType: "group",
          items: []
        })
        this.FirstgroupCount++;
      }
      if (element["cssClass"] == "second-group" ) {
        Items.push({
          cssClass: element["cssClass"],
          colCount: element["colCount"],
          itemType: "group",
          items: []
        })
        this.SecondGroupCount++;
      }
    });

    return Items;
  }



  private LoadInnerItemsTab(Inneritems: any): Array<object> {
    let Values =  new Array<object>();
    Values.push(
   
    {code:'State',Name:'State',AttributeType:'lookup',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
   // {code:'Grid',Name:'Grid',AttributeType:'DataGrid',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
    //{code:'Tabs',Name:'Tab',AttributeType:'Tab',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null}
   
  )

    Values.forEach(element => {

      if ( element["cssClass"] == "second-group") {
        Inneritems[0].items.push({
          dataField: element["code"],
          editorType: this.getEditorType(element["AttributeType"]),
          editorOptions: this.getEditorOptions(this.getEditorType(element["AttributeType"]), element["PicklistId"], element["code"]),
          validationRules: this.getMandatoryFieldsValidation(element["code"], element["IsMandatory"], element["length"], element["IsCustomValidation"], element["validationCallback"]),
        })
      }
    });

    return Inneritems;
  }
}
