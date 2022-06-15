const removeFromArray = function() {
	list = [1, 2, 3, 4];
	for (let i = 0; i < arguments.length; i++) {
		list.splice(arguments[i], 1);	
	}
	return list;	
};
removeFromArray(2);
// Do not edit below this line
module.exports = removeFromArray;
