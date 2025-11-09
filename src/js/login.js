const email = document.getElementById('email')
const password = document.getElementById('password')
const msg = document.getElementById('msg')


const formSubmit = (e) => {
    e.preventDefault();

    if (email.value === 'admin@gmail.com' && password.value === 'admin') {
        window.location.href = 'pages/dashboard.html'
    } else {
        email.value = ''
        password.value = ''
        msg.innerHTML = `<span class='text-red-600 text-md'>email ou mot de passe faux</span>`
    }
};

