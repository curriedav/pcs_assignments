module.exports.insertAt = function(arr, index, item) {

// This function doesn't need to return anything, but rather modify
// the passed array in place.

	if (index < arr.length - 1) { 
		arr.splice(index, 0, item);
	} else {
		arr[index] = item;
	}
	
	
}

module.exports.alphabetSorter = function(a, b) {
  // This is the comparator function that will be passed
  // into array.prototype.sort(). It should return a negative number
  // if a comes before b alphabetically, a positive number if b comes
  // before a and 0 if there's a tie


}

module.exports.itsInThere = function(arr, item) {
	var existence = false;

	if (typeof item === 'object') {
		for (var i = arr.length - 1; i >= 0; i--) {
			if (arr[i].__proto__ == item.__proto__) {
				existence = true;
			}
		};
	} else {
		for (var i = arr.length - 1; i >= 0; i--) {
			if (arr[i] === item) {
				existence = true;
			}
		};
	}	

	return existence;
  
}