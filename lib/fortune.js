var fortuneCookies = [
	" Conquer your fears or they will conquer you!",
	"Fear is the mind killer!",
	"Do not fear what you do not know!",
	"Whenever possible keep it simple!"];

exports.getFortune = function() {
	var idx = Math.floor(Math.random() * fortuneCookies.length);
	return fortuneCookies[idx];
}
