import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {
  valueForEditableTextArea: string=null;
  eventValue: string="change";
  constructor() { 


  }
GetTextAreaData(){
  return this.valueForEditableTextArea;
}
  ngOnInit() {
  }

  onClick(event){
   window.alert(this.valueForEditableTextArea);
  }
}
