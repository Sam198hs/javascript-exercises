const add = function(one, two) {
	let add = one + two;
  return add;
};

const subtract = function(one, two) {
	let sub = one - two;
  return sub;
};

const sum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((total, current) => total * current, 1);
};

const power = function(one, two) {
	let ans = Math.pow(one, two);
  return ans;
};

const factorial = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else if (n < 0) {
    return "Factorial is not defined for negative numbers";
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
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
