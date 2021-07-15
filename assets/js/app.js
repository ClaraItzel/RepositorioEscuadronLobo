// Variables 
const pais = document.querySelector('#pais');
const infoPersonal = document.querySelector('#info-perso');
const viewCv = document.querySelector('#view-cv');
const info = document.querySelector('#info-personal')
const cv = document.querySelector('#cv');
const contact = document.querySelector('#contact')
const course = document.querySelector('#course');
const proyects = document.querySelector('#proyects');
const divParrafo = document.querySelector('#div-parrafo');

// var bandera = true;
var a = info;
var b = infoPersonal;

// Funcion EventListyener
eventListener();

function eventListener() {

    document.addEventListener('DOMContentLoaded',loaded)


    infoPersonal.addEventListener('click', verInformacion);

    viewCv.addEventListener('click', verCv);

    contact.addEventListener('click', contacto)

    course.addEventListener('click', cursosCert)

    proyects.addEventListener('click', viewProyect)

    divParrafo.addEventListener('mouseover', verParrafo)
    divParrafo.addEventListener('mouseout', verParrafo2)

}

function loaded(){
    b.style.background = "#13C0E5"
    b.style.color = "white"
}


// funcion para mostrar informacion Personal
function verInformacion() {

    b.style.background = "white"
    b.style.color = "black"
    
    if (a != info && b != infoPersonal) {
        a.style.visibility = 'hidden'
        info.style.visibility = 'visible'

        infoPersonal.style.background = "#13C0E5"
        infoPersonal.style.color = "white";
        // infoPersonal.style.boxShadow = "0 0 20px 0.5px black"

        bandera = true;
    }
    a = info;
    b = infoPersonal

}


// Mostramos el Cv
function verCv() {

    b.style.background = "white"
    b.style.color = "black"

    a.style.visibility = 'hidden'
    cv.style.visibility = 'visible';

    viewCv.style.background = "#13C0E5"
    viewCv.style.color = "white"
    // viewCv.style.fontSize = "2px"
    
    a = cv
    b = viewCv
    
}

// funcion para ver contacto
function contacto() {
    
    b.style.background = "white"
    b.style.color = "black"
    
    
    a.style.visibility = 'hidden'
    info.style.visibility = 'hidden'

    contact.style.background = "#13C0E5"
    contact.style.color = "white"
    // viewCv.style.fontSize = "2px"
    
    

    const contacto = document.querySelector('#div-contacto');
    contacto.style.visibility = 'visible'

    a = contacto
    b = contact

}


// Funcion para ver los cursos
function cursosCert(){

    b.style.background = "white"
    b.style.color = "black"

    a.style.visibility = "hidden";
    info.style.visibility = 'hidden';

    course.style.background = "#13C0E5"
    course.style.color = "white"

    const cursos = document.querySelector('#cursos');
    cursos.style.visibility = "visible"

    a = cursos
    b = course


}


// Funcion para ver los proyectos
function viewProyect(){

    b.style.background = "white"
    b.style.color = "black"

    const verProyecto = document.querySelector('.proyects');

    console.log(verProyecto); 

    a.style.visibility = 'hidden';
    info.style.visibility = 'hidden';
    verProyecto.style.visibility = 'visible';

    
    proyects.style.background = "#13C0E5"
    proyects.style.color = "white"

    a = verProyecto;
    b = proyects

}

// Funcion para haver hover al parrafo de los proyectos
function verParrafo(e){

    var parrafos = document.querySelectorAll('#div-h6') 
    var imgParrafo = document.querySelectorAll('#img');
    // let longitud = parrafos.length;
    console.log(imgParrafo);

    for(let i = 0; i < parrafos.length; i++){

            parrafos[i].style.visibility = 'visible'
            imgParrafo[i].style.opacity = '0.1'

    }


}

function verParrafo2(){
    var parrafos = document.querySelectorAll('#div-h6') 
    var imgParrafo = document.querySelectorAll('#img');
    for(let i = 0; i < parrafos.length; i++){

            parrafos[i].style.visibility = 'hidden'
            imgParrafo[i].style.opacity = '1'

        // }

    }
}


// ltlamos la api de paises para seleccionar el pais
// fetch('https://restcountries.eu/rest/v2/all ')
//     .then(res => res.json())
//     .then(data => {

//         console.log(data)
//         const longitud = data.length;

//         for (let i = 0; i < longitud; i++) {

//             // console.log(data[i].name)
//             var a = document.createElement('option');

//             a.textContent = data[i].name;

//             pais.appendChild(a);

//         }


//     })



//     var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 4000); // Change image every 2 seconds
// }

    