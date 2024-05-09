'use Strict'

/*We can use local storage to save information in our borwser in a sesion mode and make that info
to say there and available during our navigation and after going trough different pages. */

// To see if local Storage is available 

if(typeof(Storage) !== 'undefined') {
    console.log('El localstorage esta disponible')
} else {
    console.log('Incompatible localstorage ')
}

// Save data

localStorage.setItem('titulo', 'Curso de Js ');

// Recovering an element 

console.log(localStorage.getItem("titulo"));
document.querySelector('#pelicula').innerHTML = localStorage.getItem('titulo');

// Saving objects
// Converting JSON object in string format

var user = {
    nombre : 'German',
    email: 'ger@gmail.com',
    web: 'ger.com'
};

localStorage.setItem('usuario', JSON.stringify(user));

var userjs = JSON.parse(localStorage.getItem('usuario'));

console.log(userjs);
document.querySelector('#pelicula').append(" " + userjs.nombre + " " + userjs.email);

//Deleting on  local storage

localStorage.removeItem('usuario');
localStorage.clear();