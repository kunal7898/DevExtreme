import { Component, OnInit } from "@angular/core";
import { DynamicTabService } from "./DynamicTabService";
import { Http } from "@angular/http";
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";

@Component({
  selector: "app-dynamic-tab-form",
  templateUrl: "./dynamic-tab-form.component.html",
  styleUrls: ["./dynamic-tab-form.component.css"]
})
export class DynamicTabFormComponent implements OnInit {
  FirstgroupCount: number = 0;
  SecondGroupCount: number = 0;
  formData: any;
  items: any[];
  constructor(private http: Http) {}

  ngOnInit() {
    this.formData = [{}];
    let LoadCss = this.LoadLayoutHeaderItems();
    let LoadControlType = this.LoadInnerItems(LoadCss);
    this.LoadInnerItems(LoadControlType);
  }

  private LoadLayoutHeaderItems(): Array<object> {
    let viewresolver = new DynamicTabService();
    let Items = Array<object>();
    viewresolver.LaodFormAttribute(null).forEach(element => {
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

  private LoadLayoutInner(LayoutHeaderItems: any): Array<object> {
    let InnerLayoutResolver = new DynamicTabService();

    InnerLayoutResolver.LoadFormLayout(null).forEach(element => {
      if (element["ControlType"] == "Tab") {
        var component = this;
        LayoutHeaderItems[0].items.push({
          itemType: "tabbed",
          //colSpan: 2,
          tabs: [
            {
              title: element["TabTitle"],
              // Makes this tab span both general columns
              //colSpan: 2,
              // Organizes items inside this tab in three columns
              height: "500",
              //colCount: 3,
              items: []
            }
          ]
        });
      }
    });
    return LayoutHeaderItems;
  }

  private LoadInnerItems(Inneritems: any): Array<object> {
    let viewresolver = new DynamicTabService();

    viewresolver.LaodFormAttribute(null).forEach(element => {
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

  private getGridColumns(): any {
    let columns = new Array<object>();
    let obj = new DynamicTabService();

    obj.LaodFormAttribute(null).forEach(eachObj => {
      if (eachObj["ControlType"] == "DataGrid") {
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
    if (Attributetype == "LookUp") return "dxLookup";
    if (Attributetype == "TagBox") return "dxTagBox";
    else return null;
  }

  public getEditorOptions(Type, PicklistId, Code): any {
    if (Type == "dxButton") {
      var componentRef = this;
      return {
        text: "Save Data",
        onClick: function(e) {
          // componentRef.SaveFormData(e);
        }
      };
    }
    if (Type == "dxDataGrid") {
      var componentvalue = this;
      return {
        dataSource: componentvalue.GetCustomDataSource(),
        columns: componentvalue.getGridColumns(),
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
        onEditorPreparing: function(options) {
          var CurrentOptions = options;
          options.editorOptions.onValueChanged = function(e) {
            CurrentOptions.setValue(e.value);
            if (
              CurrentOptions.row.rowIndex >
                CurrentOptions.component.getController("data")._items.length -
                  2 &&
              CurrentOptions.index == CurrentOptions.component.columnCount() - 1
            ) {
              CurrentOptions.component.addRow(CurrentOptions.row.key);
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

  GetCustomDataSource() {
    var http = this.http;
    return new DataSource({
      store: new CustomStore({
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
      }),
      paginate: true,
      pageSize: 10
    });
  }
}
