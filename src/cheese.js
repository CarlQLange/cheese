var TermUI = require('node-term-ui');

var TimeWidget = require('./widgets/time');
var NowPlayingWidget = require('./widgets/nowPlaying');
var WeatherWidget = require('./widgets/weather');

var widgets = [
    new TimeWidget(),
    new NowPlayingWidget(),
    new WeatherWidget()
];

exports.run = function (opts) {
    opts = opts || {};

    //beware! most widgets have their own refresh rate and throttle
    // calls to update!
    setInterval(refresh, opts.refreshRate || 1000);
}

function refresh () {
    TermUI.clear();
    for (var widget in widgets) {
	widgets[widget].update();
	widgets[widget].draw(TermUI, {x:0, y:parseInt(widget)+1});
    }
}
