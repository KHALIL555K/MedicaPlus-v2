const InputName = document.getElementById("nom");
const InputLast = document.getElementById("prenom");
const TextArea = document.getElementById('message');
const spanName = document.getElementById('spanName');
const spanLastName = document.getElementById('spanLast');
const spanTextArea = document.getElementById("spanTextArea");
const selectDoctor = document.getElementById('selectDoctor');
const selectDate = document.getElementById('selectDate');
const doctorGroup = document.getElementById('doctorGroup');
const submitGroup = document.getElementById('submitGroup');
const Form = document.getElementById('Form_Id');

let NewForm = JSON.parse(localStorage.getItem('reservations')) || [];
let medcins = JSON.parse(localStorage.getItem('medcins')) || [];

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
        selectDate.innerHTML += `<option value="${value}">${value}</option>`;
    });
};

const checkFormCompletion = () => {
    const dateSelected = selectDate.value !== '';
    const doctorSelected = selectDoctor.value !== '';
    if (dateSelected && doctorSelected) {
        submitGroup.classList.remove('hidden');
    } else {
        submitGroup.classList.add('hidden');
    }
};

selectDate.addEventListener('change', (e) => {
    const jour = e.target.value;
    if (jour) {
        afficheNomMedcins(jour);
        doctorGroup.classList.remove('hidden');
    } else {
        doctorGroup.classList.add('hidden');
        submitGroup.classList.add('hidden');
    }
    checkFormCompletion();
});

selectDoctor.addEventListener('change', () => {
    checkFormCompletion();
});

function addForm(e) {
    e.preventDefault();
    const name = InputName.value.trim();
    const L_name = InputLast.value.trim();
    const day = selectDate.value;
    const Doctor = selectDoctor.value;
    const description = TextArea.value.trim();
    if (!name || !L_name || !description) {
        spanName.innerText = name ? "" : "Obligatoire*";
        spanLastName.innerText = L_name ? "" : "Obligatoire*";
        spanTextArea.innerText = description ? "" : "Obligatoire*";
        spanName.style.color = spanLastName.style.color = spanTextArea.style.color = 'red';
        return;
    }
    if (!confirm("Envoyer cette réservation ?")) return;
    const form = { id: Date.now(), name, L_name, Doctor, day, description };
    const stored = JSON.parse(localStorage.getItem('reservations')) || [];
    stored.push(form);
    localStorage.setItem("reservations", JSON.stringify(stored));
    NewForm = stored;
    Form.reset();
    doctorGroup.classList.add('hidden');
    submitGroup.classList.add('hidden');
    alert("Saved!!");
    console.log("Saved:", form);
}

afficheDate();
Form.addEventListener('submit', addForm);
