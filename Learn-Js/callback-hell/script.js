

// console.log("hello");
// console.log("world");
// setTimeout(() => {
//     console.log("this will excute");
    
// },3000 );
// console.log("three");

function getChess(callback){
    setTimeout(() => {
        const cheese= '🧀';
        console.log("here is chess",cheese);
        callback(cheese);
    }, 2000);
}


function makeDough(cheese,callback) {

    setTimeout(()=> {
        const dough = cheese +'🍩';
        console.log("here is the dough",dough);
        callback(dough);
    },2000);

}

function makePizza(dough,callback) {

    setTimeout(()=> {
        const pizza = dough +'🍕';
        console.log("here is the pizza",pizza);
        callback(pizza);
    },2000);

}

getChess((cheese)=>{
// console.log("got the ",cheese);
    makeDough(cheese , (dough)=> {
        // console.log("get my dough",dough);
        makePizza(dough , (pizza) => {
            console.log("got my pizza",pizza);
            
        });
    });

});


