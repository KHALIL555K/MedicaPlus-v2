const InputName = document.getElementById("nom");
const InputLast = document.getElementById("prenom");
const TextArea = document.getElementById('message');
const spanName = document.getElementById('spanName');
const spanLastName = document.getElementById('spanLast');
const spanTextArea = document.getElementById("spanTextArea");

const selectDoctor = document.getElementById('selectDoctor');
const selectDate = document.getElementById('selectDate');
const Form = document.getElementById('Form_Id');

let NewForm = [];
let medcins = JSON.parse(localStorage.getItem('medcins')) || [];
// affiche les medcins et date :
// const afficheNomMedcins = () => {
//     if (medcins.length === 0) {
//         selectDoctor.innerHTML = `<option >-- rien de medcins --</option>`;
//     }

//     medcins.map((value) => {
//         selectDoctor.innerHTML += `<option value="${value.nom}">${value.nom}</option>  `
//     })
// };


const afficheNomMedcins = (jourSelectionne = '') => {
    selectDoctor.innerHTML = `<option value="">-- Choisir un médecin --</option>`;
    if (!jourSelectionne) {
        medcins.map((med) => {
            selectDoctor.innerHTML += `<option value="${med.nom}">${med.nom}</option>`;
        });
        return;
    }
    const filtered = medcins.filter(
        (med) => med.jours && med.jours.includes(jourSelectionne)
    );
    if (filtered.length === 0) {
        selectDoctor.innerHTML = `<option disabled>-- Aucun médecin disponible ce jour --</option>`;
        return;
    }
    filtered.map((med) => {
        selectDoctor.innerHTML += `<option value="${med.nom}">${med.nom}</option>`;
    });
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

selectDate.addEventListener('change', (e) => {
    const jour = e.target.value;
    afficheNomMedcins(jour);
});

function addForm(e) {
    e.preventDefault();

    const name = InputName.value.trim();
    const L_name = InputLast.value.trim();
    const day = selectDate.value;
    const Doctor = selectDoctor.value;
    const description = TextArea.value.trim();

    if (!confirm("Envoyer cette réservation ?")) return;

    const form = {
        id: Date.now(),
        name,
        L_name,
        Doctor,
        day,
        description,
    };

    NewForm.push(form);

    localStorage.setItem("reservations", JSON.stringify(NewForm));

    Form.reset();

    alert("Saved!!");

    console.log("Saved:", form);
}

afficheDate();
afficheNomMedcins();
Form.addEventListener('submit', addForm);
