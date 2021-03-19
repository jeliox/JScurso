// Simulador de productos 

// <-------------------------- Botones ------------------> 
// let btnfiltro = document.getElementById('btnfiltro');
// btnfiltro.addEventListener('click', mostrar);

let btnm = document.getElementById('btn31');
btnm.addEventListener('click',menormayor);

let btn32 = document.getElementById('btn32');
btn32.addEventListener('click',mayor4k);

let btn33 = document.getElementById('btn33');
btn33.addEventListener('click',menor4k);

let btnp1 = document.getElementById('btnp1');
btnp1.addEventListener('click',letsee.bind(this,prod1));

let btnp2 = document.getElementById('btnp2');
btnp2.addEventListener('click',letsee.bind(this,prod2));

let btnp3 = document.getElementById('btnp3');
btnp3.addEventListener('click',letsee.bind(this,prod3));

let btnp4 = document.getElementById('btnp4');
btnp4.addEventListener('click',letsee.bind(this,products[0]));

let btnp5 = document.getElementById('btnp5');
btnp5.addEventListener('click',letsee.bind(this,products[1]));

let btnp6 = document.getElementById('btnp6');
btnp6.addEventListener('click',letsee.bind(this,products[2]));

// <-------------- Formulario -----------------> 
let myform = document.getElementById('formulario1');
myform.addEventListener('submit',formvalidation);