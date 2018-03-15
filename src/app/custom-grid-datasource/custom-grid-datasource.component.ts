// import { Component, OnInit, Inject } from '@angular/core';
// import { Http, HttpModule } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
// import CustomStore from 'devextreme/data/custom_store';
// import { CustomService } from '../custom-service/customservice.service';

// @Component({
//     selector: 'custom-data-source',
//     templateUrl: './custom-data-source.component.html',
//     styleUrls: ['./custom-data-source.component.css'],
//     providers: [CustomService]
// })
// export class CustomDataSourceComponent implements OnInit {
//     dataSource: any = {};
//     columns: any = {};

//     constructor( @Inject(Http) http: Http, private customService: custom) {
//         this.dataSource.store = new CustomStore({
//             load: function (loadOptions: any) {
//                 var params = '?';

//                 params += 'skip=' + loadOptions.skip || 0;
//                 params += '&take=' + loadOptions.take || 12;

//                 if (loadOptions.sort) {
//                     params += '&orderby=' + loadOptions.sort[0].selector;
//                     if (loadOptions.sort[0].desc) {
//                         params += ' desc';
//                     }
//                 }
//                 return http.get('https://js.devexpress.com/Demos/WidgetsGallery/data/orderItems' + params)
//                     .toPromise()
//                     .then(response => {
//                         var json = response.json();

//                         return {
//                             data: json.items,
//                             totalCount: json.totalCount
//                         }
//                     })
//                     .catch(error => { throw 'Data Loading Error' });
//             }
//         });
//     }

//     ngOnInit() {
//         this.columns = this.customService.getColumns();
//     }

//     deleteRow() {
//         alert('Test');
//     }

//     onCellPrepared(e) {
//         if(e.rowType === "data")
//         {
//             console.log(e);
//         }
//     }

// }
