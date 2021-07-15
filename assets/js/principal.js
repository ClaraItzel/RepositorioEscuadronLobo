window.addEventListener('scroll', function(){
    var tarjetas = document.querySelectorAll('.contenedor');
   for (let index = 0; index <= tarjetas.length; index++) {
     /*   const element = tarjetas[index]; */
        var distancia= tarjetas[index].getBoundingClientRect().top;
            var altura = window.innerHeight/1.3;
            tarjetas[index].classList.add('transform-up');
        if(distancia<=altura){
            tarjetas[index].classList.add('aparece');
        }
        else{
         /*    tarjetas[index].classList.remove('aparece'); */
        } 
   }
  
})

let btn_Quienes= document.querySelector('#btn_QuienesS').addEventListener('click',() =>{
location.href="Quienessomos.html";
});
let btn_foro= document.querySelector('#btn_irForo').addEventListener('click',() =>{
    location.href="Foro.html";
    });
    let btn_cuenta= document.querySelector('#btn_crearCuenta').addEventListener('click',() =>{
        location.href="registro.html";
        });