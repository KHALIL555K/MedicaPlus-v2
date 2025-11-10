const avisCards = document.getElementById("avis__cards");
let slideIndex = 0;
let intervalId = null;
const cardsPerSlide = 3;
const medicinsCards = document.getElementById("medecins__card");
// section medecins

const medecinsCard = [
    {
        image: "assets/image/doctor.png",
        name: "Dr. KHALIL ZEGGANI",
        specialite: "Spécialité",
        description: "Description du médecin...",
        link: "#",
        nameLink: "Voir Plus",
    },
    {
        image: "assets/image/doctor.png",
        name: "Dr. KHALIL ZEGGANI",
        specialite: "Spécialité",
        description: "Description du médecin...",
        link: "#",
        nameLink: "Voir Plus",
    },
    {
        image: "assets/image/doctor.png",
        name: "Dr. KHALIL ZEGGANI",
        specialite: "Spécialité",
        description: "Description du médecin...",
        link: "#",
        nameLink: "Voir Plus",
    },

];


medecinsCard.map((value) => {
    medicinsCards.innerHTML += ` <div class="medecins__card">
                <img src="${value.image}" alt="" class="medecins__card-image">
                <div class="medecins__card-content">
                    <h3 class="medecins__card-name">${value.name}</h3>
                    <p class="medecins__card-specialite">${value.specialite}</p>
                    <p class="medecins__card-discription">${value.description}</p>
                    <a href="#" class="medecins__link">${value.nameLink}</a>
                </div>

            </div>`
});


//  section avis card
const avisCard = [
    {
        image: "assets/image/AnyConv.com__man.png",
        name: "KHALIL 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolor.",
        icons: "assets/image/star.png",
    },
    {
        image: "assets/image/AnyConv.com__man.png",
        name: "KHALIL 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolor. ",
        icons: "assets/image/star.png",
    },
    {
        image: "assets/image/AnyConv.com__man.png",
        name: "KHALIL 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolor. ",
        icons: "assets/image/star.png",
    },
    {
        image: "assets/image/AnyConv.com__man.png",
        name: "KHALIL 4",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolor.",
        icons: "assets/image/star.png",
    },
    {
        image: "assets/image/AnyConv.com__man.png",
        name: "KHALIL 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolor.",
        icons: "assets/image/star.png",
    },
    {
        image: "assets/image/AnyConv.com__man.png",
        name: "KHALIL 6",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, dolor.",
        icons: "assets/image/star.png",
    }
];

// Générer les cartes
avisCard.forEach((value) => {
    avisCards.innerHTML += ` 
        <div class="avis__card">
            <img src="${value.image}" alt="" class="avis__card-img">
            <h4 class="avis__card-title">${value.name}</h4>
            <p class="avis__card-description">${value.description}</p>
            <div class="avis__star">
                <img src="${value.icons}" alt="" class="avis__star-item">
                <img src="${value.icons}" alt="" class="avis__star-item">
                <img src="${value.icons}" alt="" class="avis__star-item">
                <img src="${value.icons}" alt="" class="avis__star-item">
            </div>
        </div>`;
});

const avisCardElement = document.querySelectorAll(".avis__card");

const showSlide = (index) => {
    const totalSlides = Math.ceil(avisCardElement.length / cardsPerSlide);

    // Gérer les limites
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    const startIndex = slideIndex * cardsPerSlide;
    const endIndex = startIndex + cardsPerSlide;

    avisCardElement.forEach(card => {
        card.classList.remove("displaySlide");
    });

    for (let i = startIndex; i < endIndex && i < avisCardElement.length; i++) {
        avisCardElement[i].classList.add("displaySlide");
    }
}

const prevSlide = () => {
    clearInterval(intervalId);
    showSlide(slideIndex - 1);
    intervalId = setInterval(nextSlide, 5000);
}

const nextSlide = () => {
    showSlide(slideIndex + 1);
}

const initializeSlider = () => {
    if (avisCardElement.length > 0) {
        showSlide(slideIndex);
        intervalId = setInterval(nextSlide, 5000);
    }
}

document.addEventListener("DOMContentLoaded", initializeSlider);

window.prevSlide = prevSlide;
window.nextSlide = nextSlide;

avisCards.addEventListener('mouseenter', () => clearInterval(intervalId));
avisCards.addEventListener('mouseleave', () => {
    intervalId = setInterval(nextSlide, 5000);
});


const rechercheDoctor = () => {
    let search = document.getElementById('search');
    localStorage.setItem('searchDoctor', search.value);
}



// darkmode 

const toggleDarkMode = () =>{
    document.body.classList.toggle("Dark")
}