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
<<<<<<< HEAD
    ])
  ],
  providers: [DataGridService,AppService],
  bootstrap: [AppComponent],
  entryComponents:[PopupsComponent]
=======
      
    ])
  ],
  providers: [DataGridService,AppService],
  entryComponents: [PopupsComponent ],
  bootstrap: [AppComponent]
>>>>>>> d4439c689d640534b443b2b992f38844d9605284
})
export class AppModule { }
