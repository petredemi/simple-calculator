
const btns = Array.from(document.querySelectorAll('button'));
const display = document.querySelector('.container > div');
console.log(display);
console.log(btns);

btns.forEach(button => button.addEventListener('mousedown', (e) => {
   // button.setAttribute('style', 'backgroundColor: red;')
    button.style.backgroundColor = 'red';
    button.style.borderStyle = 'inset';
        console.log(e);
}));

btns.forEach(button => button.addEventListener('mouseup', (e) => {
    // button.setAttribute('style', 'backgroundColor: red;')
     button.style.backgroundColor = '';
     button.style.borderStyle = '';

         console.log(e);
 }));
 