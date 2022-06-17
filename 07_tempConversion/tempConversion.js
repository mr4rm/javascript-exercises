const ftoc = function(num) {
	const out = ((num - 32) * (5 / 9)).toFixed(1);
	return (+out);
};

const ctof = function(num) {
	const out = ((num * (9 / 5) + 32)).toFixed(1);
	return (+out);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
