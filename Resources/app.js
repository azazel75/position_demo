var win = Ti.UI.createWindow({
    backgroundColor:'#fff',
    exitOnClose: true
});
function firstPage() {
    var pageview = Ti.UI.createView();
    var redview = Ti.UI.createView({
        top:20,
        left:20,
        width:10,
        height:10,
        backgroundColor:"red"
    });
    pageview.add(redview);
    var yellowview = Ti.UI.createView({
        bottom:100,
        right:100,
        width:10,
        height:10,
        backgroundColor:"yellow"
    });
    pageview.add(yellowview);
    var blueview = Ti.UI.createView({
        center: {x: 160, y: 240},
        width:50,
        height:50,
        backgroundColor:"blue"
    });
    pageview.add(blueview);
    var greenview = Ti.UI.createView({
        top:-20,
        width:10,
        height:10,
        backgroundColor:"green"
    });
    pageview.add(greenview);
    return pageview;
}
function   pageWithLayout(direction){
    // draw a view that fills the window and set its layout property
    var pageview = Ti.UI.createView({
        backgroundColor:'transparent',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        layout: direction,
    });
    // simple function for making colored boxes
    function makeView(color) {
        return Ti.UI.createView({
            top:40,
            left:20,
            width:20,
            height:20,
            backgroundColor:color
        });
    }
    pageview.add(makeView('red'));
    pageview.add(makeView('yellow'));
    pageview.add(makeView('blue'));
    pageview.add(makeView('green'));
    return pageview;
}
var grid = require('gridlines');
grid.drawgrid(20, win);
var scroll = Ti.UI.createScrollableView({
    views:[firstPage(), pageWithLayout('vertical'), pageWithLayout('horizontal')],
    showPagingControl:true
});
win.add(scroll);
win.open();
