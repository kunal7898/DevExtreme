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
      {path:'Form',component:FormComponent}
    ])
  ],
  providers: [DataGridService,AppService,TabServices],
  bootstrap: [AppComponent],
})


export class AppModule { }
