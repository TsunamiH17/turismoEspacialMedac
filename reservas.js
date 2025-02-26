document.getElementById("reservaForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    // Obten los valores de los campos
    const destino = document.getElementById("destino").value;
    const fecha = document.getElementById("fecha").value;
    const pasajeros = document.getElementById("pasajeros").value;

    // Valida simple
    if (!destino || !fecha || !pasajeros) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Muestra mensaje de éxito (puedes personalizarlo)
    alert(`Reserva realizada:\nDestino: ${destino}\nFecha: ${fecha}\nPasajeros: ${pasajeros}`);
    
});
    document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el botón de cerrar sesión
    const logoutButton = document.getElementById("logoutButton");

    // Agrega un evento de clic al botón
    logoutButton.addEventListener("click", function() {
        // Redirige al usuario a Login.html
        window.location.href = "Login.html";
    });
});
