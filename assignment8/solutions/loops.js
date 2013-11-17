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

      var prevLetterLoc = 1; 
      
      while (!re.test(splitStr[i-prevLetterLoc]) && splitStr[i-prevLetterLoc] !== undefined) {
      
      prevLetterLoc += 1;
      
      };

      if (alternStr.charAt(i-prevLetterLoc) !== undefined) {

        if (alternStr.charAt(i-prevLetterLoc).toUpperCase() === alternStr.charAt(i-prevLetterLoc)) {

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
  }

  return alternStr;
}

module.exports.capitalizeVowels = function capitalizeVowels (str) {

  var splitStr = str.split("");
  var re = /[A]|[E]|[I]|[O]|[U]|[Y]|[a]|[e]|[i]|[o]|[u]|[y]/;
  var alternStr = "";

  for (var i = 0; i <= splitStr.length - 1; i++) {
    
    if (re.test(splitStr[i])) {
      alternStr += splitStr[i].toUpperCase();
    } else {
      alternStr += splitStr[i];
    }
  }
  
  return alternStr;
}


module.exports.isPalindrome = function isPalindrome (str) {

  // implement me!

  return null;

}
