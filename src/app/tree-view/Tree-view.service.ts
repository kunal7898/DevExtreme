export class TreeViewService{

static TreeView:Array<object>=null;

static GetTreeDataFromService(){
  ///Logic For Fetching the Data From Tree View
  return this.TreeView=[{
    ID:1,
    text:"Value 1",
    ParentID:0
},
{
    ID:2,
    text:"Value 1.1",
    ParentID:1
},
{
    ID:3,
    text:"Value 1.2",
    ParentID:1
},
{
    ID:4,
    text:"Value 2",
    ParentID:0
},
{
    ID:5,
    text:"Value 2.1",
    ParentID:4
}]
    }
}