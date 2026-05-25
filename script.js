// Función para cambiar el texto del botón
function cambiarTextoBoton() {
    // Seleccionar el botón por su ID
    let boton = document.getElementById("botonCita");
    
    // Cambiar el texto del botón
    boton.textContent = "¡Solicitado! Te contactaremos pronto";
    
    // Cambiar el color de fondo a verde
    boton.style.backgroundColor = "#28a745";
}
