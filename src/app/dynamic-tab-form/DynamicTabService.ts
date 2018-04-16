import { FormDataHelper } from "../FormLayoutService/FormDataHelper";
import { Http } from "@angular/http";

export class DynamicTabService<T> {
  constructor() {}
  public LoadFormLayout(LayoutRequest: T[]): Array<any> {
    let LayoutFormResponse = new Array<object>();
    LayoutFormResponse.push(
      {
        ControlType: "Tab",
        Title: "Customer Details",
        IsInTab: false,
        itemType:"tabbed"
      },
      {
        ControlType: "DataGrid",
        Title: "Customer Details",
        IsInTab: true,
        itemType:"tabbed"
      }
    );

    return LayoutFormResponse;
  }

  public LaodFormAttribute(AttributeRequest: T[]): Array<any> {
    let LayoutAttribute = new Array<object>();
    LayoutAttribute.push(
      {
        code: "CustomerName",
        Name: "Customer Name",
        AttributeType: "textarea",
        PicklistId: null,
        IsMandatory: true,
        cssClass: "first-group",
        colCount: null,
        length: null,
        IsCustomValidation: false,
        validationCallback: null,
        ControlType: "Tab"
      },
      {
        code: "CustomerAddress",
        Name: "Customer Address",
        AttributeType: "textarea",
        PicklistId: null,
        IsMandatory: true,
        cssClass: "first-group",
        colCount: null,
        length: null,
        IsCustomValidation: false,
        validationCallback: null,
        ControlType: "Tab"
      },
      {
        code: "SaleAmount",
        Name: "Sale Amount",
        AttributeType: "number",
        PicklistId: null,
        IsMandatory: true,
        cssClass: "first-group",
        colCount: null,
        length: null,
        IsCustomValidation: false,
        validationCallback: null,
        ControlType: "DataGrid"
      },
      {
        code: "StoreCity",
        Name: "Store City",
        AttributeType: "Lookup",
        cssClass: "first-group",
        IscellTemplate: false,
        PicklistMasterId: 5,
        colCount: null,
        length: null,
        IsCustomValidation: false,
        validationCallback: null,
        ControlType: "DataGrid"
      },
      {
        code: "StoreState",
        Name: "Store State",
        AttributeType: "string",
        cssClass: "first-group",
        IscellTemplate: false,
        PicklistMasterId: null,
        colCount: null,
        length: null,
        IsCustomValidation: false,
        validationCallback: null,
        ControlType: "DataGrid"
      },
      {
        code: "OrderDate",
        Name: "Order Date",
        AttributeType: "date",
        IscellTemplate: false,
        cssClass: "first-group",
        PicklistMasterId: null,
        colCount: null,
        length: null,
        IsCustomValidation: false,
        validationCallback: null,
        ControlType: "DataGrid"
      },
      {
        code: "Employee",
        Name: "Sale Amount",
        AttributeType: "string",
        cssClass: "first-group",
        PicklistMasterId: null,
        IscellTemplate: false,
        colCount: null,
        length: null,
        IsCustomValidation: false,
        validationCallback: null,
        ControlType: "DataGrid"
      },
      {
        code: "CustomerVoice",
        Name: "Sale Amount",
        AttributeType: "string",
        PicklistMasterId: null,
        cssClass: "first-group",
        IscellTemplate: false,
        colCount: null,
        length: null,
        IsCustomValidation: false,
        validationCallback: null,
        ControlType: "DataGrid"
      }
    );

    return LayoutAttribute;
  }
}

export class DynamicFormLoader {
  DynamicTabService: DynamicTabService<any>;
  constructor(private http:Http) {
    this.DynamicTabService = new DynamicTabService();
  }

  public LoadInternalForm():Array<object> {
    let _FormDataHelper = new FormDataHelper(this.http);
    let _HeaderFormLayout = _FormDataHelper.PrepareHeaderFormLayout(
      this.DynamicTabService.LaodFormAttribute(null)
    );
    let _InnerFormLayout = _FormDataHelper.PrepareInnerFormLayout(
      this.DynamicTabService.LoadFormLayout(null),
      _HeaderFormLayout
    );

    return _FormDataHelper.PrepareFormAttribute(
      this.DynamicTabService.LaodFormAttribute(null),
      _InnerFormLayout
    );
  }
}
