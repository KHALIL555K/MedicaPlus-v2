const medecinsCards = document.getElementById("medecins__card");
const categories = document.querySelector("#categories");

let search = localStorage.getItem('searchDoctor')
let specialites = JSON.parse(localStorage.getItem('specialites')) || [];

const afficheSpecialites = () => {
    specialites.map((value) => {
        categories.innerHTML +=`  
                    <button class="categorie__list-item " data-specialite="tout"
                    onclick="filterDoctor(this)">${value}</button> 
                    `;
    });
}


const afficheDoctor = () => {
    let medcins = JSON.parse(localStorage.getItem('medcins')) || [];

    medecinsCards.innerHTML = '';

    medcins.map((value) => {
        medecinsCards.innerHTML += `
            <div class="medecins__card">
                <img src="${value.img}" alt="${value.nom}" class="medecins__card-image">
                <div class="medecins__card-content">
                    <h3 class="medecins__card-name">${value.nom}</h3>
                    <p class="medecins__card-specialite">${value.specialite}</p>
                    <p class="medecins__card-description">${value.description}</p>
                </div>
            </div>
        `;
    });
};


afficheDoctor();   
afficheSpecialites();