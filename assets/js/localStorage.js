// Sesión con local storage
// Recuperacion de los datos almacenados en local storage
let user = JSON.parse(localStorage.getItem('user'));

// Obtencion de todos los elementosmediante DOM
let iniciarSesion = document.getElementById('iniciarSesion');
let cerrarSesion = document.getElementById('cerrarSesion');
let perfilUsuario = document.getElementById('perfilusuario');
let crearCuenta = document.getElementById('btn_crearCuenta');
let mensajefooter = document.getElementById('mensajefooter');

// Si nuestro local storage se encuentra con los datos de inicio de sesión entra al if
if(user != null){
    //Ocultamos el boton de iniciar sesión
    iniciarSesion.style.display = 'none';
    //Mostramos el nombre del usuario
    perfilUsuario.innerHTML = user[0].usuario;
    //Ocultamos el boton de crear cuenta
    try {
        crearCuenta.style.display = 'none';
    } catch (error) {
        
    }
    
} 
// Si no tiene datos el local storage
else {
    //Ocultamos el boton de cerrar sesión
    cerrarSesion.style.display = 'none';
    //Ocultamos el nombre de perfil de usuario
    perfilUsuario.style.display = 'none';
    //Mostramos el mensaje del footer
    try {
        mensajefooter.innerHTML = '¡Únete a nuestra gran comunidad!';
    } catch (error) {
        
    }

}

//Borramos el local storage

cerrarSesion.addEventListener('click', e => {
    localStorage.clear();
    location.href= "login.html";
});