let movie;
let movies = [];
function saveData() {
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;

    if (!title || !description) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    var dataMovie = {
        titulo : title,
        descripcion : description
    };
    
    localStorage.setItem('movieData', JSON.stringify(dataMovie));

    movie = JSON.parse(localStorage.getItem('movieData'));
    movies.push(movie);
}

console.log(movies);



