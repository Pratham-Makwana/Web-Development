const radius = [3, 1, 2, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumfrence = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

// calculate is high-order function and logic is callback function
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }

  return output;
};

console.log(calculate(radius, area));

console.log(calculate(radius, circumfrence));
console.log(calculate(radius, diameter));

// -----------------------------------------------------------------
// using the map
console.log(radius.map(area));

// this is the way we make our code as the map function
Array.prototype.cal = function (logic) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radius.cal(circumfrence));

// ---------------------------------------------------------
// Normal Way
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }

  return output;
};

console.log(calculateArea(radius));
