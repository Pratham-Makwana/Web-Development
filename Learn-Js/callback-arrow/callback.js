// Callback Function in JavaScript
// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("X Function");
//   y();
// }

// x(function () {
//   console.log("Y");
// });

// Event Listneres

// document.getElementById("clickMe").addEventListener("click", function () {
//   console.log("Button is Clicked");
// });

function attachEventListner() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button click", ++count);
  });
}

attachEventListner();
