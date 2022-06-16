const sumAll = function() {
	// rearrange array lowest to highest if not already so
	if (arguments[1] < arguments[0]) {
		let array = [arguments[1], arguments[0]];
		}
		else {
			let array = [arguments[0], arguments[1]];
		}	
	
	const diff = arguments[1] - arguments[0];
	let sum = arguments[0];

	for (let i = 0; i < diff; i++) { // may not go long enough or too long
	// fill in missing numbers
		array.splice(i + 1, 0, (arguments[0] + 1 + i)); 
	// add it up	
		sum += array[i] + 1;
	}

	return sum;
}
sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;
