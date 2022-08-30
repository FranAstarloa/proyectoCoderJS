const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Enviando...';

const serviceID = 'default_service';
const templateID = 'template_js31jwq';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'informacion enviada!';
    Swal.fire({
        icon: 'correct',
        title: '¡Buenisimo!',
        text: 'La info se envio a tu email!'
    })
    }, (err) => {
    btn.value = 'Enviar informacion';
    
    Swal.fire({
        icon: 'error',
        title: '¡Uy!',
        text: "No ingresaste la informacion necesaria para recibir la informacion."
    })
    });
});