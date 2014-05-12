var win = Ti.UI.createWindow({
    backgroundColor:'#fff',
    exitOnClose: true
});
function firstPage() {
    var pageview = Ti.UI.createView();
    var redview = Ti.UI.createView({
        top:20,
        left:20,
        width: Ti.UI.FILL,
        height:Ti.UI.FILL,
        backgroundColor:"red",
        zIndex: 1
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
            height: Ti.UI.FILL,
            backgroundColor:color
        });
    }
    pageview.add(makeView('red'));
    pageview.add(makeView('yellow'));
    pageview.add(makeView('blue'));
    pageview.add(makeView('green'));
    return pageview;
}
function advancedPage() {
    var pageview = Ti.UI.createView({
        backgroundColor:'transparent',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        layout: 'vertical'
    });
    var firstrow = Ti.UI.createView({
        backgroundColor:'transparent',
        width: Ti.UI.FILL,
        height: '30%',
        layout: 'horizontal'
    });
    var firstfirst = Ti.UI.createView({
        backgroundColor:'red',
        width: '40%',
        borderRadius: 5,
    });
    var firstsecond = Ti.UI.createView({
        backgroundColor:'blue',
        width: '60%',
        borderRadius: 5,
    });
    firstrow.add(firstfirst);
    firstrow.add(firstsecond);
    var secondrow = Ti.UI.createView({
        backgroundColor:'transparent',
        width: Ti.UI.FILL,
        height: '70%'
    });
    var secondfirst = Ti.UI.createView({
        backgroundColor: 'green',
        top: 20,
        right: 20,
        left: 20,
        bottom: 20,
        borderRadius: 5
    });
    secondrow.add(secondfirst);
    pageview.add(firstrow);
    pageview.add(secondrow);
    return pageview;
}
var grid = require('gridlines');
grid.drawgrid(20, win);
var pages = [advancedPage(),
             firstPage(), pageWithLayout('vertical'),
             pageWithLayout('horizontal')];
var scroll = Ti.UI.createScrollableView({
    views: pages,
    showPagingControl:true
});
win.add(scroll);
win.open();
