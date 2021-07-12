
let btn_Foro= document.querySelector('#btn_CrearForo').addEventListener('click',() =>{
    let T_pregunta= document.querySelector('#TPregunta').value; 
    let D_pregunta= document.querySelector('#DPregunta').value; 
    var hilos= document.querySelector('#M_hilos')
    console.log(T_pregunta);
    console.log(D_pregunta);
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
    tarjeta.classList.add('card', 'mb-3');
    columnas.classList.add('row', 'g-3');
    imagen.classList.add('img-fluid');
    imagen.src= "/assets/img/johnDoe.png"
    enlace_pregunta.href= "Comentario.html";
    filas.classList.add('col-md-2','rounded-start');
    text_column.classList.add('col-md-8');
    cuerpo_card.classList.add('card-body');
    texto_enlace.classList.add('card-title', 'SinDec');
    texto_enlace.textContent= T_pregunta;
    parrafo_foro.classList.add('card-text');
    parrafo_foro.textContent= D_pregunta;
    enlace_usuario.href= '#';
    enlace_usuario.textContent= 'John Doe';
    Hora_Parrafo.classList.add('card-text');
    small_hora.classList.add('text-muted');
    small_hora.textContent= "Publicado a las 11:20";
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
});