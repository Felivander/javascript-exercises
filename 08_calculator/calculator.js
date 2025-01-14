const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	arr.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(arr) {
  let multplication = 1;
  arr.forEach(element => {
    multplication *= element;
  })
  return multplication;
};

const power = function(num, exponent) {
	let power = 1;
  for (let i = 0; i < exponent; i++) {
    power = power * num;
  }
  return power;
};

const factorial = function(num) {
  let factorial = 1;
	for (let i = num; i > 0 ; i--) {
    factorial *= i;
  }
  return factorial;
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
