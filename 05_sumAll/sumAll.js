const sumAll = function(num1, num2) {
	if (num1 < 0 || num2 < 0) {
		return ('ERROR');
	}	
	if (typeof num1 != 'number' || typeof num2 != 'number') {
		return ('ERROR');
	}
	let array = [num1, num2];
	array.sort();
	const diff = array[1] - array[0];
	let sum = array[0];

	for (let i = 0; i < diff; i++) { 
	// fill in missing numbers
		array.splice(i + 1, 0, (array[0] + 1 + i)); 
	// add it up	
		sum += array[i] + 1;
	}

	return sum;
}
sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;
