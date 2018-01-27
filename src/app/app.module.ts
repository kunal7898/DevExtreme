import { DataGridService } from './data-grid.service';
import { DevExtremeModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { PopupsComponent } from './popups/popups.component';


@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    PopupsComponent
  ],
  imports: [
    BrowserModule,
    DevExtremeModule,
    RouterModule.forRoot([
      {
        path:'DataGrid',
        component : DataGridComponent,
     }
    ])
  ],
  providers: [DataGridService],
  bootstrap: [AppComponent]
})
export class AppModule { }
