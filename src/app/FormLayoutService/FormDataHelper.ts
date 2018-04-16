import { FormLayout } from "./FormLayoutHelper";
import { FormEditors } from "./FormEditorType";
import { FormDataGridHelper } from "./FormDataGridHelper";
import { Http } from "@angular/http";
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";
export class FormDataHelper {
  // region  Declaration

  FirstgroupCount: number = 0;
  SecondGroupCount: number = 0;
  IsDataGridCreated: boolean = false;
  FormEditorref: FormEditors.FormEditorType;
  FormDataGridHelper: FormDataGridHelper;
  // endregion

  // region  Constructor

  public constructor(
    private http: Http,
    FormData?: Array<FormLayout.FormLayoutHelper>
  ) {
    this.FormEditorref = new FormEditors.FormEditorType();
  }

  // endregion

  // region  Private Section

  public PrepareHeaderFormLayout(
    rParams: Array<FormLayout.FormLayoutHelper>
  ): Array<any> {
    let LayoutBuilder = new Array<object>();
    rParams.forEach(element => {
      if (element["cssClass"] == "first-group" && this.FirstgroupCount == 0) {
        LayoutBuilder.push({
          cssClass: element["cssClass"],
          colCount: element["colCount"],
          itemType: "group",
          items: []
        });
        this.FirstgroupCount++;
      }
      if (element["cssClass"] == "second-group" && this.SecondGroupCount == 0) {
        LayoutBuilder.push({
          cssClass: element["cssClass"],
          colCount: element["colCount"],
          itemType: "group",
          items: []
        });
        this.SecondGroupCount++;
      }
    });

    return LayoutBuilder;
  }

  public PrepareInnerFormLayout(
    rParams: Array<FormLayout.FormInnerLayoutHelper>,
    LayoutHeaderItems: Array<any>
  ): Array<object> {
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
    return LayoutHeaderItems;
  }

  public PrepareFormAttribute(
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
      if (
        this.FirstgroupCount == 1 &&
        element["cssClass"] == "first-group" &&
        element["ControlType"] == "DataGrid" &&
        !this.IsDataGridCreated
      ) {
        this.IsDataGridCreated = true;
        Inneritems[0].items[0].tabs[0].items.push({
          dataField: element["code"],
          editorType: this.getEditorType(element["ControlType"]),
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

  private GetCustomDataSource() {
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

  private getEditorOptions(Type, PicklistId, Code): any {
    let _formEditoOptions = new FormEditors.FormEditorOptions(
      Type,
      PicklistId,
      Code,
      this.http
    );
    return _formEditoOptions.getEditorOptions();
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
