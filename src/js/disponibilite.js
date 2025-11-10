const CardMedcins = document.getElementById('CardMedcins');

console.log(CardMedcins)

let medcins = JSON.parse(localStorage.getItem('medcins')) || [];

const afficheMedcins = () => {
    medcins.map((value) => {
        CardMedcins.innerHTML += `
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
                <div>
                    
                </div>
            </div>
    </div>`
    })
}

afficheMedcins();