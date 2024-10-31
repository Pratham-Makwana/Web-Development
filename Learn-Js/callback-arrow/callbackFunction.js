const calculate = (a, b ,operation) => {
    return operation(a,b);
}


// method 1

const addition =calculate(3,4 , (num1, num2) => {
return num1 +  num2;

});

console.log(addition);


const subtraction = (a, b) => a - b;

// method 2
const subResult = calculate(10,8,subtraction);
console.log(subResult);


// method 3
function multipy(a,b){
    return a * b;
}

const multiResult = calculate(5,5,multipy);
console.log(multiResult);