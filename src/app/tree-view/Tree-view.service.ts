export class TreeViewService{

static TreeView:Array<object>=null;

static GetTreeDataFromService(){
  ///Logic For Fetching the Data From Tree View
  return this.TreeView=[
    {
        ID: "1",
        text: "Stores",
        expanded: true
    }, {
        ID: "1_1",
        ParentID: "1",
        text: "Super Mart of the West",
        expanded: true
    }, {
        ID: "1_1_1",
        ParentID: "1_1",
        text: "Video Players"
    }, {
        ID: "1_1_1_1",
        ParentID: "1_1_1",
        text: "HD Video Player",
        iconSrc: "images/products/1.png",
        price: 220
    }, {
        ID: "1_1_1_2",
        ParentID: "1_1_1",
        text: "SuperHD Video Player",
        iconSrc: "images/products/2.png",
        price: 270
    }, {
        ID: "1_1_2",
        categoryId: "1_1",
        text: "Televisions",
        expanded: true
    }, {
        ID: "1_1_2_1",
        ParentID: "1_1_2",
        text: "SuperLCD 42",
        iconSrc: "images/products/7.png",
        price: 1200
    }, {
        ID: "1_1_2_2",
        ParentID: "1_1_2",
        text: "SuperLED 42",
        iconSrc: "images/products/5.png",
        price: 1450
    }, {
        ID: "1_1_2_3",
        ParentID: "1_1_2",
        text: "SuperLED 50",
        iconSrc: "images/products/4.png",
        price: 1600
    }
]
    }
}