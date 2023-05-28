// Obtener referencia a los elementos del DOM
const form = document.getElementById('formulario');
const inputNombre = document.getElementById('nombre');
const inputEmail = document.getElementById('email');
const btnSuscribirse = document.getElementById('suscribirse');

// Manejador de evento para el envío del formulario de suscripción
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Validar los campos del formulario
  const nombre = inputNombre.value.trim();
  const email = inputEmail.value.trim();

  if (nombre === '' || email === '') {
    alert('Por favor, completa todos los campos');
    return;
  }

  // Enviar los datos de suscripción al backend (simulación)
  enviarSuscripcion(nombre, email);
  form.reset(); // Limpiar el formulario después del envío
});

// Función para enviar los datos de suscripción al backend (simulación)
function enviarSuscripcion(nombre, email) {
  // Aquí puedes realizar una llamada AJAX al backend o realizar cualquier otra acción necesaria
  // Por ejemplo, enviar los datos mediante una petición HTTP POST
  
  // Simulación de envío exitoso
  alert(`¡Gracias por suscribirte, ${nombre}! Recibirás las últimas noticias y actualizaciones por correo electrónico.`);
}