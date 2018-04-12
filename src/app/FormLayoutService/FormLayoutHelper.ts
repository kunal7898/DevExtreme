export namespace FormLayout {
  export class FormLayoutHelper {
    public cssClass: string;
    public colCount: string;
    public itemType: string;
    public items: Array<object>;
  }
  export class FormInnerLayoutHelper {
    public ControlType: string;
    public Title: string;
    public IsInTab: boolean;
    public itemType : string;
  }

  export class FormLayoutAttribute {
    public code: string;
    public Name: string;
    public AttributeType: string;
    public PicklistId: number;
    public IsMandatory: boolean;
    public cssClass: string;
    public colCount: number;
    public length: number;
    public IsCustomValidation: boolean;
    public validationCallback: string;
    public ControlType: string;
  }
}
