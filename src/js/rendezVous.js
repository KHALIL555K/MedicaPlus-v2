const CardMedcins = document.getElementById('CardMedcins');
let NewForm = JSON.parse(localStorage.getItem('reservations')) || [];

function getInitials(name, last) {
    return `${name[0] || ''}${last[0] || ''}`.toUpperCase();
}

function formatDay(day) {
    return day || '';
}

function renderAppointments() {
    CardMedcins.innerHTML = '';
    if (NewForm.length === 0) {
        CardMedcins.innerHTML = `<p class="text-gray-500 col-span-full">Aucun rendez-vous enregistré.</p>`;
        return;
    }
    NewForm.forEach((appointment) => {
        const initials = getInitials(appointment.name, appointment.L_name);
        const formattedDate = formatDay(appointment.day);
        const card = document.createElement('div');
        card.className = 'appointment-card bg-blue-800 rounded-lg shadow p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl';
        card.innerHTML = `
            <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center">
                        <div>
                            <h3 class="text-lg font-bold text-gray-800">${appointment.name} ${appointment.L_name}</h3>
                            <p class="text-sm text-gray-600">${appointment.Doctor}</p>
                        </div>
                    </div>
                    <button onclick="deleteAppointment(${appointment.id})" class="text-red-500 hover:text-red-700">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
                <div class="space-y-2">
                    <div class="flex items-center text-sm text-gray-600">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span class="font-medium">${appointment.Doctor}</span>
                    </div>
                    <div class="flex items-center text-sm text-gray-600">
                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>${formattedDate}</span>
                    </div>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-200">
                    <p class="text-sm text-gray-700"><strong>Description:</strong></p>
                    <p class="text-sm text-gray-600 mt-1">${appointment.description}</p>
                </div>
            </div>
        `;
        CardMedcins.appendChild(card);
    });
}

function deleteAppointment(id) {
    if (!confirm("Voulez-vous supprimer ce rendez-vous ?")) return;
    NewForm = NewForm.filter(app => app.id !== id);
    localStorage.setItem("reservations", JSON.stringify(NewForm));
    renderAppointments();
}

renderAppointments();
