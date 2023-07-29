
const btns = Array.from(document.querySelectorAll('button'));
const display = document.querySelector('#display');
const operators = Array.from(document.querySelectorAll('.operator'));
const numbers = Array.from(document.querySelectorAll('.container > .number'));
const plus = document.querySelector('#plus');
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');
const del = document.querySelector('#del');
const ac = document.querySelector('#AC');

//let c = 0;
//let d = 0;
function adding(){
   
    return a + b;
}
function substraction(a, b){
    return a - b; 
}
function multiplication( a, b){
    return a * b;
}
function dividing( a, b){
    return a - b;
}
let op = false;
let point = false;
let arg = 0;

let x = '';
let a = 0;
let b = 0;
const str = [a, b];



numbers.forEach(number => number.addEventListener('click', (e) => {
    let y = number.textContent;
    op = true;
    x = x + y;
    display.textContent = x ;
    if ( arg == 0){
    a = + (a + number.textContent);
    } else if (arg == 1) {
        b = +(b + number.textContent);
    }
}));

operators.forEach(operator => operator.addEventListener('click', (e) => {
    let y = operator.textContent;
    if (op == false) return;
    x = x + y;
    console.log(y);
    display.textContent = x ;
    op = false;
    point = false;
    console.log(x);
    if(arg == 0){
    let z = Number.parseFloat(a);
    str[0] = z
    arg = 1;
    console.log(str[0]);
    } else if ( arg == 1) {
        let w = Number.parseFloat(b);
        str[1] = w;
        arg = 0;
    }
    console.log(str[0]);
    console.log(str[1]);


}));

btns.forEach(button => button.addEventListener('mousedown', (e) => {
    button.style.backgroundColor = 'red';
    button.style.borderStyle = 'inset';
}));

btns.forEach(button => button.addEventListener('mouseup', (e) => {
     button.style.backgroundColor = '';
     button.style.borderStyle = '';
 }));

 dot.addEventListener('click', (e) => {
    let y = dot.textContent;
    if ( point == true) {return};
    x = x + y;
    display.textContent = x;
    point = true;
    if ( arg == 0) {
    a = a + dot.textContent;
    } else if ( arg == 1){
        b = b + dot.textContent;
    }

 });

 del.addEventListener('click', (e) => {

    let y = x;
    x = x.slice(0, -1);
    z = y.slice(-1);
    display.textContent = x;
    console.log(x);

    if( z == "." ) {
        point = false;
    }
 });

 ac.addEventListener('click', (e) => {
    display.textContent = '';
    x = '';
    point = false;
 });

equal.addEventListener('click', () => {

   console.log(substraction(a, b));

})
