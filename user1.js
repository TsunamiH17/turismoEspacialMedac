document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logoutButton');

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        // Confirmar si el usuario realmente quiere cerrar sesión
        const confirmLogout = confirm("¿Estás seguro de que quieres cerrar sesión?");
        if (confirmLogout) {
            // Realiza la lógica de cierre de sesión aquí (si es necesario)
            // Por ejemplo, limpiar los datos de sesión o cookies

            // Redirigir a la página de inicio de sesión
            window.location.href = 'login.html';
        }
    };

    // Agregar el evento de clic al botón de cierre de sesión
    logoutButton.addEventListener('click', handleLogout);

    // Función para cargar notificaciones dinámicamente (ejemplo)
    const loadNotifications = () => {
        const notifications = [
            {
                message: "Recordatorio: Check-in para vuelo a Marte",
                date: "Fecha límite: 14 Marzo 2323",
                image: "img/cohete.jpg"
            },
            {
                message: "Oferta especial: 20% de descuento en excursiones exoplanetarias",
                date: "Válido hasta: 30 Abril 2323",
                image: "img/cohete.webp"
            }
        ];

        const notificationsContainer = document.querySelector('.notificaciones-list'); // Asegúrate de que el selector sea correcto

        notifications.forEach(notification => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item neon-item d-flex align-items-center';
            listItem.innerHTML = `
                <img src="${notification.image}" alt="Notificación" class="img-thumbnail me-3">
                <div>
                    <strong>${notification.message}</strong>
                    <p class="notification-details">${notification.date}</p>
                </div>
            `;
            notificationsContainer.appendChild(listItem);
        });
    };

    // Llamar a la función para cargar las notificaciones al inicio
    loadNotifications();
});
