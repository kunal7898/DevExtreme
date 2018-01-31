import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})
export class PopupsComponent implements OnInit {
  popupVisible : boolean;

  constructor() { }

  ngOnInit() {
  }
  showInfo(employee) {
    this.popupVisible = true;
}

}
