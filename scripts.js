function openModal(img) {
    const modal = document.getElementById("modal01");
    const modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src;
}
function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("modal01");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};