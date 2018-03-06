import { Component, OnInit } from '@angular/core';
import { TreeViewService } from './Tree-view.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  width : number = 500;
  height :number = 500;
  Items :Array<object> = null;
  constructor() { }

  ngOnInit() {
   this.Items= this.CreateTreeView(TreeViewService.GetTreeDataFromService());
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
