import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { DevExtremeModule } from 'devextreme-angular';
import { AppService } from './app.service';
import { DataGridService } from './data-grid.service';
import { GenralControlComponent } from './genral-control/genral-control.component';
import { PopupsComponent } from './popups/popups.component';
import { TabComponent } from './tab/tab.component';
import {  TabServices } from './tab.service';
import { TextAreaComponent } from './text-area/text-area.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { DraggableComponent } from './draggable/draggable.component';
import { FormComponent } from './form/form.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { SlideOutComponent } from './slide-out/slide-out.component';
import { Customer, CustomerService } from './Services/customer.service';
import slide_out from 'devextreme/ui/slide_out';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomDataSourceComponent } from './custom-data-source/custom-data-source.component';
import { CustomService } from './custom-service/customservice.service';
import { CelltemplateComponent } from './celltemplate/celltemplate.component';
import { TabedDataGridComponent } from './tabed-data-grid/tabed-data-grid.component';
import { CustomDropDownComponent } from './custom-drop-down/custom-drop-down.component';




@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    GenralControlComponent,
    PopupsComponent,
    TabComponent,
    TextAreaComponent,
    TreeViewComponent,
    DraggableComponent,
    FormComponent,
    CustomerComponent,
    CustomerAddressComponent,
    SlideOutComponent,
    CustomerFormComponent,
    CustomDataSourceComponent,
    CelltemplateComponent,
    TabedDataGridComponent,
    CustomDropDownComponent,

  ],
  imports: [
    BrowserModule,

    DevExtremeModule,
     RouterModule.forRoot([
      { path:'DataGrid', component : DataGridComponent},
      {path:'GenralControl',component:GenralControlComponent},
      {path:'Popup',component:PopupsComponent},
      {path:'Tabs',component:TabComponent},
      {path:'TreeView',component:TreeViewComponent},
      {path:'SlideOut',component:DraggableComponent},
      {path:'Form',component:FormComponent},
      {path:'CustomDataSource',component:CustomDataSourceComponent},
      {path:'CellTemplate',component:CelltemplateComponent},
      {path:'TabedDatagrid',component:TabedDataGridComponent},
      {path:'CustomDropDown',component:CustomDataSourceComponent},
      {path:'CustomerForm',component:CustomerComponent,
      children: [
        {
          path: 'view/:Customer-Id',
          component: CustomerFormComponent
        }],},
      {path:'Slide',component:SlideOutComponent}
    ])
  ],
  providers: [DataGridService,AppService,TabServices,CustomerService,CustomService],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})


export class AppModule { }
