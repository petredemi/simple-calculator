
const btns = Array.from(document.querySelectorAll('button'));
const display = document.querySelector('#display');
const operators = Array.from(document.querySelectorAll('.operator'));
const numbers = Array.from(document.querySelectorAll('.container > .number'));
const del = document.querySelector('#del');
const ac = document.querySelector('#AC');


function adding(a, b){
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
let x = '';
let op = false;

operators.forEach(operator => operator.addEventListener('click', (e) => {
    let y = ' ' + operator.textContent +' ';
    if (op == false) return;
    x = x + y;
    console.log(y);
    display.textContent = x ;
    op = false;
    console.log(x);

}));

numbers.forEach(number => number.addEventListener('click', (e) => {
    let y = number.textContent;
    op = true;
    x = x + y;
    console.log(y);
    display.textContent = x ;
    console.log(x);
}));

function cal(){
    z = document.getElementById('display').innerHTML;
    return z;
}
cal();
console.log(z);


btns.forEach(button => button.addEventListener('mousedown', (e) => {
    button.style.backgroundColor = 'red';
    button.style.borderStyle = 'inset';

}));

btns.forEach(button => button.addEventListener('mouseup', (e) => {
    // button.setAttribute('style', 'backgroundColor: red;')
     button.style.backgroundColor = '';
     button.style.borderStyle = '';
 }));
 del.addEventListener('click', (e) => {
 //   display.textContent = '';
    x = x.slice(0, -1);
    display.textContent = x;
   // x = '';
    console.log(x);

 });

 ac.addEventListener('click', (e) => {
    display.textContent = '';
    x = '';

    console.log(e);
 });

