const medcinsTitle = document.getElementById('medcinsTitle');
const specialiteTitle = document.getElementById('specialiteTitle')
const rendezVousTitle = document.getElementById('rendezVousTitle')

let medcins = JSON.parse(localStorage.getItem('medcins')).length;
let reservations = JSON.parse(localStorage.getItem('reservations')).length;
let specialites = JSON.parse(localStorage.getItem('specialites')).length;

console.log(medcins , reservations , specialites)


medcinsTitle.textContent = medcins ;
specialiteTitle.textContent = specialites ; 
rendezVousTitle.textContent = reservations;





// console.log('hello')

