let currentIndex = 0;
const images = document.querySelectorAll(".gallery-item");
const modal = document.getElementById("slideshow");
const modalImage = document.getElementById("slideshowImage");
const captionText = document.getElementById("caption");
let slideshowInterval;

// Open the slideshow modal
function startSlideshow(index) {
    currentIndex = index;
    modal.style.display = "block";
    updateModal();
    slideshowInterval = setInterval(() => changeSlide(1), 3000);
}

// Close the slideshow modal
function closeSlideshow() {
    modal.style.display = "none";
    clearInterval(slideshowInterval);
}

// Change slide
function changeSlide(step) {
    currentIndex += step;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;
    updateModal();
}

// Update the modal with the correct image
function updateModal() {
    modalImage.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}

// View all function - ensures all images are displayed properly
function showAll() {
    document.getElementById("galleryGrid").style.display = "grid";
}
