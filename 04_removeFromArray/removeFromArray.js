const removeFromArray = function (arr, ...remove) {
  const alteredArr = arr.filter((item) => !remove.includes(item));
  return alteredArr;
};
// Do not edit below this line
module.exports = removeFromArray;
