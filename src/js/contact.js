const InputName = document.getElementById("nom");
const InputLast = document.getElementById("prenom");
const InputTelephone = document.getElementById("telephone");
const InputEmail = document.getElementById("email");
const TextArea = document.getElementById('message');
const spanName = document.getElementById('spanName');
const spanLastName = document.getElementById('spanLast');
const spanTelephone = document.getElementById('spanTelephone');
const spanEmail = document.getElementById("spanEmail");
const spanTextArea = document.getElementById("spanTextArea");
const listRendez = document.getElementById("list");

let users = JSON.parse(localStorage.getItem('users')) || [];

// Vérifie le format de l'email
const changerInputEmail = () => {
    if (!InputEmail.value.includes("@gmail.com")) {
        spanEmail.innerText = `Doit être avec @gmail.com`;
        spanEmail.style.color = 'red';
    } else {
        spanEmail.style.color = "green";
        spanEmail.innerText = `C'EST BIEN`;
    }
};



const formSubmit = (event) => {
    event.preventDefault();


    if (
        InputName.value === '' ||
        InputLast.value === '' ||
        InputEmail.value === '' ||
        InputTelephone.value === '' ||
        TextArea.value === ''
    ) {
        spanName.innerText = "Obligatoire*";
        spanLastName.innerText = "Obligatoire*";
        spanTelephone.innerText = "Obligatoire*";
        spanEmail.innerText = "Obligatoire*";
        spanTextArea.innerText = "Obligatoire*";
        spanName.style.color = spanEmail.style.color = spanLastName.style.color = spanTelephone.style.color = spanTextArea.style.color = 'red';
        return;
    }

    registerDonner();
};


const registerDonner = () => {
    let user = {
        name: InputName.value,
        lastName: InputLast.value,
        telephone: InputTelephone.value,
        email: InputEmail.value,
        message: TextArea.value,
    };

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    afficherRendezVous();


    InputName.value = "";
    InputLast.value = "";
    InputTelephone.value = "";
    InputEmail.value = "";
    TextArea.value = "";
};


const afficherRendezVous = () => {
    listRendez.innerHTML = '';

    if (users.length === 0) {
        listRendez.innerHTML = `<p>Aucun rendez-vous</p>`;
        return;
    }

    users.forEach((value) => {
        listRendez.innerHTML += `
            <div class="card">
                <div class="card__header">
                    <h2 class="card__name">${value.name} ${value.lastName}</h2>
                    <p class="card__contact">Contact professionnel</p>
                </div>
                <div class="card__body">
                    <div class="card__info">
                        <span class="card__icon">📞</span>
                        <span class="card__label">Téléphone:</span>
                        <span class="card__value">${value.telephone}</span>
                    </div>
                    <div class="card__info">
                        <span class="card__icon">✉️</span>
                        <span class="card__label">Email:</span>
                        <span class="card__value">${value.email}</span>
                    </div>
                    <div class="card__message">
                        <span class="card__label">Message:</span>
                        <span class="card__value">${value.message}</span>
                    </div>
                </div>
            </div>
        `;
    });
};



afficherRendezVous();