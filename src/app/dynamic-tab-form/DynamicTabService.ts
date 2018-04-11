export class DynamicTabService<T> {
  constructor() {}
  public LoadFormLayout(LayoutRequest: T[]): Array<object> {
    let LayoutFormResponse = new Array<object>();
    LayoutFormResponse.push(
      {
        ControlType: "Tab",
        TabTitle: "Customer Details",
        IsInTab: false
      },
      {
        ControlType: "DataGrid",
        TabTitle: "Customer Details",
        IsInTab: true
      }
    );

    return LayoutFormResponse;
  }

  public LaodFormAttribute(AttributeRequest: T[]): Array<object> {
    let LayoutAttribute = new Array<object>();
    LayoutAttribute.push(
      {
        code: "CustomerName",
        Name: "Customer Name",
        AttributeType: "TextEdit",
        PicklistId: null,
        IsMandatory: true,
        cssClass: "first-group",
        colCount: null,
        length: null,
        IsCustomValidation: false,
        validationCallback: null,
        ControlType: null
      },
      {
        code: "CustomerAddress",
        Name: "Customer Address",
        AttributeType: "TextArea",
        PicklistId: null,
        IsMandatory: true,
        cssClass: "first-group",
        colCount: null,
        length: null,
        IsCustomValidation: false,
        validationCallback: null,
        ControlType: null
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
