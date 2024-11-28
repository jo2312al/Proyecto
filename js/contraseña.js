    const abrirModalBtn = document.querySelector("#abrirmodal");
    const cerrarModalBtn = document.querySelector("#cerrarmodal");
    const reenviarModalBtn = document.querySelector("#reenviarmodal");
    const x = document.querySelector("#x");
    const modal = document.querySelector("#modal");
    function validarCampos() {
      let esValido = true;
      const inputs = document.querySelectorAll(".boxtext");
      
      inputs.forEach((input) => {
        const errorSpan = input.nextElementSibling;

        if (input.value.trim() === "") {
          input.classList.add("is-invalid");
          if (errorSpan) errorSpan.style.display = "block";
          esValido = false;
        } else {
          input.classList.remove("is-invalid");
          if (errorSpan) errorSpan.style.display = "none";
        }
      });

      return esValido;
    }

    reenviarModalBtn.addEventListener("click", () => {
        // Añadir clase de cierre para animar
        modal.classList.add("closing");
        
        // Esperar la animación de cierre
        setTimeout(() => {
          modal.close(); // Cerrar el modal
          modal.classList.remove("closing"); // Quitar clase de cierre
          modal.showModal(); // Reabrir el modal
          modal.classList.add("opening"); // Añadir clase de apertura
          
          // Eliminar clase de apertura después de la animación
          setTimeout(() => modal.classList.remove("opening"), 300); // Duración de la animación
        }, 300); // Duración de la animación de cierre
      });
    // Evento para abrir el modal
    abrirModalBtn.addEventListener("click", () => {
      if (validarCampos()) {
        modal.showModal();
        modal.classList.add("opening"); // Añadir clase de apertura
      } else {
        alert("Por favor, completa todos los campos antes de continuar.");
      }
    });
    cerrarModalBtn.addEventListener("click", () => {
      modal.close();
      modal.classList.remove("closing"); // Quitar clase de cierre
      window.location.href = "codigo.html";
    });

    x.addEventListener("click", () => {
      modal.close();
      modal.classList.remove("closing"); // Quitar clase de cierre
      window.location.href = "codigo.html";
    });
    document.querySelectorAll(".boxtext").forEach((input) => {
      input.addEventListener("input", () => {
        const errorSpan = input.nextElementSibling;

        if (input.value.trim() !== "") {
          input.classList.remove("is-invalid");
          if (errorSpan) errorSpan.style.display = "none";
        }
      });
    });