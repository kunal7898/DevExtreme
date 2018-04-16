import { Http } from "@angular/http";
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";
import { DynamicTabService } from "../dynamic-tab-form/DynamicTabService";

export class FormDataGridHelper {
  constructor(private http: Http) {}

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

  public getGridColumns(){
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
}

export class DataGridColumnHelper {
  public width: number = 150;
  public allowFiltering: boolean = true;
  public allowSorting: boolean = true;
  public dataField: string;
  public caption: string;
  public code: string;
  public Name: string;
  public AttributeType: string;
  public PicklistId: number;
  public IsMandatory: boolean;
  public cssClass: string;
  public colCount: string;
  public length: number;
  public ControlType: string;
}
