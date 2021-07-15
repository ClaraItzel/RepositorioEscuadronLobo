const nombreLocalStorage= localStorage.getItem('Titulo_pregunta');
const nombreLocalStorage2= localStorage.getItem('Descrip_Pregunta');
const nombreImagen= localStorage.getItem('Imagen') ;
console.log(nombreLocalStorage);
console.log(nombreLocalStorage2);
console.log(nombreImagen);
let nav_pregunta = document.getElementById('Nav_pregunta');
nav_pregunta.textContent="> " + nombreLocalStorage;
let P1 = document.getElementById('P1');
P1.textContent= nombreLocalStorage;
let Tarjeta_P= document.getElementById('Tarjeta_P');
Tarjeta_P.textContent = nombreLocalStorage;
let Des_Pregunta= document.getElementById('Des_Pregunta');
Des_Pregunta.textContent= nombreLocalStorage2
let Imagen_Prueba= document.getElementById('imagen_Pregunta');
Imagen_Prueba.src= nombreImagen;