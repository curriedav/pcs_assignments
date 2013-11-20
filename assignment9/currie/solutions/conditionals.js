function isEven (num) {

  return num % 2 === 0;
}

function isBeep (str) {

  return str === "beep";
}

function isTwo (num) {

	return num === 2;
}

module.exports.isEven = isEven;
module.exports.isBeep = isBeep;
module.exports.isTwo = isTwo;