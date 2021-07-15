let user = JSON.parse(localStorage.getItem('user'));
let btniniciar = document.getElementById('iniciarSesion');
let btncerrar = document.getElementById('cerrarSesion');
let perfilusuario = document.getElementById('perfilusuario');
let btnperfil = document.getElementById('btnperfil');
if(user != null){
    btniniciar.style.display = 'none';
    perfilusuario.innerHTML = user[0].usuario;
} 
else {
    btncerrar.style.display = 'none';
    btnperfil.style.display = 'none';

}

