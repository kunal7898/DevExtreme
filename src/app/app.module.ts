import { PopupDirective } from './popup-directive';
import { PopupViewResolver } from './popup-viewresolver';
import { PopupsComponent } from './popups/popups.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { DevExtremeModule } from 'devextreme-angular';
import { AppService } from './app.service';
import { DataGridService } from './data-grid.service';
import { GenralControlComponent } from './genral-control/genral-control.component';



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
  entryComponents: [PopupsComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
