document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const alertContainer = document.getElementById('alertContainer');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        clearAlerts();

        if (validateInputs(emailInput, passwordInput)) {
            showAlert('success', 'Accediendo...');
            setTimeout(() => {
                window.location.href = 'Usuarios.html';
            }, 1000);
        }
    });

    function validateInputs(email, password) {
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validación de email

        if (!emailValue || !passwordValue) {
            showAlert('danger', 'Por favor, complete todos los campos.');
            return false;
        }
        if (!emailPattern.test(emailValue)) {
            showAlert('warning', 'Ingrese un correo válido.');
            return false;
        }
        if (passwordValue.length < 6) {
            showAlert('warning', 'La contraseña debe tener al menos 6 caracteres.');
            return false;
        }
        return true;
    }

    function showAlert(type, message) {
        clearAlerts();

        const alert = document.createElement('div');
        alert.className = `alert alert-${type} mt-3`;
        alert.innerText = message;
        alert.setAttribute('aria-live', 'assertive');

        alertContainer.appendChild(alert);
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }

    function clearAlerts() {
        alertContainer.innerHTML = '';
    }
});
