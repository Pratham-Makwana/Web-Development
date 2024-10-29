

const box1 = document.getElementById('box-1');
// box1.innerHTML = "<h1>Hello World</h1>"

box1.style.backgroundColor = 'red'

box1.classList.add('round-border');

const boxes = document.getElementsByClassName('box');

for(let i = 0; i < boxes.length; i++){
    boxes[i].classList.add('round-border');
}

box1.classList.remove('round-border');

const newPara = document.createElement('p');
newPara.innerText = "This is brand new ";
newPara.classList.add('box');

const container = document.getElementById('container');
container.appendChild(newPara);














// const myBody = document.body;
// console.log(myBody);


// const box2 = document.getElementById('box-2');

// console.log(box2);


// const divs = document.getElementsByTagName('p');

// console.log(divs);

// const boxes = document.getElementsByClassName('random');
// console.log(boxes);

// const random = document.querySelector('.container .random');
// console.log(random);







