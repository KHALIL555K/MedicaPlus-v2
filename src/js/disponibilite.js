const CardMedcins = document.getElementById('CardMedcins');
const selectOption = document.getElementById('selectOption');
const Card = document.getElementById('Card');
const daysContainer = document.getElementById('daysContainer');

let medcins = JSON.parse(localStorage.getItem('medcins')) || [];

const afficheNomMedcins = () => {
    selectOption.innerHTML = '<option value="">Sélectionnez un médecin</option>';

    medcins.forEach((value) => {
        selectOption.innerHTML += `<option value="${value.nom}">${value.nom}</option>`;
    });
};

const getSelectedValue = () => {
    return selectOption.value;
};

const afficheMedcin = () => {
    const nomMedcins = getSelectedValue();

    if (!nomMedcins) {
        Card.innerHTML = '';
        daysContainer.innerHTML = '';
        return;
    }

    const medecinTrouve = medcins.find(medecin => medecin.nom === nomMedcins);

    if (medecinTrouve) {
        Card.innerHTML = `
            <div class="max-w-sm mx-auto mt-8 bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                    src="${medecinTrouve.img}" 
                    alt="${medecinTrouve.nom}" 
                    class="w-full h-48 object-cover"
                />
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">
                        ${medecinTrouve.nom}
                    </h3>
                    <p class="text-gray-600 mb-3">
                        <span class="font-medium text-gray-700">Spécialité :</span> ${medecinTrouve.specialite}
                    </p>
                    <p class="text-gray-600 mb-3">
                        <span class="font-medium text-gray-700">Description :</span> ${medecinTrouve.description}
                    </p>
                </div>
            </div>`;

        JoursDisponibilite(medecinTrouve);
    }
};

const JoursDisponibilite = (medecinTrouve) => {
    const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

    daysContainer.innerHTML = `
        <div class="mb-2">
            <h3 class="text-lg font-semibold text-gray-900 mb-3">Jours de disponibilité</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                <form id="formSpecialites">
                    ${jours.map(jour => `
                        <label class="flex items-center space-x-2 cursor-pointer p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                            <input 
                                type="checkbox" 
                                name="jours" 
                                value="${jour}" 
                                ${medecinTrouve.jours && medecinTrouve.jours.includes(jour) ? 'checked' : ''}
                                class="rounded text-blue-500 focus:ring-blue-500"
                            >
                            <span class="text-gray-700">${jour}</span>
                        </label>`).join('')}
                </form>
            </div> 
        </div>
        <button class="bg-blue-500 rounded-2xl text-white px-8 py-2 hover:bg-blue-600 transition-colors" 
                onclick="ValidationJour('${medecinTrouve.nom}')">
            Ajouter Disponibilité
        </button>`;
};

const ValidationJour = (nomMedecin) => {
    const checkboxes = document.querySelectorAll('input[name="jours"]:checked');
    const valeurs = Array.from(checkboxes).map(cb => cb.value);

    console.log('Jours sélectionnés:', valeurs, 'pour le médecin:', nomMedecin);

    const indexMedecin = medcins.findIndex(medecin => medecin.nom === nomMedecin);

    if (indexMedecin !== -1) {
        medcins[indexMedecin].jours = valeurs;
        localStorage.setItem('medcins', JSON.stringify(medcins));
        alert(`Jours de disponibilité mis à jour pour ${nomMedecin}`);
        console.log('Médecin mis à jour:', medcins[indexMedecin]);
    }
};

selectOption.addEventListener('change', afficheMedcin);
afficheNomMedcins();
