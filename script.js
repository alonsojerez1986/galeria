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
