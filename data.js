// <------ Este archivo contendrá los datos para nuestra web ------------> 
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
    antidiscount(){
        
        this.precio = this.precio / 0.9 ;
        
    }

    sumaiva() {
        this.precio = this.precio * 1.21;
    }
    antiiva(){
        
        this.precio = this.precio / 1.21;
        
    }
    
    venta() {
        //this.vendido = true;
        this.stock = this.stock - 1;
     }
}

// Creamos los productos
const prod1 = new productos(1,"Rehabilitación funcional - FKT", "2000", "10");
const prod2 = new productos(2,"Rehabilitación en piso pélvico", "2500", "8");
const prod3 = new productos(3,"Drenaje linfático", "3000", "15");

// Creamos más prodcutos pero en un array
const totalprod = [prod1,prod2,prod3];
const products = [new productos(4,"Criolipolisis","600",15),new productos(5,"Depilación definitiva","10000",6),new productos(6,"Dermatofuncional",4750,12)];

// Para crear un array total
for (let i=0; i < products.length; i++){
    totalprod.push(products[i]);
}
