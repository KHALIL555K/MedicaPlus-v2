const medecinsCards = document.getElementById("medecins__card");
const categorie = document.querySelectorAll("#categorie button");
let search = localStorage.getItem('searchDoctor')

const medecinsCard = [
    {
        image: "../assets/image/doctor.png",
        name: "Dr. Ahmed BENALI",
        specialite: "coeur",
        description: "Cardiologue - 15 ans d'expérience, spécialiste en chirurgie cardiaque",
        link: "Voir Plus"
    },
    {
        image: "../assets/image/doctor.png",
        name: "Dr. Samira KADDOUR",
        specialite: "poitrine",
        description: "Pneumologue - Expert en maladies respiratoires, 12 ans d'expérience",
        link: "Voir Plus"
    },
    {
        image: "../assets/image/doctor.png",
        name: "Dr. Karim ZERROUKI",
        specialite: "cancer",
        description: "Oncologue - Spécialiste en traitements anticancéreux, 18 ans d'expérience",
        link: "Voir Plus"
    },
    {
        image: "../assets/image/doctor.png",
        name: "Dr. Leila BOUDJEMAA",
        specialite: "diabete",
        description: "Diabétologue - Endocrinologue spécialisée, 10 ans d'expérience",
        link: "Voir Plus"
    },
    {
        image: "../assets/image/doctor.png",
        name: "Dr. Youssef CHERIF",
        specialite: "coeur",
        description: "Cardiologue interventionnel - 14 ans d'expérience en cathétérisme",
        link: "Voir Plus"
    },
    {
        image: "../assets/image/doctor.png",
        name: "Dr. Nadia TOUATI",
        specialite: "poitrine",
        description: "Pneumo-phtisiologue - 16 ans d'expérience en tuberculose et maladies pulmonaires",
        link: "Voir Plus"
    },
    {
        image: "../assets/image/doctor.png",
        name: "Dr. Mustapha SAIDI",
        specialite: "cancer",
        description: "Onco-hématologue - Spécialiste des cancers du sang, 20 ans d'expérience",
        link: "Voir Plus"
    },
    {
        image: "../assets/image/doctor.png",
        name: "Dr. Fatima MEZIANE",
        specialite: "diabete",
        description: "Endocrino-diabétologue - Nutritionniste, 11 ans d'expérience",
        link: "Voir Plus"
    },
    {
        image: "../assets/image/doctor.png",
        name: "Dr. Rachid HAMIDI",
        specialite: "coeur",
        description: "Rythmologue - Spécialiste des troubles du rythme cardiaque, 13 ans d'expérience",
        link: "Voir Plus"
    },
    {
        image: "../assets/image/doctor.png",
        name: "Dr. Salima ARABI",
        specialite: "poitrine",
        description: "Allergo-pneumologue - Expert en asthme et allergies, 9 ans d'expérience",
        link: "Voir Plus"
    },
    {
        image: "../assets/image/doctor.png",
        name: "Dr. Omar BOUKHEROUBA",
        specialite: "cancer",
        description: "Radiothérapeute - Spécialiste en radiothérapie oncologique, 17 ans d'expérience",
        link: "Voir Plus"
    },
    {
        image: "../assets/image/doctor.png",
        name: "Dr. Khadidja BELHADJ",
        specialite: "diabete",
        description: "Pédiatre diabétologue - Spécialiste du diabète infantile, 15 ans d'expérience",
        link: "Voir Plus"
    }
];

const afficheSearch = () => {
    medecinsCards.innerHTML = '';

    if (!search) {
        medecinsCards.innerHTML = '<p>Aucune recherche trouvée.</p>';
        return;
    }
    
    const results = medecinsCard.filter((value) =>
        value.name.toLowerCase().includes(search.toLowerCase())
    );

    if (results.length === 0) {
        medecinsCards.innerHTML = '<p>Aucun médecin trouvé.</p>';
        return;
    }

    console.log(search)
    console.log(results)

    results.map((value) => {
        medecinsCards.innerHTML += `
            <div class="medecins__card">
                <img src="${value.image}" alt="${value.name}" class="medecins__card-image">
                <div class="medecins__card-content">
                    <h3 class="medecins__card-name">${value.name}</h3>
                    <p class="medecins__card-specialite">${value.specialite}</p>
                    <p class="medecins__card-description">${value.description}</p>
                    <a href="${value.link}" class="medecins__link">Voir plus</a>
                </div>
            </div>
        `;
    });
};





const filterDoctor = (button) => {

    const specialite = button.getAttribute('data-specialite');
    medecinsCards.innerHTML = ``;

    medecinsCard.map((value) => {
        if (specialite == 'tout' || value.specialite.toLocaleLowerCase() === specialite.toLocaleLowerCase()) {
            medecinsCards.innerHTML += `<div class="medecins__card">
                <img src="${value.image}" alt="" class="medecins__card-image">
                <div class="medecins__card-content">
                    <h3 class="medecins__card-name">${value.name}</h3>
                    <p class="medecins__card-specialite">${value.specialite}</p>
                    <p class="medecins__card-discription">${value.description}</p>
                    <a href="#" class="medecins__link">${value.link}</a>
                </div>
            </div>`
        }
    });

    document.querySelectorAll('.categorie__list-item').forEach(item => {
        item.classList.remove('categorie__list-active');
    })
    button.classList.add('categorie__list-active')
}




afficheSearch();   