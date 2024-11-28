document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  // Mostrar resultados al hacer clic en la barra de búsqueda
  searchInput.addEventListener('focus', () => {
      searchResults.classList.remove('is-hidden');
  });

  // Ocultar resultados si se hace clic fuera de la barra de búsqueda y resultados
  document.addEventListener('click', (event) => {
      const isClickInside = searchInput.contains(event.target) || searchResults.contains(event.target);
      if (!isClickInside) {
          searchResults.classList.add('is-hidden');
      }
  });
});
