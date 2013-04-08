var TermUI = require('node-term-ui');

var TimeWidget = require('./widgets/time');

var widgets = [];
exports.run = function (opts) {
    TermUI.clear();
    
    widgets.push(
	new TimeWidget()
    );

    opts = opts || {};
    setInterval(refresh, opts.refreshRate || 1000);
}

function refresh () {
    for (var widget in widgets) {
	widgets[widget].update();
	widgets[widget].draw(TermUI, {x:0, y:0});
    }
}
