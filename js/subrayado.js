document.addEventListener("DOMContentLoaded", () => {
    const paragraphs = document.querySelectorAll(".cancion p");
    let currentIndex = 0;

    setInterval(() => {
        // Elimina el estilo anterior
        paragraphs.forEach(paragraph => {
            paragraph.innerHTML = paragraph.textContent; // Resetea el contenido original
        });

        // Selecciona un párrafo y una palabra aleatoria
        const paragraph = paragraphs[currentIndex];
        const words = paragraph.textContent.split(" ");
        const randomIndex = Math.floor(Math.random() * words.length);

        // Marca la palabra seleccionada
        words[randomIndex] = `<span class="highlight">${words[randomIndex]}</span>`;
        paragraph.innerHTML = words.join(" ");

        // Cambia al siguiente párrafo
        currentIndex = (currentIndex + 1) % paragraphs.length;
    }, 5000); // Cambia cada 5 segundos
});
