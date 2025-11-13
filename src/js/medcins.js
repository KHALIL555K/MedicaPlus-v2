const selectOption = document.getElementById('selectOption');
// les inputs : 
const nomInput = document.getElementById('nom');
const descriptionInput = document.getElementById('description')
const doctorsGrid = document.getElementById('doctorsGrid')
const image = document.getElementById('photo')

let specialites = JSON.parse(localStorage.getItem('specialites')) || [];
let medcins = JSON.parse(localStorage.getItem('medcins')) || [];

console.log(specialites);
console.log(selectOption);

const afficheSelect = () => {
    specialites.map((spec) =>
        selectOption.innerHTML += `<option value="${spec}">${spec}</option>`
    )
}

const getSelectedValue = () => {
    const selectedValue = selectOption.value;
    return selectedValue;

}

const FormAjouterMedcins = () => {
    
    const selectedValue = getSelectedValue();
    const files = image.files;

    const file = files[0]
    const reader = new FileReader();

    reader.onload = (e) => {
        const base64 = e.target.result;
        const medcin = {
            nom: nomInput.value,
            img: base64,
            specialite: selectedValue,
            description: descriptionInput.value,
            
        }

        medcins.push(medcin)

        localStorage.setItem('medcins', JSON.stringify(medcins));
        nomInput.value = '';
        description.value = '';
    }

    reader.readAsDataURL(file);

}


const afficheMedcins = () => {
    medcins.map((value) => {
        doctorsGrid.innerHTML += `
             <div class="container mx-auto">
                <div class="flex gap-6 max-w-4xl mx-auto">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img src="${value.img}" 
                     alt="Dr. Sophie Martin" 
                     class="w-full h-56 object-cover">
                <div class="p-6">
                    <h2 class="text-2xl font-bold text-gray-800 mb-3">${value.nom}</h2>
                    <span class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                        ${value.specialite}
                    </span>
                    <p class="text-gray-600 leading-relaxed">${value.description}</p>
                </div>
                
            </div>
         </div> `;
    })
}


afficheMedcins();
afficheSelect();