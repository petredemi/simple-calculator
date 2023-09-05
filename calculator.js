
const btns = Array.from(document.querySelectorAll('button'));
const display = document.querySelector('#display');
const operators = Array.from(document.querySelectorAll('.operator'));
const numbers = Array.from(document.querySelectorAll('.container > .number'));
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');
const del = document.querySelector('#del');
const ac = document.querySelector('#AC');
const result = document.querySelector('#display-result');

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

let a = ''; //function argument value
let b = ''; // function argument value
let opp = ''; //operator type +, - , *, /, %

numbers.forEach(number => number.addEventListener('click', (e) => {
 //   if (equalButton == true ) { return;}
    result.textContent = '';
    if ( arg == 'a'){
        if( equalButton == true){
            a = '';
            equalButton = false;
            point = false;
        }
        let a_string = a.toString(); 
        if (a_string.length <= 10){   
            op = true;  
            a = a + number.textContent;
            display.textContent = a.toString();
        } else { return;}
   
    } else if (arg == 'b') {
        let b_string = b.toString();
        if ( b_string.length <= 10 ){    
            op = false;
            b = b + number.textContent;
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
 //let pc = '.';

 dot.addEventListener('click', (e) => {
    if ( point == true) {return};
    if ( arg == 'a'){
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
     //       let d = y.slice(-1);
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
    result.textContent = '';

    a = '';
    b = '';
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
          
            document.getElementById('display-result').textContent = adding(a, b);
            a = +result.textContent;
            b = '';
        }
        else if ( opp == '-') {
            document.getElementById('display-result').textContent = substraction(a, b)
            a = +result.textContent;
            b = '';
        }
        else if ( opp == 'x') { 
            document.getElementById('display-result').textContent = multiplication(a, b)
            a = +result.textContent;
            b = '';       
        }
        else if ( opp == '/') { 
            document.getElementById('display-result').textContent = dividing(a, b)
            a = +result.textContent;
            b = '';
        } 
        else if ( opp == '%') { 
            document.getElementById('display-result').textContent = percentage(a, b)
            a = +result.textContent;
            b = '';
        } 
    }

});
