const reverseString = function(word) {
	let rev = '';
	let count = 1;
	for (let i = word.length; i > 0; i--) {
 		rev += word.slice(-count, i );
		count++;
	}
	return rev;
};

reverseString('hello');

// Do not edit below this line
module.exports = reverseString;
