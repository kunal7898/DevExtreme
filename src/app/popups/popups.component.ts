
import { Input,ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';




@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css'],
})
export class PopupsComponent {
  _ref:any;  
  width:number;
  height:number;
  showTitle:boolean;
  title:string;
  dragEnabled:boolean;
  closeOnOutsideClick:boolean;
  popupVisible : boolean;
  valueemitted:string ='hello';
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



public setPopupFormData( PopupFormData:{},Items:any[]){
  this.formData=PopupFormData;
  this.items=Items;
}

setEvent(Value:boolean):void{
  this.popupVisible=Value;
  console.log("hello");
  
}

public setPopUpVisible(value:boolean){
   this.popupVisible=true;
 }

}
