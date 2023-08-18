
const btns = Array.from(document.querySelectorAll('button'));
const display = document.querySelector('#display');
const operators = Array.from(document.querySelectorAll('.operator'));
const numbers = Array.from(document.querySelectorAll('.container > .number'));
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');
const del = document.querySelector('#del');
const ac = document.querySelector('#AC');
const finalresult = document.querySelector('#finalresult');

function adding(a, b){
     let x = a + b ;
     return Number(x.toFixed(4));
}
function substraction(a, b){
    let x = a - b;
    return Number(x.toFixed(4)); 
}
function multiplication( a, b){
    let x = a * b;
    return Number(x.toFixed(4));
}
function dividing( a, b){
    let x = a / b;
    return Number(x.toFixed(4));
}
function percentage(a, b){
    x = a * b / 100;
    return  Number(x.toFixed(2));
}
let op = false; //operators buttons
let point = false; // dot button
let arg = 'a'; // switch between function arguments a or b;
let equalButton = false;

let a = 0;
let b  = 0;
//const str = [a, b]; //function arguments
let opp = ''; //operator type +, - , *, /, %



numbers.forEach(number => number.addEventListener('click', (e) => {
    if (equalButton == true ) { return;}
    op = true;
    if ( arg == 'a'){
    a = Number(a + number.textContent);
    display.textContent = a.toString();
   
    } else if (arg == 'b') {
        b = Number(b + number.textContent);
        display.textContent = a.toString() + opp + b.toString();
    }
}));

operators.forEach(operator => operator.addEventListener('click', (e) => {
    if (op == false) return;
    equalButton = false;
    opp = operator.textContent;
    op = false;
    point = false;
    if(arg == 'a'){
    display.textContent = a.toString() + operator.textContent ;
   
    } 
    arg = 'b';

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
    if ( arg == 'a') {
    a = a + dot.textContent;
    display.textContent = a.toString();
    point = true;
    
    } else if ( arg == 'b'){
        b = b + dot.textContent;
        display.textContent = a.toString() + opp + b.toString();
        point = true;
    }

 });

 del.addEventListener('click', (e) => {
    if (equalButton == true){return;}
   
    if ( arg == 'a') {
            let y = a.toString();
            let xa = y.slice(0, -1);
            let d = y.slice(-1);
            let aDot = xa.includes('.');
            a = Number(xa);
            display.textContent = xa;
            console.log(aDot);
            console.log(arg);
            console.log(y);
            console.log(d);
            if (aDot == false){

                point = false;
            } //else if ( aDot == true){
                //point = true;
           // }
    } else if ( arg == 'b'){
        let y = b.toString();
        let xb = y.slice(0, -1);
        let bDot = y.includes('.'); 
        b = Number(xb);
        
        display.textContent = a.toString() + opp + xb;
   
        console.log(bDot);
        console.log(arg);
        if (bDot == false){
            point = false;
        } //else if ( bDot == true) {
            //point = true;
        //}
    } 

    equalButton = false;

 });

 ac.addEventListener('click', (e) => {
    display.textContent = 'type a number';
    finalresult.textContent = 'result is:';

    a = 0;
    b = 0;
    arg = 'a';
    op = false;
    point = false;
    equalButton = false;
 });

equal.addEventListener('click', () => {
    if ( arg == 'b') {
        arg = 'a';
        equalButton = true;
        point = true;
        display.textContent = display.textContent.concat(equal.textContent);
    
        if ( opp == '+'){ 
            document.getElementById('finalresult').textContent = adding(a, b);
            a = +finalresult.textContent;
            b = 0;
        }
        else if ( opp == '-') {
            document.getElementById('finalresult').textContent = substraction(a, b)
            a = +finalresult.textContent;
            b = 0;
        }
        else if ( opp == 'x') { 
            document.getElementById('finalresult').textContent = multiplication(a, b)
            a = +finalresult.textContent;
            b = 0;       
        }
        else if ( opp == '/') { 
            document.getElementById('finalresult').textContent = dividing(a, b)
            a = +finalresult.textContent;
            b = 0;
        } 
        else if ( opp == '%') { 
            document.getElementById('finalresult').textContent = percentage(a, b)
            a = +finalresult.textContent;
            b = 0;
        } 
    }

});
