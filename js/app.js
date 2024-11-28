// Seleccionar todos los botones con la clase "change-icon"
document.querySelectorAll(".change-icon").forEach(button => {
  button.addEventListener("click", function () {
    // Seleccionar la imagen dentro del botón actual
    const icono = button.querySelector("img");
    if (icono) {
      // Cambiar la imagen según la condición
      if (icono.src.includes("anadir.svg")) {
        icono.src = "img/anadido.svg"; // Cambia al segundo icono
      } else {
        icono.src = "img/anadir.svg"; // Vuelve al primer icono
      }
    }
  });
});


  
$(document).foundation();

document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.querySelector('.play-button');
  const playIcon = playButton.querySelector('.play-icon');
  const sliderHandle = document.querySelector('.slider-handle');
  const sliderFill = document.querySelector('.slider-fill');
  const slider = document.querySelector('.slider');
  const audio = document.getElementById('audio');

  let isPlaying = false; // Estado de reproducción

  // Reproducir/Pausar la canción al hacer clic en el botón
  playButton.addEventListener('click', () => {
      if (isPlaying) {
          audio.pause(); // Pausar la canción
          playIcon.src = "img/play.svg";
          playIcon.alt = "Reproducir";
      } else {
          audio.play(); // Reproducir la canción
          playIcon.src = "img/pausa.svg";
          playIcon.alt = "Pausar";
      }
      isPlaying = !isPlaying;
  });

  // Actualizar el slider mientras se reproduce la canción
  audio.addEventListener('timeupdate', () => {
      if (!isNaN(audio.duration)) {
          const percentage = (audio.currentTime / audio.duration) * 100; // Calcular el porcentaje de avance
          updateSliderPosition(percentage);
      }
  });

  // Mover el slider manualmente y actualizar el tiempo de la canción
  sliderHandle.addEventListener('mousedown', (event) => {
      document.addEventListener('mousemove', updateSlider);
      document.addEventListener('mouseup', () => {
          document.removeEventListener('mousemove', updateSlider);
      });
  });

  function updateSlider(event) {
      const sliderRect = slider.getBoundingClientRect();
      const mouseX = event.clientX - sliderRect.left;
      const newValue = Math.min(Math.max(mouseX, 0), sliderRect.width);
      const percentage = (newValue / sliderRect.width) * 100;

      // Actualizar el slider y el progreso de la canción
      updateSliderPosition(percentage);
      audio.currentTime = (percentage / 100) * audio.duration;
  }

  function updateSliderPosition(percentage) {
      sliderHandle.style.left = `${percentage}%`;
      sliderFill.style.width = `${percentage}%`;
  }
});
 // Obtener la referencia del cuadro de descripción
 const tooltip = document.getElementById('tooltip');

 // Agregar eventos a todas las imágenes con atributo alt
 document.querySelectorAll('img[alt]').forEach(img => {
   // Mostrar la descripción al pasar el cursor
   img.addEventListener('mouseover', (event) => {
     const description = img.getAttribute('alt');
     tooltip.textContent = description;
     tooltip.style.display = 'block';
   });

   // Actualizar la posición del tooltip mientras el cursor se mueve
   img.addEventListener('mousemove', (event) => {
     tooltip.style.left = event.pageX + 10 + 'px';
     tooltip.style.top = event.pageY + 10 + 'px';
   });

   // Ocultar el tooltip cuando el cursor salga de la imagen
   img.addEventListener('mouseout', () => {
     tooltip.style.display = 'none';
   });
 });