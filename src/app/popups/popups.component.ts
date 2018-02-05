import { PopupDirective } from './../popup-directive';
import { Input,ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
<<<<<<< HEAD
import { PopupInterface } from './PopupInterface';
import { PopupHelper } from './popup-addhelper';


=======
import { PopupInterface } from './popup-interface';
import { PopupHelper } from './popup-addhelper';
>>>>>>> d4439c689d640534b443b2b992f38844d9605284

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
<<<<<<< HEAD
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
=======
export class PopupsComponent implements OnInit ,PopupInterface {
>>>>>>> d4439c689d640534b443b2b992f38844d9605284

  @Input() data: any;
  constructor() { }

 
  ngOnInit() {
  }

<<<<<<< HEAD


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


=======
  
>>>>>>> d4439c689d640534b443b2b992f38844d9605284
}
