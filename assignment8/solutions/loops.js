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
  var re = /[A-Z]|[a-z]/;
  var alternStr = "";

  for (var i = 0; i <= splitStr.length - 1; i++) {

  	if (re.test(splitStr[i])) {

      if (re.test(splitStr[i-1]) && splitStr[i-1] !== undefined) {

        if (splitStr[i-1] === splitStr[i-1].toUpperCase()) {
        
          alternStr += splitStr[i].toLowerCase();
        } else {

         alternStr += splitStr[i].toUpperCase();
        }
      } else {

        alternStr += splitStr[i].toLowerCase();
      }
  	} else {
      
      alternStr += splitStr[i];
    }
  };

  return alternStr;
}

module.exports.capitalizeVowels = function capitalizeVowels (str) {

  // implement me!

  return null;
}

module.exports.isPalindrome = function isPalindrome (str) {

  // implement me!

  return null;

}