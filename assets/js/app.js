// Variables 
const pais = document.querySelector('#pais');
const infoPersonal = document.querySelector('#info-perso');
const viewCv = document.querySelector('#view-cv');
const info = document.querySelector('#info-personal')
const cv = document.querySelector('#cv');
const course = document.querySelector('#course');
const proyects = document.querySelector('#proyects');
const divParrafo = document.querySelector('#div-parrafo');

var bandera = true;
var a = info;

// Funcion EventListyener
eventListener();

function eventListener() {

    // document.addEventListener('DOMContentLoaded',loaded)


    infoPersonal.addEventListener('click', verInformacion);

    viewCv.addEventListener('click', verCv);

    contact.addEventListener('click', contacto)

    course.addEventListener('click', cursosCert)

    proyects.addEventListener('click', viewProyect)

    divParrafo.addEventListener('mouseover', verParrafo)
    divParrafo.addEventListener('mouseout', verParrafo2)

}

// funcion para mostrar informacion Personal
function verInformacion() {

    if (a != info) {
        a.style.visibility = 'hidden'
        info.style.visibility = 'visible'
        bandera = true;
    }
    a = info;

}

// Mostramos el Cv
function verCv() {

    a.style.visibility = 'hidden'
    cv.style.visibility = 'visible';

    a = cv

}

// funcion para ver contacto
function contacto() {

    a.style.visibility = 'hidden'
    info.style.visibility = 'hidden'

    const contacto = document.querySelector('#contacto');
    contacto.style.visibility = 'visible'

    a = contacto

}


// Funcion para ver los cursos
function cursosCert(){

    a.style.visibility = "hidden";
    info.style.visibility = 'hidden';

    const cursos = document.querySelector('#cursos');
    cursos.style.visibility = "visible"

    a = cursos


}


// Funcion para ver los proyectos
function viewProyect(){

    const verProyecto = document.querySelector('.proyects');

    console.log(verProyecto); 

    a.style.visibility = 'hidden';
    info.style.visibility = 'hidden';

    verProyecto.style.visibility = 'visible';

    a = verProyecto;

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

    