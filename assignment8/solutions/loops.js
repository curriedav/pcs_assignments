module.exports.factorial = function factorial (num) {

  if (num < 0 || num !== Math.floor(num)) {

  	return undefined;

  } else if (num === 0) {

  	return 1;

  } else {
  	
  	var result = 1;

  	for (; num > 1; num --) {
  		result *= num;
  	}

  	return result;

  }

}

module.exports.capitalizeEveryOther = function capitalizeEveryOther (str) {

  var splitStr = str.split("");
  var capStr = "";

  for (var i = 0; i <= splitStr.length - 1; i++) {
  	
  	if (splitStr[i] = /*IS A LETTER*/) {

  	} else {

  	}
  };

  return null;
}

module.exports.capitalizeVowels = function capitalizeVowels (str) {

  // implement me!

  return null;
}

module.exports.isPalindrome = function isPalindrome (str) {

  // implement me!

  return null;

}