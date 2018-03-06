$(function() {
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
 
    $("#treeView").dxTreeView({
        width: 200,
        selectionMode: "single",
        selectByClick: true,
        onContentReady: function (e) {
            e.component.selectItem("1_1");
        },
        dataSource: [{
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
        }],
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
});