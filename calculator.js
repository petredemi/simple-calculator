
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
let opp = ''; //operator type +, - , *, /, %

numbers.forEach(number => number.addEventListener('click', (e) => {
    if (equalButton == true ) { return;}
    finalresult.textContent = '';
    if ( arg == 'a'){
        let a_string = a.toString(); 
        if (a_string.length <= 10){   
            op = true;  
            a = Number(a + number.textContent);
            display.textContent = a.toString();
        } else { return;}
   
    } else if (arg == 'b') {
        let b_string = b.toString();
        if ( b_string.length <= 10 ){    
            op = false;
            b = Number( b + number.textContent);
            display.textContent = a.toString() + opp + b.toString();  
        } else {return;}
    }    
}));

operators.forEach(operator => operator.addEventListener('click', (e) => {
    if (op == false) return;
        equalButton = false;
        op = false;
        point = false;
        opp = operator.textContent;
    //    finalresult.textContent = '';

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
 let pc = '.';

 dot.addEventListener('click', (e) => {
    if ( point == true) {return};
    if ( arg == 'a'){
        a = a + dot.textContent;
  //  a = a + pc;
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
            display.textContent = xa;
            if (xa.endsWith('.')){
                a =  +xa + dot.textContent ;
            }else {
                    a = +xa;
            }
            if (aDot == false){
                point = false;
            }
    } else if( arg == 'b'){
        let y = b.toString();
        let xb = y.slice(0, -1);
        let bDot = xb.includes('.');
        if (xb.endsWith('.')){
            b = +xb + dot.textContent;
        }else {
                b = +xb;
        }

    //    b = xb;      
        display.textContent = a.toString() + opp + xb;
        if (bDot == false){
            point = false;
        }
        if ( xb == 0 ){
            arg = 'a';
        } 
    } 

    equalButton = false;

 });

 ac.addEventListener('click', (e) => {
    display.textContent = '';
    finalresult.textContent = '';

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
        op = true;
        a = Number(a); 
        b = Number(b);
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
