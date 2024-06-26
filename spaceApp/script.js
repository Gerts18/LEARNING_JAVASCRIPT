const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";

// Part of the code used to get data from an API
let listaImagenes = () => {
    fetch(url) //Accesing to the API
    .then( //Used to handle the response if resolved.
        response => response.json()
    )
    .then (
        dataImages => {
            console.log(dataImages)
        }
    )
    .catch( //Used to handle the response if rejected.

    )
};

