const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function([...nums]) {
  sumAll = 0;
	if (nums === undefined || nums.length === 0) {
    return 0;
  }else{
    for (let i = 0; i < nums.length; i++) {
    sumAll += nums[i];
  }
};
return sumAll;
}

const multiply = function([...nums]) {
  multAll = 1;
  if (nums === undefined || nums.length === 0) {
    return 1;
  }else{
    for (let i = 0; i < nums.length; i++) {
    multAll *= nums[i];
  }
};
return multAll;
}

const power = function(num1, num2) {
  return Math.pow(num1, num2);	
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }else{
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
