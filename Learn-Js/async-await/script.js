const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolve");
  }, 20000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolve");
  }, 40000);
});

// Using The Async & Await
async function handlePromise() {
  console.log("Hello World");

  const val1 = await p1;
  console.log("Namaste 1");
  console.log(val1);

  const val2 = await p2;
  console.log("Namaste 2");
  console.log(val2);
}

handlePromise();

// Using The Promise
// function usingPromise() {
//   p.then((res) => console.log(res));
// }

// usingPromise();

// async function getData() {
//   return "Namaste";
// }

// async function getData() {
//   return p;
// }
// // get the promise data
// const promiseData = getData();
// // It Print the promise object
// console.log(promiseData);

// // for actual data from the promise object
// promiseData.then((res) => console.log(res));
