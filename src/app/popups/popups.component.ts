import { PopupDirective } from './../popup-directive';
import { Input,ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { PopupInterface } from './PopupInterface';
import { PopupHelper } from './popup-addhelper';



@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
export class PopupsComponent implements OnInit,PopupInterface {
  @Input() data: any;
  IsVisible:true;
  width:number;
  height:number;
  showTitle:boolean;
  title:string;
  dragEnabled:boolean;
  closeOnOutsideClick:boolean;
   popupVisible : boolean;

  constructor() { }

  ngOnInit() {
  }



  public  setPopupConfiguration(title){
    this.width=300;
    this.height=200;
    this.showTitle=true;
    this.title=title;
    this.dragEnabled=true;
    this.closeOnOutsideClick=true;
}


public showInfo() {
    this.setPopupConfiguration("hello");
    this.popupVisible=true;
}


}
