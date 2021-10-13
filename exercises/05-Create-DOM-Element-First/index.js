// Your code here
let parrafo= document.createElement('p');
parrafo.style.backgroundColor= 'Yellow';

let textoParrafo= document.createTextNode('Hello World');

parrafo.appendChild(textoParrafo);

document.body.appendChild(parrafo);