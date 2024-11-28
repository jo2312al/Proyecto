const abrirModalBtn = document.querySelector("#abrirmodal");
    const cerrarModalBtn = document.querySelector("#cerrarmodal");
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
      window.location.href = "nueva-contrasenia.html";
    });

    x.addEventListener("click", () => {
      modal.close();
      modal.classList.remove("closing"); // Quitar clase de cierre
      window.location.href = "nueva-contrasenia.html";
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
    function moveToNext(current, nextFieldId) {
        // Si el campo actual tiene un valor, mover el foco al siguiente
        if (current.value.length === current.maxLength) {
          const nextField = document.getElementById(nextFieldId);
          if (nextField) {
            nextField.focus();
          }
        }
      }
      
      function collectCode() {
        // Obtener los valores de todos los inputs
        const inputs = document.querySelectorAll('.code-input input');
        let code = '';
        inputs.forEach(input => code += input.value);
        console.log("Código ingresado:", code);
      }
      document.querySelectorAll('.code-input input').forEach((input, index, inputs) => {
        input.addEventListener('keydown', (event) => {
          if (event.key === 'Backspace' && input.value === '') {
            const previous = inputs[index - 1];
            if (previous) {
              previous.focus();
            }
          }
        });
      });
      document.querySelectorAll('.boton-añadir').forEach(boton => {
        boton.addEventListener('click', function () {
            const icono = this.querySelector('.icono-reproductor');
            if (icono.src.includes('play-gris.svg')) {
                icono.src = 'img/pausa-morado.svg';
            } else {
                icono.src = 'img/play-gris.svg';
            }
        });
    });
    