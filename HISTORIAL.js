// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Maneja el evento de envío del formulario de opiniones
    document.getElementById("opinionForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Obtener los valores de los campos
        const travelDestination = document.getElementById("travelDestination").value;
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;

        // Validación simple
        if (!travelDestination || !rating || !comment) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Mostrar mensaje de éxito
        alert(`Opinión enviada:\nDestino: ${travelDestination}\nCalificación: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}\nComentario: ${comment}`);

        // Aquí se puede agregar lógica para enviar datos a un servidor o manejar la opinión
        // Por ahora, simplemente se añade a la lista de viajes

        // Crea un nuevo elemento para la lista de viajes
        const newTravel = document.createElement('div');
        newTravel.classList.add('list-group-item', 'list-group-item-action');
        newTravel.innerHTML = `
            <h5 class="mb-1">${travelDestination}</h5>
            <p class="mb-1">Fecha: ${new Date().toLocaleDateString()}</p>
            <small>Calificación: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</small>
            <p class="mt-2">${comment}</p>
        `;

        // Añade el nuevo viaje a la lista
        const travelList = document.querySelector('#historial-viajes .list-group');
        travelList.appendChild(newTravel);

        // Reinicia el formulario
        this.reset();
    });

    // Obtiene el botón de cerrar sesión
    const logoutButton = document.getElementById("logoutButton");

    // Agrega un evento de clic al botón de cerrar sesión
    logoutButton.addEventListener("click", function() {
        // Redirige al usuario a Login.html
        const confirmLogout = confirm("¿Estás seguro de que quieres cerrar sesión?");
        if (confirmLogout) {
            window.location.href = "Login.html";
        }
    });
});
