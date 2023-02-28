const leapYears = function (year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
};

// Leap years are divisible by 4, but not by 100 unless it is divisible by 400.

// Do not edit below this line
module.exports = leapYears;
