const selectOption = document.getElementById('selectOption');
const nomInput = document.getElementById('nom');
const descriptionInput = document.getElementById('description')
const doctorsGrid = document.getElementById('doctorsGrid')
const image = document.getElementById('photo')

let specialites = JSON.parse(localStorage.getItem('specialites')) || [];
let medcins = JSON.parse(localStorage.getItem('medcins')) || [];

const afficheSelect = () => {
    selectOption.innerHTML = '<option value="">-- Sélectionner une spécialité --</option>';
    specialites.map((spec) =>
        selectOption.innerHTML += `<option value="${spec}">${spec}</option>`
    )
}

// const getSelectedValue = () => {
//     return selectOption.value;
// }

const FormAjouterMedcins = () => {

    const selectedValue = selectOption.value;
    const files = image.files;

    if (!files || files.length === 0) {
        alert('Veuillez sélectionner une image');
        return;
    }

    const file = files[0]
    const reader = new FileReader();

    reader.onload = (e) => {
        const base64 = e.target.result;
        const medcin = {
            id: Date.now(),
            nom: nomInput.value,
            img: base64,
            specialite: selectedValue,
            description: descriptionInput.value,

        }

        medcins.push(medcin)

        localStorage.setItem('medcins', JSON.stringify(medcins));

        nomInput.value = '';
        descriptionInput.value = '';
        image.value = '';
        selectOption.value = '';

        afficheMedcins();

        alert('Médecin ajouté avec succès!');
    }

    reader.readAsDataURL(file);
}

const supprimerMedcin = (id) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce médecin?')) {
        return;
    }

    medcins = medcins.filter(med => med.id !== id);
    localStorage.setItem('medcins', JSON.stringify(medcins));
    afficheMedcins();
}

const afficheMedcins = () => {
    doctorsGrid.innerHTML = '';

    if (medcins.length === 0) {
        doctorsGrid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-gray-500 text-lg">Aucun médecin enregistré pour le moment</p>
            </div>
        `;
        return;
    }

    medcins.map((value) => {
        doctorsGrid.innerHTML += `
            <div class="doctor-card bg-white rounded-2xl shadow-lg overflow-hidden relative">
                <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-6 pb-16 relative">
                    <div class="flex justify-start pl-4">
                        <img src="${value.img}" 
                             alt="${value.nom}" 
                             class="profile-img">
                    </div>
                </div>
                
                <div class="p-6 pt-8 text-left -mt-8">
                    <h2 class="text-xl font-bold text-gray-800 mb-2">${value.nom}</h2>
                    <span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                        ${value.specialite}
                    </span>
                    <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">${value.description}</p>
                </div>
            </div>
        `;
    })
}

afficheSelect();
afficheMedcins();