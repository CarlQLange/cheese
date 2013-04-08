module.exports = function () {
    this.text = "";

    this.update = function () {
	this.text = new Date();
    };

    this.draw = function (TermUI, pos) {
	TermUI
	    .pos(pos.x, pos.y)
	    .fg(TermUI.C.w)
	    .out(this.text.toString())
	    .end();
    };
};
