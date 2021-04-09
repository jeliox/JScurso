// <------ Este archivo contendrá los datos para nuestra web ------------> 
class productos {
    constructor (id,nombre) {
        this.id = parseInt(id);
        this.nombre = nombre.toUpperCase();
    }
}

// Creamos los productos
const prod1 = new productos(1,"Rehabilitación funcional - FKT");
const prod2 = new productos(2,"Rehabilitación en piso pélvico");
const prod3 = new productos(3,"Drenaje linfático");

// Creamos más prodcutos pero en un array
const totalprod = [prod1,prod2,prod3];
const products = [new productos(4,"Criolipolisis"),new productos(5,"Depilación definitiva"),new productos(6,"Dermatofuncional")];

// Para crear un array total
for (let i=0; i < products.length; i++){
    totalprod.push(products[i]);
}
