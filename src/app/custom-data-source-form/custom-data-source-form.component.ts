import { Component, OnInit } from '@angular/core';
import { CustomFormService } from './CustomFromService';
import * as $ from 'jquery';
import { Http } from '@angular/http';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-custom-data-source-form',
  templateUrl: './custom-data-source-form.component.html',
  styleUrls: ['./custom-data-source-form.component.css']
})
export class CustomDataSourceFormComponent implements OnInit {
  FirstgroupCount: number = 0;
  SecondGroupCount: number = 0;
  formData: any;
  items: any[];
  tabs: any[];
  dataSource : DataSource;
  constructor(private http: Http) { }

  ngOnInit() {
    this.dataSource = this.GetCustomDataSource();
    this.dataSource.load();
    this.formData = this.SetFormData();
    this.items = this.LoadInnerItems(this.LoadHeaderItems());
    this.tabs = CustomFormService.LoadTabs();
   
  }

  private SetFormData() {
    var Obj = [{ "State": "" }];
    return Obj;
  }

  private LoadHeaderItems(): Array<object> {

    let viewresolver = new CustomFormService();
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
    let viewresolver = new CustomFormService();

    viewresolver.LoadMetaData().forEach(element => {

      if (this.SecondGroupCount == 1 && element["cssClass"] == "second-group") {
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
    if (Attributetype == "DataGrid")
      return "dxDataGrid";
    if (Attributetype == "Tab")
      return "dxTabs";

    else
      return null;

  }

  public getEditorOptions(Type, PicklistId, Code): any {
    if (Type == "dxSelectBox")
      return {
        dataSource: this.dataSource, //JSON.parse(localStorage.getItem(PicklistId)),
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
        height: "500",
        paging: {
          pagesize: 2
        },
        sorting: {
          mode: "multiple"
        },
        cellTemplate: function (container, options) {

          $('<a/>').addClass('dx-link')
            .text(options.text)
            .click('dxclick', function () {

            })
            .appendTo(container);
        },
        allowColumnReordering: true,
        allowColumnResizeing: true,
        filterRow: {
          visible: true
        },
        remoteOperations: {
          paging: true
        }
      };
    if (Type == "dxTabs")
      return {
        dataSource: [
          {
            id: 0,
            text: "user",
            icon: "user",
            content: this.LoadInnerItemsTab(this.LoadHeaderItemsTab())
          },
          {
            id: 1,
            text: "comment",
            icon: "comment",
            content: "Comment tab content"
          },
          {
            id: 2,
            text: "find",
            icon: "find",
            content: "Find tab content"
          }
        ],
        itemTemplate: function (data, _, element) {
          element.append(
            $("<div>").text(data.content), $("</div>")
            ,
          )
        }
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
                totalCount: json.totalCount,
                data: json.items
              };
            });

        },
      }),
      paginate: true,
      pageSize: 10
    });
  }


  GetCustomDataSourceSample() {
    var http = this.http;
    return new CustomStore({
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
              totalCount: json.totalCount,
              data: json.items
            };
          });
      },
    });
  }


  public LoadMetaData(): Array<object> {
    let Values = new Array<object>();
    Values.push(

      { code: 'State', Name: 'State', AttributeType: 'lookup', PicklistId: 1, IsMandatory: true, cssClass: "second-group", colCount: null, length: null, IsCustomValidation: false, validationCallback: null },
      // {code:'Grid',Name:'Grid',AttributeType:'DataGrid',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
      { code: 'Tabs', Name: 'Tab', AttributeType: 'Tab', PicklistId: 1, IsMandatory: true, cssClass: "second-group", colCount: null, length: null, IsCustomValidation: false, validationCallback: null }

    )
    return Values;
  }

  private LoadHeaderItemsTab(): Array<object> {

    let Values = new Array<object>();
    Values.push(

      { code: 'State', Name: 'State', AttributeType: 'lookup', PicklistId: 1, IsMandatory: true, cssClass: "second-group", colCount: null, length: null, IsCustomValidation: false, validationCallback: null },
      // {code:'Grid',Name:'Grid',AttributeType:'DataGrid',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
      //{code:'Tabs',Name:'Tab',AttributeType:'Tab',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null}

    )
    let Items = Array<object>();
    Values.forEach(element => {
      if (element["cssClass"] == "first-group") {
        Items.push({
          cssClass: element["cssClass"],
          colCount: element["colCount"],
          itemType: "group",
          items: []
        })
        this.FirstgroupCount++;
      }
      if (element["cssClass"] == "second-group") {
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
    let Values = new Array<object>();
    Values.push(

      { code: 'State', Name: 'State', AttributeType: 'lookup', PicklistId: 1, IsMandatory: true, cssClass: "second-group", colCount: null, length: null, IsCustomValidation: false, validationCallback: null },
      // {code:'Grid',Name:'Grid',AttributeType:'DataGrid',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
      //{code:'Tabs',Name:'Tab',AttributeType:'Tab',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null}

    )

    Values.forEach(element => {

      if (element["cssClass"] == "second-group") {
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