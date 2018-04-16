import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import {DxToolbarModule} from 'devextreme-angular/ui/toolbar';

@Component({
  selector: 'app-jquery-slide-out',
  templateUrl: './jquery-slide-out.component.html',
  styleUrls: ['./jquery-slide-out.component.css']
})
export class JquerySlideOutComponent implements OnInit {
  products = [{
    key: "Televisions",
    items: [
    { text: "SuperLCD 42", price: "$1200", src: "images/products/7.png"  },
    { text: "SuperLED 42", price: "$1450", src: "images/products/5.png"  },
    { text: "SuperLED 50", price: "$1600", src: "images/products/4.png" },
    { text: "SuperLCD 55", price: "$1350", src: "images/products/6.png"  },
    { text: "SuperLCD 70", price: "$4000", src: "images/products/9.png"  }
    ]
        },
    {
      key: "Monitors",
      items: [
      { text: "DesktopLCD 19", price: "$160", src: "images/products/10.png"  },
      { text: "DesktopLCD 21", price: "$170", src: "images/products/12.png"  },
      { text: "DesktopLED 21", price: "$180", src: "images/products/13.png"  }
       ]
         },
       {
      key: "Projectors",
      items: [
      { text: "Projector Plus", price: "$550", src: "images/products/14.png" },
      { text: "Projector PlusHD", price: "$750", src: "images/products/15.png" }
     ]
    },
    {
     key: "Video Players",
     items: [
         { text: "HD Video Player", price: "$220", src: "images/products/1.png" },
         { text: "SuperHD Video Player", price: "$270", src: "images/products/2.png" }
          ]
       }
     ];

     
  constructor() { }

  ngOnInit() {
    
  }

  get(){
    $(function(){
      function showMenu() {
          slideOut.option("menuVisible", !slideOut.option("menuVisible"));
      }
      
      var slideOut = $("#slideout").dxSlideOut({ 
          dataSource: this.products,
          onItemClick: showMenu,
          menuVisible: true,
          swipeEnabled: true,
          menuGrouped: true,
          itemTemplate: function(itemData, itemIndex, itemElement) {
              $("<div/>")
                  .appendTo(itemElement)
                  .dxToolbar({
                    dataSource:[
                      
                    ]
                  });
      
              var $infoContainer = $("<div />").attr("id", "info");
              $infoContainer.append(
                  $("<img />").attr("src", itemData.src),
                  $("<h1 />").text(itemData.price)
              );
      
              var $fieldSetContainer = $("<div />").addClass("dx-fieldset");
              $fieldSetContainer.append(
                  $("<div />").addClass("dx-fieldset-header").text("Options"),
                  $("<div />").addClass("dx-field").append(
                      $("<div />").addClass("dx-field-label").text("Swipe to reveal the menu"),
                      $("<div />").addClass("dx-field-value switch")
                  )
              );
     
             // itemElement.append($infoContainer, $fieldSetContainer);
      
              $(".switch").dxSwitch({
                  value: slideOut ? slideOut.option("swipeEnabled") : true,
                  onValueChanged: function(e) {
                      slideOut.option("swipeEnabled", e.value);
                  }
              });
          },
          menuGroupTemplate: function(e) {
              return "<b>" + e.key + "</b>";
          }
      }).dxSlideOut("instance");
      
      
  });
  }

}
