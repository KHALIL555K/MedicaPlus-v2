const medcinsTitle = document.getElementById('medcinsTitle');
const specialiteTitle = document.getElementById('specialiteTitle')
const rendezVousTitle = document.getElementById('rendezVousTitle')

let medcins = JSON.parse(localStorage.getItem('medcins')).length;
let reservations = JSON.parse(localStorage.getItem('reservations')).length;
let specialites = JSON.parse(localStorage.getItem('specialites')).length;

const totalMedcins = document.getElementById('totalMedcins').textContent = medcins ;

const totalSpecialites = document.getElementById('totalSpecialites').textContent = specialites ;  

medcinsTitle.textContent = medcins;
specialiteTitle.textContent = specialites;
rendezVousTitle.textContent = reservations;

let medcin = JSON.parse(localStorage.getItem('medcins'))


let specialite = JSON.parse(localStorage.getItem('specialites'))

const compterSpecialites = (medcin) => {
    const specialites = medcin.map(medcin => medcin.specialite);
    
    const frequency = specialites.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    return frequency;
}

const frequenceSpecialites = compterSpecialites(medcin);

console.log(frequenceSpecialites);

const labels = Object.keys(frequenceSpecialites);
const data = Object.values(frequenceSpecialites);

const pieCanvas = document.getElementById('pieCanvas').getContext('2d');

new Chart(pieCanvas, {
    type: "pie",
    data: {
        labels: labels,
        datasets: [{
            label: "Nombre de médecins",
            data: data,
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
            ],
            borderWidth: 4,
            borderColor: '#fff',
            hoverOffset: 15
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    padding: 10,
                    usePointStyle: true,
                    font: {
                        size: 12
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = Math.round((value / total) * 100);
                        return `${label}: ${value} médecins (${percentage}%)`;
                    }
                }
            }
        }
    }
});


