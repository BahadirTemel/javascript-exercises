const repeatString = function (word, times) {
  var rString = "";
  if (times < 0) {
    return "ERROR";
  } else {
    for (let string = 0; string < times; string++) {
      var rString = rString + word;
    }
    return rString;
  }
};

// Do not edit below this line
module.exports = repeatString;
