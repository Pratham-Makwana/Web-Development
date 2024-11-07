

function getCheese(){
    return new Promise((resolve, reject) => {
        // resolve("data");
        setTimeout(()=> {
            const cheess = '🧀';
           
            resolve(cheess);
        },2000);
    });
}

function makeDough(cheess){
    return new Promise((resolve, reject) => {
        // resolve("data");
        setTimeout(()=> {
            const dough = cheess+'🍩';
            resolve(dough);
        },2000);
    });
}


function bakePizza(dough){
    return new Promise((resolve, reject) => {
        // resolve("data");
        setTimeout(()=> {
            const pizza = dough+'🍕';
            resolve(pizza);
        },2000);
    });
}

// Async and Await
async function orderPizza(){
    const cheese = await getCheese();
    console.log("Here the Cheess",cheese);

    const dough = await makeDough(cheese);
    console.log("Here the dough",dough);
    
    const pizza = bakePizza(dough);
    console.log("Here your pizza",pizza);
}
orderPizza();
// console.log(orderPizza());   


// getCheess()
//     .then((cheess)=> {
//         console.log("Here the Cheess",cheess);
//         return makeDough(cheess);
// }).then((dough) => {
//     console.log("Here the dough",dough);
//     return bakePizza(dough);
// }).then((pizza) =>{
//     console.log("Here the pizza",pizza);
// }).catch((data) => {
//     console.log("Something Wrong", data);
    
// });


// console.log(getCheess());