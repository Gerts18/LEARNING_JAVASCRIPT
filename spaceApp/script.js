const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";

// Part of the code used to get data from an API
let listaImagenes = () => {
    fetch(url) //Accesing to the API
    .then( //Used to handle the response if resolved.
        response => response.json()
    )
    .then(
        dataImages => {
            console.log(dataImages); // Being sure if we are getting data.

            const card = document.querySelector("[data-ul]");//Accessing the section where the data obtained from the API will be placed.

            dataImages.forEach(element => { // Doing the same for each element 
                const content = // Modifying my content with data obtained.
                `
                <li class="card">
                    <img class="card__image" src=${element.hdurl} alt=${element.copyright} >
                    <h3 class="card__title">${element.title}</h3>
                </li>
                `;

                card.innerHTML = card.innerHTML + content; //Modifying the DOM 
            });
        }
    )
    .catch( //Used to handle the response if rejected.

    )
};

