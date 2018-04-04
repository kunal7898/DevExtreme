import { Component, OnInit } from "@angular/core";
import { CascadingFormService } from "./CascadingFormService";

@Component({
  selector: "app-cascadinglookups",
  templateUrl: "./cascadinglookups.component.html",
  styleUrls: ["./cascadinglookups.component.css"]
})
export class CascadinglookupsComponent implements OnInit {
  FirstgroupCount: number = 0;
  SecondGroupCount: number = 0;
  datasource: any;
  formData: any;
  items: any[];

  constructor() {
    this.formData = this.SetFormData();
    this.items = this.LoadInnerItems(this.LoadHeaderItems());
  }

  ngOnInit() {}

  private SetFormData() {
    var Obj = [{ State: "" }];
    return Obj;
  }

  private LoadHeaderItems(): Array<object> {
    let viewresolver = new CascadingFormService();
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
    let viewresolver = new CascadingFormService();

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
    if (Type == "dxDataGrid") {
      var componentvalue = this;
      return {
        dataSource: CascadingFormService.getMetaData(),
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

  public getColumns() {
    let columns = new Array<object>();
    let obj = new CascadingFormService();
    let ComponentRef = this;
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
            dataSource:
              eachObj["MasterId"] == null
                ? tempData
                : function(options) {
                  return {
                      store: JSON.parse(
                        localStorage.getItem(eachObj["PicklistMasterId"])
                      ),
                      filter: options.data
                        ? [
                            ComponentRef.GetMasterData(eachObj["MasterId"]),
                            "=",
                            options.data.StateID
                          ]
                        : null
                    };
                  },
            valueExpr: "ID",
            displayExpr: "Name"
          },
          dataField: eachObj["code"],
          caption: eachObj["code"]
        });
      }
    });
    return columns;
  }

  public GetMasterData(MasterId: number) {
    if (MasterId == 1) return "StateID";
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
}
