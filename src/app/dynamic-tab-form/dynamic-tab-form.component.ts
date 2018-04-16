import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { DynamicTabService, DynamicFormLoader } from "./DynamicTabService";
import { Http } from "@angular/http";
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";

@Component({
  selector: "app-dynamic-tab-form",
  templateUrl: "./dynamic-tab-form.component.html",
  styleUrls: ["./dynamic-tab-form.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class DynamicTabFormComponent implements OnInit {
  FirstgroupCount: number = 0;
  SecondGroupCount: number = 0;
  formData: any;
  items: any[];
  loadingVisible: boolean = true;
  IsDataGridCreated: boolean = false;
  DynamicFormLoader: DynamicFormLoader;

  constructor(private http: Http) {
    this.DynamicFormLoader = new DynamicFormLoader(this.http);
  }

  ngOnInit() {
    this.formData = {};
    this.items= [];
    this.items =this.DynamicFormLoader.LoadInternalForm();
  }

  public onShown() {
    setTimeout(() => {
      this.showLoadPanel(false);
    }, 5000);
  }

  public onHidden() {}
  public showLoadPanel(value) {
    this.loadingVisible = value;
  }
}
