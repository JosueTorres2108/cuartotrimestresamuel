const images = ["imagen5.jpg", "imagen1.png", "imagen2.webp", "imagen3.png", "imagen4.jpg"]; // Ruta de las imágenes de la galería
let currentImageIndex = 0;

function changeGalleryImage() {
    const galleryImage = document.getElementById("gallery-image");
    galleryImage.src = images[currentImageIndex];
    galleryImage.style.width = "300px"; // Ancho deseado en píxeles
    galleryImage.style.height = "200px"; // Altura deseada en píxeles
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Cambia la imagen de la galería cada 5 segundos (5000 ms)
setInterval(changeGalleryImage, 5000);
