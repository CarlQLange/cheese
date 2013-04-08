var exec = require('child_process').exec;
var _ = require('underscore');

module.exports = function () {
    this.text = "";

    this.update = _.throttle(function () {
	exec('fit "current song in iTunes"', function (err, stdout, stderr) {
	    this.text = stdout.toString();
	}.bind(this))
    }, 15000);

    this.draw = function (TermUI, pos) {
	TermUI
	    .pos(pos.x, pos.y)
	    .fg(TermUI.C.g)
	    .out(this.text)
    }
}
