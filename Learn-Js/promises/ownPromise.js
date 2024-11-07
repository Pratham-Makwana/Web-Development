const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart);

// promise.then(function () {
//   //   processToPayment(orderId);
// });
promise
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return processToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// Producer

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // orderID
    // createOrder
    // validate
    if (!validateCard(cart)) {
      const err = new Error("card is not valid");
      reject(err);
    }

    //logic for createOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 5000);
    }
  });

  return pr;
}

function processToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}

function validateCard(card) {
  return true;
}
