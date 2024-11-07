// const tickets = new Promise((resolve,reject)=> {
//     const isBoarding = true;
//     if(isBoarding){
//         resolve("you are not in flight");
//     }else{
//         reject("your flight is cancle");
//     }
// });

// tickets.then((data) => {
//     console.log("wohoo",data);
// }).catch((data)=> {
//     console.log("ohh noo",data);
// }).finally(()=> {
//     console.log("I will excute always");

// });

const cart = ["shoes", "pants", "kurta"];

// Call Back Hell And Inversion of Control
createOrder(cart, function (orderId) {
  processToPayment(orderId, function (paymentInfo) {
    showSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

// Using The Promise
createOrder(cart)
  .then((orderId) => processToPayment(orderId))
  .then(function (paymentInfo) {
    return showSummary(paymentInfo);
  })
  .then(function () {
    return updateWalletBalance();
  });
