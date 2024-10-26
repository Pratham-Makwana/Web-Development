
// event handler

function myFunction()  {
console.log('I Was Clicked');

}

const mouseOver = () => {
    console.log('Mouse Over');
    
}

function keyPressEvent(){
    console.log('key was  pressed');
}


function keyUpEvent(){
    console.log('key up was  pressed');
}

function keyDownEvent(){
    console.log('key down was  pressed');
}

// event listeners


const box3 = document.getElementById('box-3');
box3.addEventListener('click',() => {
    console.log('Click by event lisnteners 1');
    
});

// In bubbling the innermost element's event handlled first and then the outer.
// by default behaviour is bubblig it means: inner child or nested child handle the event
// In capturing: outermost element's event is handled first adn then the inner.
// top most parent take the event if there is eventlistener in it

// addEventListener(event,function,useCapture)
// by default value is false,which will use the bubbling propagation,when the value is set to true the evntuse the capturing propagation
const container = document.getElementById('container');
container.addEventListener('click',()=>{
    console.log('Click on Container');
},true);



// box3.addEventListener('click',()=> {
//     console.log('Click by event lisnteners 2');
    
// });

const box4 = document.getElementById('box-4');
box4.addEventListener('mouseover',(e)=> {
    console.log('event object',e.clientX,e.clientY);
})

const nameInput = document.getElementById('nameInput');
nameInput.addEventListener('keypress',(e) => {
    console.log('ket',e.key);
});