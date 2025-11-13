const specialiteInput = document.getElementById('specialite');
const btnAjouter = document.getElementById('btnAjouter');
const listSpecialite = document.getElementById('listSpecialite')

let specialites = JSON.parse(localStorage.getItem('specialites')) || [];


const afficherSpecialites = () => {

    specialites.forEach((spec, id) => {
        const div = document.createElement('div');
        div.className = 'specialite-item';
        div.innerHTML = `
        <span>${spec}</span>
        <div>
            <button onclick="modifierSpecialite(${id})">Modifier</button>
            <button onclick="supprimerSpecialite(${id})">Supprimer</button>
          </div>`
        listSpecialite.appendChild(div);
        console.log(id)
    })
}

// formulaire pour ajouter specialite
const formAjouter = () => {
    const valeur = specialiteInput.value.trim();
    if (valeur) {
        specialites.push(valeur);
        localStorage.setItem('specialites', JSON.stringify(specialites))
        specialiteInput.value = '';
        afficherSpecialites();
    }

}


// supprimer specialite
const supprimerSpecialite = (id) => {
    let medcins = JSON.parse(localStorage.getItem('medcins')) || [];

    const specialiteASupprimer = specialites[id];

    const utilisee = medcins.some(medcin => medcin.specialite === specialiteASupprimer);

    if (utilisee) {
        alert(`Impossible de supprimer la spécialité "${specialiteASupprimer}" car elle est utilisée par un médecin.`);
        return;
    }

    if (confirm(`Voulez-vous vraiment supprimer la spécialité "${specialiteASupprimer}" ?`)) {
        specialites.splice(id, 1);
        localStorage.setItem('specialites', JSON.stringify(specialites));
        afficherSpecialites();
    }
};


const modifierSpecialite = (id) => {
    specialiteInput.value = specialites[id];

    btnAjouter.textContent = 'Modifier';


    btnAjouter.onclick = function () {
        const nouvelleValeur = specialiteInput.value.trim();
        if (nouvelleValeur) {
            specialites[id] = nouvelleValeur;
            localStorage.setItem('specialites', JSON.stringify(specialites))
            afficherSpecialites();

            specialiteInput.value = '';
            btnAjouter.textContent = 'Ajouter'
            btnAjouter.onclick = formAjouter;
        }
    }
}




afficherSpecialites();

