import { PopupDirective } from './../popup-directive';
import { Input,ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { PopupInterface } from './popup-interface';
import { PopupHelper } from './popup-addhelper';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
export class PopupsComponent implements OnInit ,PopupInterface {

  @Input() data: any;
  constructor() { }

 
  ngOnInit() {
  }

  
}
