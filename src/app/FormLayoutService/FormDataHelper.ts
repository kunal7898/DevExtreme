import { FormLayout } from "./FormLayoutHelper";
import { FormEditors } from "./FormEditorType";

export class FormDataHelper {
  // region  Declaration

  FirstgroupCount: number = 0;
  SecondGroupCount: number = 0;
  IsDataGridCreated: boolean = false;
  FormEditorref: FormEditors.FormEditorType;
  // endregion

  // region  Constructor

  public constructor(FormData: Array<FormLayout.FormLayoutHelper>) {
    this.FormEditorref = new FormEditors.FormEditorType();
  }

  // endregion

  // region  Private Section

  private PrepareHeaderFormLayout(
    rParams: Array<FormLayout.FormLayoutHelper>
  ): Array<object> {
    let LayoutBuilder = new Array<object>();
    rParams.forEach(element => {
      if (element["cssClass"] == "first-group" && this.FirstgroupCount == 0) {
        LayoutBuilder.push({
          cssClass: element["cssClass"],
          colCount: element["colCount"],
          itemType: element["colCount"],
          items: element["items"]
        });
        this.FirstgroupCount++;
      }
      if (element["cssClass"] == "second-group" && this.SecondGroupCount == 0) {
        LayoutBuilder.push({
          cssClass: element["cssClass"],
          colCount: element["colCount"],
          itemType: element["colCount"],
          items: element["items"]
        });
        this.SecondGroupCount++;
      }
    });

    return LayoutBuilder;
  }

  private PrepareInnerFormLayout(
    rParams: Array<FormLayout.FormInnerLayoutHelper>,
    LayoutHeaderItems: Array<any>
  ): Array<object> {
    let InnerLayoutBuilder = new Array<object>();
    rParams.forEach(element => {
      if (element["ControlType"] == "Tab" && !element["IsInTab"]) {
        LayoutHeaderItems[0].items.push({
          itemType: element["itemType"],
          //colSpan: 2,
          tabs: [
            {
              title: element["Title"],
              height: "500",

              items: []
            }
          ]
        });
      }
    });
    return InnerLayoutBuilder;
  }

  private PrepareFormAttribute(
    rParams: Array<FormLayout.FormLayoutAttribute>,
    Inneritems: Array<any>
  ): Array<object> {
    rParams.forEach(element => {
      if (
        this.FirstgroupCount == 1 &&
        element["cssClass"] == "first-group" &&
        element["ControlType"] == "Tab"
      ) {
        Inneritems[0].items[0].tabs[0].items.push({
          dataField: element["code"],
          editorType: (this.FormEditorref.FormAttributeType =
            element["AttributeType"]),
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
      if (
        this.FirstgroupCount == 1 &&
        element["cssClass"] == "first-group" &&
        element["ControlType"] == "DataGrid" &&
        !this.IsDataGridCreated
      ) {
        this.IsDataGridCreated = true;
        Inneritems[0].items[0].tabs[0].items.push({
          dataField: element["code"],
          editorType: this.getEditorType(element["AttributeType"]),
          editorOptions: this.getEditorOptions(
            this.getEditorType(element["ControlType"]),
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

  private getEditorType(AttributeType: string): string {
    this.FormEditorref.FormAttributeType = AttributeType;
    return this.FormEditorref.FormAttributeType;
  }

  private getEditorOptions(Type, PicklistId, Code): any {
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
       // dataSource: componentvalue.GetCustomDataSource(),
        //columns: componentvalue.getGridColumns(),
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

  private getMandatoryFieldsValidation(
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
  // endregion
}
