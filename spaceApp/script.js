const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=6";

// Using an asynchronous function to use the API 
async function listaImagenes () {
    try{ // Trying to make the petition
        const fetchImage = await fetch(url); //Using await to refer that we need to wait for something else to happend before make the petition.

        let dataImages = await fetchImage.json();

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

    }catch{ // If petition rejected, we manage it here
        
    }
};