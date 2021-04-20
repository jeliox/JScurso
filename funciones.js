// <----------------- Este archivo contendrá las funciones a usar durante el proyecto ------------------->
// funciones para los filtros
function qfiltros() {  
    if (aver =! ""){
    $('.skins .card').slideDown('slow');
    $('.massage .card').slideDown('slow');
    $('.rehabs .card').slideDown('slow');
   console.log('holi');
    }
}

let aver = [];
function rehab() {
    let filtrados = totalprod.filter(element => element.id < 3); 
    $('.skins .card').slideUp('slow');
    $('.massage .card').slideUp('slow');
    $('#filtre .rehabs').fadeIn('slow');    
} 
function masaj() {

    let filtrados = totalprod.filter(element => element.id < 3);
    let padre1 = document.getElementById('shower');
    $('.skins .card').slideUp('slow');
    $('.rehabs .card').slideUp('slow');
    $('#filtre .massage').fadeIn('slow');
} 
function pieles() {

    let filtrados = totalprod.filter(element => element.id < 3);
    $('.massage .card').slideUp('slow');
    $('.rehabs .card').slideUp('slow');
    $('#filtre .skins').fadeIn('slow');
} 

// Funcion para obtener la info del usurario 
function comprar(a){
    prodid= a.id;
    nombrecito = a.nombre;
    let madre = document.getElementById('shower');
    let descuen = document.createElement('h5');
    descuen.innerHTML= "El servicio seleccionado ha sido " + nombrecito.toLowerCase();
    $('#shower').prepend(descuen);
    $('#shower h5').slideDown('slow');
    console.log($('#shower h5'))
    aver = document.getElementsByTagName('h5');
    $('h5').css('text-align','center');
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
                        Servicio: ${nombrecito}
                        Nombre y Apellido: ${entradauser[0].value}
                        DNI: ${entradauser[1].value}
                        Telefono: ${entradauser[2].value}
                        Correo: ${entradauser[3].value}`
    

console.log(parajson);
var data= {service_id: 'service_c6a3nod',
template_id: 'template_t7soyyg',
user_id: 'user_QYieHBgsNts6NAHdMbA0C',
template_params: {message:parajson}};

    tosave = JSON.stringify(parajson);
    datajson= JSON.stringify(data); 
    console.log(tosave);
    localStorage.setItem('formualrio1',tosave);
    prodid = [];
    console.log(prodid);
    // la parte de AJAX
    letsee();
    $('#formulario1')[0].reset(); 
    // swal('¡Genial!','Sus datos fueron enviados con éxito','success');
   // Envio de Mail usando emailJS
    $.ajax({
        type: 'POST',
        url: 'https://api.emailjs.com/api/v1.0/email/send',
        data: datajson,
        contentType: 'application/json',
    }).done(function() {
        swal('¡Genial!','Sus datos fueron enviados con éxito','success');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
    
}

function formvalidation2(e){
    e.preventDefault();
    let formu = e.target;
    let entradauser = $('#formulario2 input');
    console.log(entradauser);
    const parajson =`   Nombre y Apellido: ${entradauser[0].value}
                        Telefono: ${entradauser[1].value}
                        Correo: ${entradauser[2].value}
                        Mensaje ${entradauser[3].value}`
    

console.log(parajson);
var data= {service_id: 'service_c6a3nod',
template_id: 'template_t7soyyg',
user_id: 'user_QYieHBgsNts6NAHdMbA0C',
template_params: {message:parajson}};
    // la parte de AJAX
    $('#formulario2')[0].reset(); 
    // swal('¡Genial!','Sus datos fueron enviados con éxito','success');
   // Envio de Mail usando emailJS
    $.ajax({
        type: 'POST',
        url: 'https://api.emailjs.com/api/v1.0/email/send',
        data: datajson,
        contentType: 'application/json',
    }).done(function() {
        swal('¡Genial!','Sus datos fueron enviados con éxito','success');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
    
}