// Define la función setupModal()
function setupModal() {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    var modalContent = document.getElementById("modal-content");
    var explanation = document.getElementById("explanation");

    var gallery = document.getElementById("gallery");
    var images = gallery.getElementsByTagName("img");

    // Objeto con descripciones asociadas a nombres de archivo de imágenes
    var imageDescriptions = {
        "antigua.jpg": "Descripción de la imagen 1",
        "imagen2.jpg": "Descripción de la imagen 2",
        // Añade más descripciones según sea necesario
    };

    // Oculta el modal al principio
    modal.style.display = "none";

    // Agrega un evento de clic a cada imagen
    Array.from(images).forEach(function(img) {
        img.addEventListener("click", function() {
            // Muestra el modal
            modal.style.display = "block";

            // Obtiene el nombre de archivo de la imagen
            var imageName = this.src.split('/').pop();

            // Cambia la imagen en el modal
            modalImage.innerHTML = '<img src="' + this.src + '" style="width: 100%; height: 100%;">';

            // Cambia la descripción en el modal si está disponible
            if (imageDescriptions[imageName]) {
                explanation.textContent = imageDescriptions[imageName];
            } else {
                explanation.textContent = "No hay descripción disponible para esta imagen.";
            }
        });
    });

    // Cierra el modal al hacer clic en cualquier parte del modal
    modal.addEventListener("click", function() {
        modal.style.display = "none";
    });



   
}

// Llama a la función setupModal() cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    setupModal(); // Llama a la función setupModal() aquí
});
