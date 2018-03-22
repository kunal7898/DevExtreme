import { GridColumns } from './data-grid.columns';
import { Employe, DataGridService } from './../data-grid.service';
import { Component, Output,OnInit,Input,EventEmitter,ViewChild,ComponentFactoryResolver,ViewEncapsulation } from '@angular/core';
import {DevExtremeModule} from 'devextreme-angular';
import { DataSourceService } from '../data-source.service';
import { PopupsComponent } from '../popups/popups.component';
import { Window } from 'selenium-webdriver';
import { PopupHelper } from '../popups/popup-addhelper';







@Component({

  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
  providers: [DataGridService,DataSourceService],
  encapsulation :ViewEncapsulation.None,
  // host: {
  //   '(document:click)': 'LinkClickEvent($event)'
  // }

})
export class DataGridComponent implements OnInit  {
  employees: Employe[];
 
  @ViewChild(PopupsComponent) private popComponent :PopupsComponent;
  
  @Output() visible  = new EventEmitter();
  @Input() GridSetting; 
  ads: PopupHelper[];
  PopUpwidth:number;
  PopUpheight:number;
  showTitle:boolean;
  title:string;
  dragEnabled:boolean;
  closeOnOutsideClick:boolean;
  IsPopupVisible:any;
  allowColumnReordering=true;
  showBorders= true;
  showRowLines= true;
  width="100%";
  height="400";
  showColumnLines=true;
  loadingVisible:boolean=true;
  Message:string="Test";


 
  editing={
    mode: "row",
    allowUpdating: false,
    allowAdding:true,
    allowDeleting :true,
};
  columns=[];

  constructor(private Datagridservice:DataGridService,private _cfr: ComponentFactoryResolver) { 
    DataSourceService.loadDataSource();
    this.employees = Datagridservice.getEmployees();
    this.columns=GridColumns.getColumns();
    this.showLoadPanel(true);
    }
    
   
  ngOnInit() {
      
    }

    public cellTemplate(){

    }
    
    onRowClick(e){
      this.loadingVisible=true;
       this.popComponent.setPopupConfirguration(500,500,true,"Info",true,true);
       this.popComponent.setPopupFormData(e.data,true,null);
       this.popComponent.popupVisible=true;
    
   }

   public SetData(Data:any){
     this.employees= Data;
   }
   public SetColumn(ColumnData:any){
    this.columns= ColumnData;
  }

  public onCellPrepared(options){
    var fieldData = options.value,
    fieldHtml = "";
// if(fieldData && options.rowType=="data" && options.columnIndex==0 ) {
//   options.cellElement.innerHTML="<dx-button id='LinkClick' class='dx-link dx-link-edit' (onClick)='LinkClickEvent()'>"+options.cellElement.innerHTML+"</dx-button>"  
// }
  }


public LinkClickEvent(event){
window.alert(event);
}

public showLoadPanel(value) {
 
  this.loadingVisible = value;
}
public onShown() {

setTimeout(() => {
  this.showLoadPanel(false);
}, 5000);
  }
  
  public onHidden() {
  
  }
  
   
  }