'use strict'

window.addEventListener('load',() => {
    
    var tiempo = setInterval(() => {


        console.log('Intervalo Ejecutado')

        var encabezado = document.querySelector('h1');

        if(encabezado.style.fontSize == '50px'){
            encabezado.style.fontSize = '30px'
        }else{
            encabezado.style.fontSize = '50px'
        }

    }, 3000 );

})