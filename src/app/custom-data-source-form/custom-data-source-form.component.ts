import { Component, OnInit } from "@angular/core";
import { CustomFormService } from "./CustomFromService";
import * as $ from "jquery";
import { Http } from "@angular/http";
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";

@Component({
  selector: "app-custom-data-source-form",
  templateUrl: "./custom-data-source-form.component.html",
  styleUrls: ["./custom-data-source-form.component.css"]
})
export class CustomDataSourceFormComponent implements OnInit {
  FirstgroupCount: number = 0;
  SecondGroupCount: number = 0;
  formData: any;
  items: any[];
  tabs: any[];
  dataSource: DataSource;
  gridControl: any;
  BlankDatasource: DataSource;
  constructor(private http: Http) {
    this.dataSource = this.GetCustomDataSource();
    this.dataSource.load();

    this.formData = this.SetFormData();
    this.items = this.LoadInnerItems(this.LoadHeaderItems());
    this.tabs = CustomFormService.LoadTabs();
  }
  first: boolean = true;
  ngOnInit() {}

  private SetFormData() {
    var Obj = [{ State: "" }];
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
        });
        this.FirstgroupCount++;
      }
      if (element["cssClass"] == "second-group" && this.SecondGroupCount == 0) {
        Items.push({
          cssClass: element["cssClass"],
          colCount: element["colCount"],
          itemType: "group",
          items: []
        });
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
          editorOptions: this.getEditorOptions(
            this.getEditorType(element["AttributeType"]),
            element["PicklistId"],
            element["code"]
          ),
          validationRules: this.getMandatoryFieldsValidation(
            element["code"],
            element["IsMandatory"],
            element["length"],
            element["IsCustomValidation"],
            element["validationCallback"]
          )
        });
      }
    });

    return Inneritems;
  }

  public getColumns() {
    let columns = new Array<object>();
    let obj = new CustomFormService();

    obj.getColumns().forEach(eachObj => {
      if (eachObj["AttributeType"] == "number") {
        columns.push({
          width: 150,
          allowFiltering: true,
          allowSorting: true,
          dataField: eachObj["code"],
          caption: eachObj["code"]
        });
      }
      if (eachObj["AttributeType"] == "string") {
        columns.push({
          width: 150,
          allowFiltering: true,
          allowSorting: true,
          dataField: eachObj["code"],
          caption: eachObj["code"]
        });
      }
      if (eachObj["AttributeType"] == "date") {
        columns.push({
          width: 150,
          allowFiltering: true,
          allowSorting: true,
          dataField: eachObj["code"],
          caption: eachObj["code"],
          dataType: "date"
        });
      }

      if (eachObj["AttributeType"] == "Lookup") {
        let tempData = JSON.parse(
          localStorage.getItem(eachObj["PicklistMasterId"])
        );
        columns.push({
          width: 150,
          allowFiltering: true,
          allowSorting: true,
          lookup: {
            dataSource: tempData,
            valueExpr: "Name",
            displayExpr: "Name"
          },
          dataField: eachObj["code"],
          caption: eachObj["code"]
        });
      }
    });
  return columns;
  }

  public getMandatoryFieldsValidation(
    Code,
    IsMandatory,
    length,
    IsCustomValidation,
    validationCallback
  ): any {
    let validationRule = Array<object>();
    if (IsMandatory == true) {
      validationRule.push({
        type: "required",
        message: Code + " is required"
      });
    }

    return validationRule;
  }

  public getEditorType(Attributetype): any {
    if (Attributetype == "lookup") return "dxSelectBox";
    if (Attributetype == "Date") return "dxDateBox";
    if (Attributetype == "textarea") return "dxTextArea";
    if (Attributetype == "checkbox") return "dxCheckBox";
    if (Attributetype == "radiobox") return "dxRadioGroup";
    if (Attributetype == "DataGrid") return "dxDataGrid";
    if (Attributetype == "SaveButton") return "dxButton";
    if (Attributetype == "Tab") return "dxTabs";
    else return null;
  }

  public getEditorOptions(Type, PicklistId, Code): any {
    if (Type == "dxSelectBox")
      return {
        dataSource: this.dataSource, //JSON.parse(localStorage.getItem(PicklistId)),
        displayExpr: "OrderNumber",
        // valueExpr: "ID",
        searchEnabled: true,
        onSelectionChanged: function(e) {
          window.alert("event fired");
          this.popupVisible = false;
        },
        onValueChanged: function(e) {
          var get = this.DataSource;
          window.alert("event fired");
          this.popupVisible = false;
        }
      };
    if (Type == "dxButton") {
      var componentRef = this;
      return {
        text: "Save Data",
        onClick: function(e) {
          componentRef.SaveFormData(e);
        }
      };
    }
    if (Type == "dxDataGrid") {
      var componentvalue = this;
      return {
        dataSource: this.dataSource,
        columns: this.getColumns(),
        cacheEnabled: true,
        showRowLines: true,
        showBorders: true,
        height: "500",
        width: "100%",
        sorting: {
          mode: "multiple"
        },
        twoWayBindingEnabled: true,
        editing: {
          mode: "batch",
          allowUpdating: true,
          allowDeleting: true,
          allowAdding: true
        },
        onContentReady: function(e) {
         var get = e;
        },
        onEditorPreparing: function(options, items) {
          var CurrentOptions = options;
          options.editorOptions.onValueChanged = function(e, rowIndex) {
            CurrentOptions.setValue(e.value);
            if (
              e.element.parentElement.parentElement.parentElement.rowIndex >
                CurrentOptions.component._controllers.data._items.length - 2 &&
              CurrentOptions.index == CurrentOptions.component.columnCount() - 1
            ) {
              CurrentOptions.component.addRow(CurrentOptions.component._controllers.data._items[CurrentOptions.component._controllers.data._items.length-1].key);
             
              //  var CurrentAddedRow = CurrentOptions.component._controllers.data._items.shift();
              //  CurrentOptions.component._controllers.data._items.push(CurrentAddedRow);
            }
          };
        },
        onToolbarPreparing: function(e) {
          var toolbarItems = e.toolbarOptions.items;
          // Modifies an existing item
          toolbarItems.forEach((element, index) => {
            if (element.name == "addRowButton") {
              element.options.type = "success";
              element.options.icon = null;
              element.showText = "always";
            } else {
              element.visible = false;
            }
          });
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
    } else return null;
  }

  SaveFormData(e) {
    var rows = this.gridControl.getController("editing")._editData;
    if (this.gridControl.hasEditData())
      var rows = this.gridControl.getController("editing")._editData;
    for (var i = 0; i < rows.length; i++) {
      console.log(rows);
    }
  }

  GetCustomDataSource() {
    var http = this.http;
    var ComponentRef = this;
    return new DataSource({
      store: new CustomStore({
        key: "OrderNumber",

        load: function(loadOptions: any) {
          var params = "?";

          params += "skip=" + loadOptions.skip || 0;
          params += "&take=" + loadOptions.take || 10;

          return http
            .get(
              "https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems" +
                params
            )
            .toPromise()
            .then(response => {
              var json = response.json();
              json.items.push({ OrderNumber: "" });
              console.log(json.items);
              return {
                totalCount: json.totalCount,
                data: json.items
              };
            });
        },
        update: function(key, value) {
          // return http.put("https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems" + encodeURIComponent(key), value)
          // .toPromise();
          return null;
        },
        insert: function(values) {
          // return http.post("https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems", values)
          // .toPromise();
          return null;
        }
      }),
      paginate: true,
      pageSize: 10
    });
  }

  GetCustomDataSourceSample() {
    var http = this.http;
    return new CustomStore({
      load: function(loadOptions: any) {
        var params = "?";

        params += "skip=" + loadOptions.skip || 0;
        params += "&take=" + loadOptions.take || 10;

        return http
          .get(
            "https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems" +
              params
          )
          .toPromise()
          .then(response => {
            var json = response.json();
            console.log(json.items);
            return {
              totalCount: json.totalCount,
              data: json.items
            };
          });
      }
    });
  }

  public LoadMetaData(): Array<object> {
    let Values = new Array<object>();
    Values.push(
      {
        code: "State",
        Name: "State",
        AttributeType: "lookup",
        PicklistId: 1,
        IsMandatory: true,
        cssClass: "second-group",
        colCount: null,
        length: null,
        IsCustomValidation: false,
        validationCallback: null
      },
      // {code:'Grid',Name:'Grid',AttributeType:'DataGrid',PicklistId:1,IsMandatory:true, cssClass: "second-group",colCount: null,length:null,IsCustomValidation:false,validationCallback:null},
      {
        code: "Tabs",
        Name: "Tab",
        AttributeType: "Tab",
        PicklistId: 1,
        IsMandatory: true,
        cssClass: "second-group",
        colCount: null,
        length: null,
        IsCustomValidation: false,
        validationCallback: null
      }
    );
    return Values;
  }
}
