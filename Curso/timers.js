'use strict'

window.addEventListener('load',() => {
    
    const intervalo = () => {
        var tiempo = setInterval(() => {


            console.log('Intervalo Ejecutado')
    
            var encabezado = document.querySelector('h1');
    
            if(encabezado.style.color == 'blue'){
                encabezado.style.color = 'red'
            }else{
                encabezado.style.color = 'blue'
            }
    
        }, 1000 );

        return tiempo;
    }


    var tiempo = intervalo();

    var stop = document.querySelector('#stop');

    stop.addEventListener('click', () => {

        alert("Has parado el intervalo");

        clearInterval(tiempo);

    });

    var start = document.querySelector('#start');

    start.addEventListener('click', () => {

        alert("Has iniciado el intervalo");

        intervalo();

    });

})