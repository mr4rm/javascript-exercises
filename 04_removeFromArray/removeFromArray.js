const removeFromArray = function() {
	let list = arguments[0];
	for (let i = 0; i < arguments.length - 1; i++) {
		let remove = list.indexOf(arguments[i + 1]);
		if (list.includes(arguments[i + 1])) {
			list.splice(remove, 1);
		}
	}
	return list;
}

removeFromArray([1, 2, 3, 4], 3);
module.exports = removeFromArray;
