
import { Input,ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';




@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css'],
})
export class PopupsComponent implements OnInit{
  values:boolean;
  width:number;
  height:number;
  showTitle:boolean;
  title:string;
  dragEnabled:boolean;
  closeOnOutsideClick:boolean;
  popupVisible : boolean;

  //dx form 
  formData:{};
  items :any[];


  constructor() { 

  }

  public setPopupConfirguration( Width:number, Height:number, ShowTitle :boolean, Title : string,  DragEnabled : boolean, CloseOnOutsideClick:boolean){
    this.width=Width;
    this.height=Height;
    this.showTitle=ShowTitle;
    this.title=Title;
    this.dragEnabled=DragEnabled;
    this.closeOnOutsideClick=CloseOnOutsideClick;
  } 
  ngOnInit() {
    this.popupVisible=false;
  }


public setPopupFormData( PopupFormData:{},Items:any[]){
  this.formData=PopupFormData;
  this.items=Items;
}

public setPopUpVisible(value:boolean){
   this.popupVisible=true;
 }

}
