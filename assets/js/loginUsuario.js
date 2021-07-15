// Obtenemos los elementos del html mediante el uso de DOM
const form = document.getElementById('form');
const username = document.getElementById('user');
const password = document.getElementById('password');
const warnings = document.getElementById('warnings');


form.addEventListener('submit', event=>{
    event.preventDefault();
    let usuarioPrueba = "Usuario";
    let contraseña = "12345678";
    let entrar = false;
    let mensaje = "";

    let users = Array(
        {
            usuario: username.value,
            contraseña: password.value
        }
    );

    if (username.value == usuarioPrueba && password.value == contraseña){
        localStorage.setItem('user', JSON.stringify(users));

        location.href = 'index-general.html';
        /* En localStorage.setItem ingresamos dos parametros, el primero es la clave con la que 
        luego van a ser llamados los datos y el segundo parametro son los datos, sin embargo
        localStorage solo recibe string así que hacemos la conversion mediante JSON.stringify() */
        
    } else {
        mensaje = "Usuario o contraseña incorrectos";
        entrar = true;
    }

    if(entrar){
        warnings.innerHTML = mensaje;
        warnings.classList.add('animated', 'flash');
    }
})

