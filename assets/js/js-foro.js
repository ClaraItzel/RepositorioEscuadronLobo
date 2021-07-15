


function intento3(){
    //aqui se llama al boton file
   let fotografia= document.getElementById('add-foto');
   fotografia.onchange= function(e){
        //aqui se lee el archivo subido

    var reader= new FileReader();
    //se obtiene la imagen
    reader.readAsDataURL(e.target.files[0]);
    //cuando se carga la imagen
    reader.onload= function(){
        //se llama al boton de crear foro mediante el click
        let btn_Foro= document.querySelector('#btn_CrearForo')
        btn_Foro.addEventListener('click',() =>{
        //se obtiene el texto de la pregunta y lo demas
        let T_pregunta= document.querySelector('#TPregunta').value; 
        let D_pregunta= document.querySelector('#DPregunta').value; 
        var hilos= document.querySelector('#M_hilos')
        console.log(T_pregunta);
        console.log(D_pregunta);
        //se crean los elementos del card
        var tarjeta= document.createElement('div');
        var columnas= document.createElement('div');
        var filas=document.createElement('div');
        var imagen= document.createElement('img');
        var text_column= document.createElement('div');
        var cuerpo_card= document.createElement('div');
        var enlace_pregunta= document.createElement('a')
        var texto_enlace=document.createElement('h4');
        var enlace_usuario=document.createElement('a');
        var parrafo_foro= document.createElement('p');
        var Hora_Parrafo= document.createElement('p');
        var small_hora=document.createElement('small');
        //se le insertan las clases al card
        tarjeta.classList.add('card', 'mb-3');
        columnas.classList.add('row', 'g-3');
        imagen.classList.add('img-fluid');
        imagen.src= reader.result;
        enlace_pregunta.href= "Comentario.html";
        filas.classList.add('col-md-2','rounded-start');
        text_column.classList.add('col-md-8');
        cuerpo_card.classList.add('card-body');
        texto_enlace.classList.add('card-title', 'SinDec', 'texto-izquierda');
        //se inserta el texto a un card
        texto_enlace.textContent= T_pregunta;
        parrafo_foro.classList.add('card-text');
        parrafo_foro.textContent= D_pregunta;
        //se inserta una referencia para el perfil
        enlace_usuario.href= 'perfil-usuario.html';
        enlace_usuario.textContent= 'John Doe';
        Hora_Parrafo.classList.add('card-text');
        small_hora.classList.add('text-muted');
        small_hora.textContent= "Publicado a las 11:20";
        //se insertan los elementos creados en el html
        hilos.appendChild(tarjeta);
        tarjeta.appendChild(columnas);
        columnas.appendChild(filas);
        columnas.appendChild(text_column);
        filas.appendChild(imagen);
        text_column.appendChild(cuerpo_card);
        cuerpo_card.appendChild(enlace_pregunta);
        enlace_pregunta.appendChild(texto_enlace);
        cuerpo_card.appendChild(enlace_usuario);
        cuerpo_card.appendChild(parrafo_foro);
        cuerpo_card.appendChild(Hora_Parrafo);
        Hora_Parrafo.appendChild(small_hora);
        //local_Storage
        localStorage.setItem('Titulo_pregunta', T_pregunta);
        localStorage.setItem('Descrip_Pregunta',D_pregunta);
        localStorage.setItem('Imagen',imagen.src );
       
            });

        
    }
}
 
}

let btn_foto= document.querySelector('#add-foto').addEventListener('click',() =>{
intento3();
});

 /*    document.getElementById('add-foto').onchange= function(e){
        console.log(e.target.files[0]);
    var reader= new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload= function(){
        let preview= document.getElementById('preview');
            imagen = document.createElement('img');
            imagen.src=reader.result;
            preview.innerHTML="";
        preview.append(imagen);
    }
}
 */

