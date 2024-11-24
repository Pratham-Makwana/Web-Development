const users = [
  { firstname: "akshay", lastname: "saini", age: 26 },
  { firstname: "donald", lastname: "trup", age: 75 },
  { firstname: "elon", lastname: "musk", age: 50 },
  { firstname: "rajesh", lastname: "kumar", age: 26 },
];

// list of full name
//  ["akshay saini", "donald trup", "elon musk"]

const output = users.map((x) => x.firstname + " " + x.lastname);
console.log(output);

// number of person related to age
// {26:2, 75:1, 50:1}

const reduceOutput = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});

console.log(reduceOutput);

// first name of the person whose age is less than 30

const filterOutput = users.filter((x) => x.age < 30).map((x) => x.firstname);

console.log(filterOutput);
