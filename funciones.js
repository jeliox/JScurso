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

function qfiltros() {  
    if (aver =! ""){
    // $('.skins .card').css('display', 'flex');
    // $('.massage .card').css('display', 'flex');
    // $('.rehabs .card').css('display', 'flex');
    $('.skins .card').slideDown('slow');
    $('.massage .card').slideDown('slow');
    $('.rehabs .card').slideDown('slow');
   console.log('holi');
    }
}

let aver = [];
function rehab() {

    let filtrados = totalprod.filter(element => element.id < 3);
    // let piel = $('.skins .card').css('display', 'none');
    // let masaje = $('.massage .card').css('display', 'none');
    // let padre1 = document.getElementById('shower');
    // $('#filtre .rehabs').css({'display': 'block','visibility': 'visible'}); 
    $('.skins .card').slideUp('slow');
    $('.massage .card').slideUp('slow');
    $('#filtre .rehabs').fadeIn('slow');    
} 
function masaj() {

    let filtrados = totalprod.filter(element => element.id < 3);
    // let piel = $('.skins .card').css('display', 'none');
    // let rehabi = $('.rehabs .card').css('display', 'none');
        let padre1 = document.getElementById('shower');
    // $('#filtre .massage').css({'display': 'block','visibility': 'visible'}); 
    $('.skins .card').slideUp('slow');
    $('.rehabs .card').slideUp('slow');
    $('#filtre .massage').fadeIn('slow');
} 
function pieles() {

    let filtrados = totalprod.filter(element => element.id < 3);
    // let rehabi = $('.rehabs .card').css('display', 'none');
    // let masaje = $('.massage .card').css('display', 'none');
    // let padre1 = document.getElementById('shower');
    // $('#filtre .skins').css({'display': 'block','visibility': 'visible'}); 
    $('.massage .card').slideUp('slow');
    $('.rehabs .card').slideUp('slow');
    $('#filtre .skins').fadeIn('slow');
} 

// Funcion para obtener la info del usurario 
function comprar(a){
    prodid= a.id;
    let nombrecito = a.nombre;
    a.sumaiva();
    const iva = a.precio;
    let madre = document.getElementById('shower');
    let descuen = document.createElement('h5');
    descuen.innerHTML= "El servicio seleccionado ha sido " + nombrecito.toLowerCase();
    $('#shower').prepend(descuen);
    $('#shower h5').slideDown('slow');
    console.log($('#shower h5'))
    // madre.appendChild(descuen);
    aver = document.getElementsByTagName('h5');
    $('h5').css('text-align','center');
    a.venta();
    a.antiiva(); 
}
//<------------ funcion para comprobar si hay listas en el html ------------> 
function letsee (son){
    if (aver == ""){
        $('html, body').animate({
            scrollTop: $("#shower").offset().top  
        }, 100,comprar(son));
        formmsee();
       

    } else {
        let madre = document.getElementById('shower');
        let ancla = document.getElementById('formulario1')
        $('#formulario1').slideUp('slow');
        // ancla.style.display = "none";
        while (madre.hasChildNodes()){
            madre.removeChild(madre.firstChild);
        }
      aver = [];
      
    }
    
}
function formmsee(){
    let ancla = document.getElementById('formulario1')
    if (ancla.style.display === "none") {
        $('#formulario1').slideDown('slow');
        ancla.style.display = "block"; 
      } else {
        ancla.style.display = "none";
        let madre = document.getElementById('shower');
        while (madre.hasChildNodes()){
            madre.removeChild(madre.firstChild);
        }
    
      }
}
// <------- Guardada de datos del formulario --------------> 
function formvalidation(e){
    e.preventDefault();

    let formu = e.target;
    let entradauser = $('#formulario1 input');
    console.log(entradauser);
    const parajson =`   ID del servicio: ${prodid}
                        Nombre y Apellido: ${entradauser[0].value}
                        DNI: ${entradauser[1].value}
                        Telefono: ${entradauser[2].value}
                        Correo: ${entradauser[3].value}`
    


    tosave = JSON.stringify(parajson);
    console.log(tosave);
    localStorage.setItem('formualrio1',tosave);
    prodid = [];
    console.log(prodid);
    // la parte de AJAX
    $.ajax({
        type: "POST",
        url: "https://jsonplaceholder.typicode.com/posts" ,
        data: tosave,
        dataType: "JSON",
        success: function (response) {
           $('#shower2').html(`<h4>Su información fue enviada</h4>`);
           $('#shower2').slideDown('slow').delay(2000).slideUp('slow')
        }
    });
    letsee();
    $('#formulario1')[0].reset(); 
}