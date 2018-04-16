import { Input } from "@angular/core";
import { FormDataGridHelper } from "./FormDataGridHelper";
import { DynamicTabService } from "../dynamic-tab-form/DynamicTabService";
import { Http } from "@angular/http";
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";


export namespace FormEditors {
  export class FormEditorType {
    public Attributetype: string;
    @Input()
    set FormAttributeType(Attributetype: string) {
      // you might do something special in here
      this.Attributetype = Attributetype;
    }
    get FormAttributeType() {
      // you might do something special in here
      return this.GetFormEditorType(this.Attributetype);
    }

    private GetFormEditorType(Attributetype: string): string {
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
  }



  export class FormEditorOptions {
    public _Type: string;
    public _PicklistId: number;
    public _Code: string;
    FormDataGridHelper:FormDataGridHelper;
    
    
    @Input()
    set EditorType(Type: string) {
      // you might do something special in here
      this._Type = Type;
    }
    get EditorType() {
      // you might do something special in here
      return this._Type;
    }

    @Input()
    set EditorPicklist(PicklistId: number) {
      // you might do something special in here
      this._PicklistId = PicklistId;
    }
    get EditorPicklist() {
      // you might do something special in here
      return this._PicklistId;
    }

    
    @Input()
    set EditorCode(Code: string) {
      // you might do something special in here
      this._Code = Code;
    }
    get EditorCode() {
      // you might do something special in here
      return this._Code;
    }

    public constructor(Type: string, PicklistId: number, Code: string,private http? :Http) {
        this._Type = Type;
        this._PicklistId = PicklistId;
        this._Code = Code;
        this.FormDataGridHelper = new FormDataGridHelper(http);
       }

  public getEditorOptions(): any {
    if (this._Type == "dxButton") {
      var componentRef = this;
      return {
        text: "Save Data",
        onClick: function(e) {
          // componentRef.SaveFormData(e);
        }
      };
    }
    if (this._Type== "dxDataGrid") {
      var componentvalue = this;
        
      return {
        dataSource: componentvalue.FormDataGridHelper.GetCustomDataSource(),
        columns: componentvalue.FormDataGridHelper.getGridColumns(),
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


 
  }
}
