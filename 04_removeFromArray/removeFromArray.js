const removeFromArray = function() {
// read in list from function call
	let list = arguments[0];
	for (let i = 0; i < arguments.length - 1; i++) {
// find the index number of the wanted item and assign to a variable
		let remove = list.indexOf(arguments[i + 1]);
// check that the wanted item exists in the array
		if (list.includes(arguments[i + 1])) {
// remove the wanted item
			list.splice(remove, 1);
		}
	}
	return list;
}

removeFromArray([1, 2, 3, 4], 3);
module.exports = removeFromArray;
