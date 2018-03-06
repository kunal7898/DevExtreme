import { Component, OnInit } from '@angular/core';
import { AngularDraggableModule } from 'angular2-draggable';
import { TreeViewService } from '../tree-view/Tree-view.service';
import {DevExtremeModule} from 'devextreme-angular';
import * as $ from 'jquery';




@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class DraggableComponent implements OnInit {
  dataSource: any[];
  menuVisible: boolean=false;
  toolbarItems: any[];
  width : number = 500;
  height :number = 500;

  Items :Array<object> = null;
  constructor() { 
    this.menuVisible = true;
    //  setTimeout(() => {
    //      this.Call();   
    // }, 5000);

   
        this.toolbarItems = [
            {
                location: 'after',
                widget: 'dxButton',
                options: {
                    icon: 'menu',
                    onClick: () => {
                        this.menuVisible = !this.menuVisible;
                    }
                }
            }, {
                location: 'center',
                template: 'title'
            }
        ];

        this.dataSource=[{
            id: '1',
            text: 'Fruits',
            expanded: true,
            items: [
                { id: '1_1', text: 'Apples', china: 37001601, usa: 4110050 , turkey: 2889000 },
                { id: '1_2', text: 'Oranges', china: 14400000, usa: 15700000, turkey: 1800000 }
            ]
        }, {
            id: '2',
            text: 'Vegetables',
            expanded: true,
            items: [
                { id: '2_1', text: 'Cucumbers', china: 54300000, usa: 886480, turkey: 1800000 },
                { id: '2_2', text: 'Tomatoes', china: 33911935, usa: 10965452, turkey: 5976732 }
            ]
        }];

         
        
    }

 

  ngOnInit() {
    this.Items= TreeViewService.GetTreeDataFromService();
}

public onItemClick(event){

}

public Call(){
    var get =10;
    var slideOutView = $("#slideOutView").dxSlideOutView({
        menuTemplate: 'treeView',
        contentTemplate: 'content'
    }).dxSlideOutView("instance");
 
    var toolbar = $("#toolbar").dxToolbar({
        // Toolbar is configured in the "Customize the View" article
    }).dxToolbar("instance");
 
    var chart = $("#chart").dxChart({
        // Chart is configured in the "Customize the View" article
    }).dxChart("instance");
 
    $("#treeView").dxTreeView({ width: 200,
        selectionMode: "single",
        selectByClick: true,
        onContentReady: function (e) {
           
        },
       
        onItemSelectionChanged: function (e) {
            if(e.node.children.length < 1) {
                slideOutView.hideMenu();
                var toolbarItems = toolbar.option("dataSource");
                toolbarItems[1].text = e.node.itemData.text;
                toolbar.option("dataSource", toolbarItems);
                chart.option("dataSource", [e.node.itemData]);
            }
        }
    });
}

public openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}


public closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


  public CreateTreeView(Value){
  
    let TreeValue = Array<object>();
    
    if(Value==null)
      return;
      
      //https://js.devexpress.com/Documentation/Guide/Themes/Icon_Library/
  
      Value.forEach(element => {
         TreeValue.push({
            Id:element["ID"],
            ValueName:element["text"],
            icon: element["ParentID"]==0?'folder':'doc',
            ParentID: element["ParentID"] ,
          })
  
      });
  
     return TreeValue;
    }
  
    selectItem(event){
      event.node.expanded=true;
      if(event.node.children.length>0){
        return;
      }
      else{
        window.alert(event.node.text);
      }
    }

}
