const sumAll = function (startNum, endNum) {
  var sum = 0;
  if(startNum > endNum) {
    x = startNum;
    startNum = endNum;
    endNum = x;
  }
  if (startNum < 0) {
    return 'ERROR';
  }
  if (endNum < 0) {
    return 'ERROR';
  }
  if (typeof endNum !== 'number' || typeof startNum!== 'number') {
    return 'ERROR';
  }
  for (; startNum <= endNum; startNum++) {
    sum += startNum;
  }
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
