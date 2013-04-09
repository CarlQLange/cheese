var _ = require('underscore');

var format = require('dateformat');

module.exports = function () {
    this.text = "";

    this.update = _.throttle(function () {
	this.text = format(new Date(), "HH:MM 'on' dddd, mmmm d.");
    }, 15000);

    this.draw = function (TermUI, pos) {
	TermUI
	    .pos(pos.x, pos.y)
	    .fg(TermUI.C.w)
	    .out(this.text.toString())
    };
};
