// circle.js

module.exports.c = function(r) {
	return Number(Math.PI * 2 * r).toFixed(2);
}

module.exports.s = function(r) {
	return Number(Math.PI * r * r).toFixed(2);
}

function s(r) {
	return Number(Math.PI * r * r).toFixed(2);
}