const arr = [5, 1, 3, 2, 6];

// Map
function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}
const output = arr.map(double);
const tripleOutput = arr.map(triple);
const binaryOutput = arr.map((x) => x.toString(2));

console.log(output);
console.log(tripleOutput);
console.log(binaryOutput);

// filter

function isOdd(x) {
  return x % 2;
}

function isEven(x) {
  return x % 2 === 0;
}
const filterOdd = arr.filter(isOdd);
const filterEven = arr.filter(isEven);

console.log(filterOdd);
console.log(filterEven);

// Reduce

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

console.log(findSum(arr));

const reduceOutput = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(reduceOutput);
