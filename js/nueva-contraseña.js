// Lógica para validar las contraseñas y mostrar los modales correspondientes
document.getElementById('verificarContraseña').addEventListener('click', function() {
    const password1 = document.getElementById('password1').value.trim();
    const password2 = document.getElementById('password2').value.trim();

    // Verificar si las contraseñas están vacías
    if (password1 === '' || password2 === '') {
        alert('Ambos campos de contraseña son obligatorios.');
        return;
    }

    // Si las contraseñas no coinciden, mostrar el modal de error
    if (password1 !== password2) {
        const modalError = new Foundation.Reveal($('#modal-error'));
        modalError.open();
    } else {
        // Si las contraseñas coinciden, mostrar el modal de éxito (usando <dialog>)
        const modalExito = document.getElementById('modal-exito');
        modalExito.showModal(); // Abre el modal <dialog>

        // Cerrar el modal de éxito cuando se hace clic en "Cerrar"
        const cerrarModal = document.getElementById('cerrarmodal');
        cerrarModal.addEventListener('click', function() {
            modalExito.close();
            window.location.href = "index.html";
        });

        // Cerrar el modal de éxito cuando se hace clic en la "X"
        const closeButton = document.getElementById('x');
        closeButton.addEventListener('click', function() {
            modalExito.close();
            window.location.href = "index.html";
        });
    }
});
