var http = require('http');
var _ = require('underscore');

module.exports = function () {
    this.text = "";
    
    this.update = _.throttle(function () {
	var data = "";
	http.get("http://weather.yahooapis.com/forecastrss?w=559989&u=c", function (res) {
	    res.on('data', function (chunk) {
		data += chunk.toString();
	    });
	    res.on('end', function () {
		//I once read a thing that said it was basically illegal
		// to do this. If only it didn't work so well
		var city = /city=\"([^\"]*)/.exec(data)[1];
		var temp = /temp=\"([^\"]*)/.exec(data)[1];
		var cond = /text=\"([^\"]*)/.exec(data)[1];
		this.text = city + ": " + cond + ", " + temp + "°C";
	    }.bind(this));
	}.bind(this))
    }, 60000*60);

    this.draw = function (TermUI, pos) {
	TermUI
	    .pos(pos.x, pos.y)
	    .fg(TermUI.C.y)
	    .out(this.text.toString())
    };
}
