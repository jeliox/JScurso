// <----------------- Este archivo contendrá las funciones a usar durante el proyecto ------------------->
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
// function menormayor() { 
//     let prices = totalprod.sort((a,b) => parseFloat(a.precio) - parseFloat(b.precio));
//     let padre1 = document.getElementById('shower');
//     if (aver == ""){
//         for (const i of prices){
//             li = document.createElement('li');
//             li.innerHTML = i.nombre + " $" + i.precio;
//             padre1.appendChild(li);
//             aver = document.getElementsByTagName('li')
//     }
//     console.log(aver.length)
//     } else {
//             while (padre1.hasChildNodes()){
//                 padre1.removeChild(padre1.firstChild);
//             }
//          aver = [];
//     } 
// }
function rehab() {

    let filtrados = totalprod.filter(element => element.id < 3);
    let piel = $('.skins .card').css('display', 'none');
    let masaje = $('.massage .card').css('display', 'none');
    let padre1 = document.getElementById('shower');
    console.log(aver);
    if (aver == ""){
        for (const i of filtrados){
            li = document.createElement('li');
            // li.innerHTML = i.nombre + " $" + i.precio;
            // padre1.appendChild(li);
            aver = document.getElementsByTagName('li')
    }
    
    } else {
            piel = $('.skins .card').css('display', 'flex');
            masaje = $('.massage .card').css('display', 'flex');
            $('.rehabs .card').css('display', 'flex');
            while (padre1.hasChildNodes()){
                padre1.removeChild(padre1.firstChild);
            }
         aver = [];
    } 
} 
function masaj() {

    let filtrados = totalprod.filter(element => element.id < 3);
    let piel = $('.skins .card').css('display', 'none');
    let rehabi = $('.rehabs .card').css('display', 'none');
    let padre1 = document.getElementById('shower');
    console.log(aver);
    if (aver == ""){
        for (const i of filtrados){
            li = document.createElement('li');
            // li.innerHTML = i.nombre + " $" + i.precio;
            // padre1.appendChild(li);
            aver = document.getElementsByTagName('li')
    }
    
    } else {
            piel = $('.skins .card').css('display', 'flex');
            rehabi = $('.rehabs .card').css('display', 'flex');
            $('.massage .card').css('display', 'flex');
            while (padre1.hasChildNodes()){
                padre1.removeChild(padre1.firstChild);
            }
         aver = [];
    } 
} 
function pieles() {

    let filtrados = totalprod.filter(element => element.id < 3);
    let rehabi = $('.rehabs .card').css('display', 'none');
    let masaje = $('.massage .card').css('display', 'none');
    let padre1 = document.getElementById('shower');
    console.log(aver);
    if (aver == ""){
        for (const i of filtrados){
            li = document.createElement('li');
            // li.innerHTML = i.nombre + " $" + i.precio;
            // padre1.appendChild(li);
            aver = document.getElementsByTagName('li')
            console.log(aver);
    }
   
    } else {
            rehabi = $('.rehabs .card').css('display', 'flex');
            masaje = $('.massage .card').css('display', 'flex');
            $('.skins .card').css('display', 'flex');
            while (padre1.hasChildNodes()){
                padre1.removeChild(padre1.firstChild);
            }
         aver = [];
    } 
} 

// function menor4k(){
//     let filter1 = totalprod.filter(element => element.precio < 4000);
//     let padre2 = document.getElementById('shower');
//     if (aver == ""){
//         for (const i of filter1){
//             li = document.createElement('li');
//             li.innerHTML = i.nombre + " $" + i.precio;
//             padre2.appendChild(li);
//             aver = document.getElementsByTagName('li')
//     }
    
//     } else {
//             while (padre2.hasChildNodes()){
//                 padre2.removeChild(padre2.firstChild);
//             }
//          aver = [];
//     } 
// }
// function mayor4k() {
//     const filter2 = totalprod.filter(element => element.precio >= 4000);
//     let padre3 = document.getElementById('shower');
//     if (aver == ""){
//         for (const i of filter2){
//             li = document.createElement('li');
//             li.innerHTML = i.nombre + " $" + i.precio;
//             padre3.appendChild(li);
//             aver = document.getElementsByTagName('li')
//     }
    
//     } else {
//             while (padre3.hasChildNodes()){
//                 padre3.removeChild(padre3.firstChild);
//             }
//          aver = [];
//     } 
// }
// Funcion para obtener la info del usurario 
function comprar(a){
    console.log(a.precio);
    a.sumaiva();
    const iva = a.precio;
    let madre = document.getElementById('shower');
    let descuen = document.createElement('h3');
    descuen.innerHTML= "El precio con IVA es de: $" + iva;
    madre.appendChild(descuen);
    aver = document.getElementsByTagName('h3');
    //console.log(a.stock)
    a.venta();
    //console.log(a.stock)
    a.antiiva();
    console.log(a.precio)
    console.log(iva);
    
}
//<------------ funcion para comprobar si hay listas en el html ------------> 
function letsee (son){
    if (aver == ""){
        comprar(son);
    } else {
        let madre = document.getElementById('shower');
        while (madre.hasChildNodes()){
            madre.removeChild(madre.firstChild);
        }
      aver = [];
    }
    formmsee();
}
function formmsee(){
    let ancla = document.getElementById('formulario1')
    if (ancla.style.display === "none") {
        ancla.style.display = "block";
      } else {
        ancla.style.display = "none";
      }
}
// <------- Guardada de datos del formulario --------------> 
function formvalidation(e){
    //e.preventDefault();
    let formu = e.target;
    console.log(formu.children)
    const parajson =`Nombre ${formu.children[0].value}
                        Apellido ${formu.children[2].value}
                        DNI ${formu.children[4].value}
                        Telefono ${formu.children[6].value}
                        Correo ${formu.children[8].value}`
    


    tosave = JSON.stringify(parajson);
    localStorage.setItem('formualrio1',tosave);
}