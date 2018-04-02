import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TreeViewService } from '../tree-view/Tree-view.service';
import {DevExtremeModule,DxSlideOutViewComponent} from 'devextreme-angular';




@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class DraggableComponent implements OnInit {
  dataSource: any[];
  menuVisible: boolean=false;
  toolbarItems: any[];
  width : number = 500;
  height :number = 500;
  formData: any;
  items: any[];
  Items :Array<object> = null;
  constructor() { 
    this.menuVisible = true;
    //  setTimeout(() => {
    //      this.Call();   
    // }, 5000);

   
        this.toolbarItems = [
            {
                location: 'before',
                widget: 'dxButton',
                locateInMenu: 'never',
                options: {
                    icon: 'menu',
                    onClick: () => {
                        this.menuVisible = !this.menuVisible;
                    }
                }
            }, {
                location: 'center',
              
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
      
    this.Items= this.CreateTreeView(TreeViewService.GetTreeDataFromService());
}

public onItemClick(event){

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
        this.menuVisible = !this.menuVisible;
      }
    }

}
