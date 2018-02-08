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
import { PopupViewResolver } from './PopupViewResolver';
import { PopupDirective } from './popup-directive';



@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    GenralControlComponent,
    PopupsComponent,
    PopupViewResolver,
    PopupDirective,
  ],
  imports: [
    BrowserModule,
    DevExtremeModule,
     RouterModule.forRoot([
      { path:'DataGrid', component : DataGridComponent},
      {path:'GenralControl',component:GenralControlComponent},
      {path:'Popup',component:PopupsComponent}
    ])
  ],
  providers: [DataGridService,AppService],
  bootstrap: [AppComponent],
})
export class AppModule { }
