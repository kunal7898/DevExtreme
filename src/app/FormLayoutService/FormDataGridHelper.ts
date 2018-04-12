import { Http } from "@angular/http";
import CustomStore from "devextreme/data/custom_store";
import DataSource from "devextreme/data/data_source";

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
}

export class DataGridColumnHelper {
  public width: number = 150;
  public allowFiltering: boolean = true;
  public allowSorting: boolean = true;
  public dataField: string;
  public caption: string;
}
