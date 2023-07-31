
const btns = Array.from(document.querySelectorAll('button'));
const display = document.querySelector('#display');
const operators = Array.from(document.querySelectorAll('.operator'));
const numbers = Array.from(document.querySelectorAll('.container > .number'));
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');
const del = document.querySelector('#del');
const ac = document.querySelector('#AC');
const finalsesult = document.querySelector('#finalresult');

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
    return a / b;
}
function percentage(a, b){
    return  a * b / 100;
}
let op = false; //operators buttons
let point = false; // dot button
let arg = 0; // switch between function arguments a and b;
let equalButton = false;

let a = 0;
let b = 0;
const str = [a, b]; //function arguments
let opp = ''; //operator type +, - , *, /, %



numbers.forEach(number => number.addEventListener('click', (e) => {
    if (equalButton == true) { return;}
    op = true;
    if ( arg == 0){
    a = + (a + number.textContent);
    display.textContent = a.toString();
    } else if (arg == 1) {
        b = +(b + number.textContent);
        display.textContent = a.toString() + opp + b.toString();
    }
}));

operators.forEach(operator => operator.addEventListener('click', (e) => {
    equalButton = false;
    opp = operator.textContent;
    if (op == false) return;
    op = false;
    point = false;
    if(arg == 0){
    display.textContent = a.toString() + opp ;
    let z = Number.parseFloat(a);
    str[0] = z
    arg = 1;
    console.log(str[0]);
    } 
    console.log(str[0]);


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
    if ( point == true) {return};
    if ( arg == 0) {
    a = a + dot.textContent;
    display.textContent = a.toString();
    point = true;
    } else if ( arg == 1){
        b = b + dot.textContent;
        display.textContent = b.toString();
        point = true;
    }

 });

 del.addEventListener('click', (e) => {
    let q = display.textContent;

   if ( arg == 0) {
        if (equalButton == true){ return;}
        console.log(typeof a);
        let x;
        let y = a.toString();
        let z = y.slice(-1);
        x = y.slice(0, -1);
        a = Number(x);
        console.log(x);
        console.log(z);
        console.log(q);
        if( a == 0){
            display.textContent = '';
        }
        if ( z == '.'){
        point = false;
        }

    } else if ( arg == 1){
        let x;
        let y = b.toString();
        let z = y.slice(-1);
        x = y.slice(0, -1);
        b = Number(x);
        if ( z == '.'){
        point = false;
        }
    }
    display.textContent = q.slice(0, -1);
    equalButton = false;

    console.log(typeof q);
    console.log(q);
 });

 ac.addEventListener('click', (e) => {
    display.textContent = '';
    finalsesult.textContent = 0;

    a = 0;
    b = 0;
    point = false;
    equalButton = false;
 });

equal.addEventListener('click', () => {
    if ( arg == 1) {
        let w = Number.parseFloat(b);
        str[1] = w;
        arg = 0;
        equalButton = true;
        console.log(str[1]);
        display.textContent = display.textContent.concat(equal.textContent);

    
        if ( opp == '+'){ 
            document.getElementById('finalresult').textContent = adding(a, b);
            a = +finalsesult.textContent;
            b = 0;
        }
        else if ( opp == '-') {
            document.getElementById('finalresult').textContent = substraction(a, b)
            a = +finalsesult.textContent;
            b = 0;
        }
        else if ( opp == 'x') { 
            document.getElementById('finalresult').textContent = multiplication(a, b)
            a = +finalsesult.textContent;
            b = 0;       
        }
        else if ( opp == '/') { 
            document.getElementById('finalresult').textContent = dividing(a, b)
            a = +finalsesult.textContent;
            b = 0;
        } 
        else if ( opp == '%') { 
            document.getElementById('finalresult').textContent = percentage(a, b)
            a = +finalsesult.textContent;
            b = 0;
        } 
    }
    console.log(opp)

});
