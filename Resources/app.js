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
        layout: direction
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
        width: Ti.UI.FILL,
        height:Ti.UI.FILL,
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
        width: '30%',
        borderRadius: 5,
        top: 20,
        bottom: 20,
        right: '3%',
        left: '3%'
    });
    var firstsecond = Ti.UI.createView({
        backgroundColor:'blue',
        width: '40%',
        borderRadius: 5,
        top: 20,
        bottom: 20,
        right: '3%',
        left: '3%'
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

function advancedPage2() {
    var pageview = Ti.UI.createView({
        backgroundColor:'transparent',
        top:0,
        left:0,
        width: Ti.UI.FILL,
        height:Ti.UI.FILL,
        layout: 'vertical'
    });
    function makeView(width, color, cback) {
        var outer = Ti.UI.createView({
            width: width
        });
        var inner = Ti.UI.createButton({
            top:20,
            left:20,
            bottom: 20,
            right: 20,
            backgroundColor: color,
            borderRadius: 10,
            title: color
        });
        if (cback) {
            inner.addEventListener('click', cback);
        }
        outer.add(inner);
        return outer;
    }

    function clickHandler(e) {
        var prev_angle = e.source.prev_angle || 0;
        prev_angle += 45;
        var anim = Ti.UI.createAnimation({
            transform: Ti.UI.create2DMatrix().rotate(prev_angle),
            duration: 500
        });

        e.source.animate(anim);
        e.source.prev_angle = prev_angle;
    }

    var firstrow = Ti.UI.createView({
        backgroundColor:'transparent',
        width: Ti.UI.FILL,
        height: '30%',
        layout: 'horizontal'
    });
    firstrow.add(makeView('30%', 'red', clickHandler));
    firstrow.add(makeView('70%', 'blue', clickHandler));

    var secondrow = Ti.UI.createView({
        backgroundColor:'transparent',
        width: Ti.UI.FILL,
        height: '70%',
        layout: 'vertical'
    });
    var secondfirst = Ti.UI.createView({
        backgroundColor:'transparent',
        width: Ti.UI.FILL,
        height: '50%',
        layout: 'horizontal'
    });
    secondfirst.add(makeView('50%', 'yellow', clickHandler));
    secondfirst.add(makeView('50%', 'green', clickHandler));
    var secondsecond = Ti.UI.createView({
        backgroundColor:'transparent',
        width: Ti.UI.FILL,
        height: '50%',
        layout: 'horizontal'
    });
    secondsecond.add(makeView('50%', 'black', clickHandler));
    secondsecond.add(makeView('50%', 'cyan', clickHandler));

    secondrow.add(secondfirst);
    secondrow.add(secondsecond);
    pageview.add(firstrow);
    pageview.add(secondrow);
    return pageview;
}

var grid = require('gridlines');
grid.drawgrid(20, win);
var pages = [advancedPage2(), advancedPage(),
             firstPage(), pageWithLayout('vertical'),
             pageWithLayout('horizontal')];
var scroll = Ti.UI.createScrollableView({
    views: pages,
    showPagingControl:true
});
win.add(scroll);
win.open();
