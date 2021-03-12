// Simulador de productos 

// por ahora solo tendremos algunos productos

class productos {
    constructor (id,nombre, precio, stock) {
        this.id = parseInt(id);
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
        this.vendido = false;
    }
    
    discount10() {
        this.precio = this.precio * 0.9 ;
        
    }

    sumaiva() {
        this.precio = this.precio * 1.21;
    }
    
    venta() {
        //this.vendido = true;
        this.stock = this.stock - 1;
     }
}

// Creamos los productos
const prod1 = new productos(1,"producto 1", "2000", "10");
const prod2 = new productos(2,"producto 2", "2500", "8");
const prod3 = new productos(3,"producto 3", "3000", "15");

// Creamos más prodcutos pero en un array
const totalprod = [prod1,prod2,prod3];
const products = [new productos(4,"producto 4","600",15),new productos(5,"producto 5","10000",6),new productos(6,"producto 6",4750,12)];

// Para crear un array total
for (let i=0; i < products.length; i++){
    totalprod.push(products[i]);
}

// funciones para los filtros
function mostrar(){
    console.log("funciona")
    var ancla = document.getElementById('goaway');
    if (ancla.style.display === "none") {
        ancla.style.display = "block";
      } else {
        ancla.style.display = "none";
      }

}
let aver = [];
function menormayor() { 
    let prices = totalprod.sort((a,b) => parseFloat(a.precio) - parseFloat(b.precio));
    console.log(prices);
    let padre1 = document.getElementById('shower')
    if (aver == ""){
  for (const i of prices){
    li = document.createElement('li');
    li.innerHTML = i.nombre + " $" + i.precio;
    padre1.appendChild(li);
    }
    console.log(padre1)
     aver = document.getElementsByTagName('li')
    } else {
        for (const i of prices)
        padre1.remove()
        aver = [];
        let padre1 = document.getElementById('shower')
    } 
}
function menor4k(){
    const filter1 = totalprod.filter(element => element.precio < 4000);
    for (let i=0; i < filter1.length; i++){
    
        alert([filter1[i].nombre, "  " + filter1[i].precio]);
        }
}
function mayor4k() {
    const filter2 = totalprod.filter(element => element.precio >= 4000);
    for (let i=0; i < filter2.length; i++){
    
        alert([filter2[i].nombre, "  " + filter2[i].precio]);
        }
}
// Botones
let btnfiltro = document.getElementById('btnfiltro');
btnfiltro.addEventListener('click', mostrar)

let btnm = document.getElementById('btn31');
btnm.addEventListener('click',menormayor);

let btn32 = document.getElementById('btn32');
btn32.addEventListener('click',mayor4k);

let btn33 = document.getElementById('btn33');
btn33.addEventListener('click',menor4k);

// Funcion para obtener la info del usurario 
function comprar(a){
    a.sumaiva();
    alert("el precio con es iva es de: " + a.precio)
    console.log(a.stock)
    a.venta();
    console.log(a.stock)

}
function descuento(son) {

    dato = prompt("Desea aplicar un descuento del 10%?, S: sí o N: no");
    
        console.log(son);
    if (dato != ""){
        if (dato == "S" || dato == "s" ){
    
            console.log(son.precio);
            console.log(son.discount10());
            console.log(son.precio);
            alert("su precio con descuento es de: " + son.precio)
            comprar(son);
        } else {
        alert("No se aplica descuento");
        comprar(son);
        }
    } else {
        alert("Por favor intente de nuevo")
    }

}