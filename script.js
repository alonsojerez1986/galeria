function openModal(src, captionText) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var caption = document.getElementById("caption");
    
    modal.style.display = "flex";
    modalImg.src = src;
    caption.innerHTML = captionText;

    setTimeout(function() {
        modal.classList.add("show");
    }, 10); // Small delay to ensure transition
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.classList.remove("show");
    setTimeout(function() {
        modal.style.display = "none";
    }, 1000); // Wait for transition to end
}

// Ejemplo de imágenes
const images = [
    { src: "imágenes/antigua.jpg", description: "Descripción de la foto 1" },
    { src: "imágenes/antigua (2).jpg", description: "Descripción de la foto 2" },
    { src: "imágenes/antigua (3).jpg", description: "Descripción de la foto 3" },
    { src: "imágenes/antigua (4).jpg", description: "Descripción de la foto 4" },
    { src: "imágenes/civil.jpg", description: "Descripción de la foto 5" },
    { src: "imágenes/civil (2).jpg", description: "Descripción de la foto 6" },
    { src: "imágenes/civil (3).jpg", description: "Descripción de la foto 7" },
    { src: "imágenes/civil (4).jpg", description: "Descripción de la foto 8" },
    { src: "imágenes/futura.jpg", description: "Descripción de la foto 9" },
    { src: "imágenes/futura (2).jpg", description: "Descripción de la foto 10" },
    { src: "imágenes/futura (3).jpg", description: "Descripción de la foto 11" },
    { src: "imágenes/futura (4).jpg", description: "Descripción de la foto 12" }
];

// Cargar imágenes en la galería
const gallery = document.getElementById("gallery");
images.forEach(image => {
    const div = document.createElement("div");
    div.classList.add("photo");
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.description;
    div.appendChild(img);
    div.onclick = () => openModal(image.src, image.description);
    gallery.appendChild(div);
});
