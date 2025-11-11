const InputName = document.getElementById("nom");
const InputLast = document.getElementById("prenom");
const TextArea = document.getElementById('message');
const spanName = document.getElementById('spanName');
const spanLastName = document.getElementById('spanLast');
const spanTextArea = document.getElementById("spanTextArea");

const selectDoctor = document.getElementById('selectDoctor');
const selectDate = document.getElementById('selectDate')

let medcins = JSON.parse(localStorage.getItem('medcins')) || [];
// affiche les medcins et date :
const afficheNomMedcins = () => {
    if (medcins.length === 0) {
        selectDoctor.innerHTML = `<option >-- rien de medcins --</option>`;
    }

    medcins.map((value) => {
        selectDoctor.innerHTML += `<option value="${value.nom}">${value.nom}</option>  `
    })
};

const afficheDate = () => {
    const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    jours.map((value) => {
        selectDate.innerHTML += `<option value="${value}">${value}</option> `
    })
};


// console.log(medcins)


const formSubmit = (event) => {
    event.preventDefault();
    if (
        InputName.value === '' ||
        InputLast.value === '' ||
        TextArea.value === ''
    ) {
        spanName.innerText = "Obligatoire*";
        spanLastName.innerText = "Obligatoire*";
        spanTextArea.innerText = "Obligatoire*";
        spanName.style.color = spanLastName.style.color = spanTextArea.style.color = 'red';
        return;
    }
};


afficheDate();
afficheNomMedcins();