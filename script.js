// For the typewriter effect of the home section
document.addEventListener("DOMContentLoaded", function() {
    const text = "Hello, I am Lilala Runiga Jemima 👋";
    let index = 0;
    const speed = 100; 

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typing-effect").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

// JavaScript for the image slider
let currentIndex = 0; // Track the current image index
const images = document.querySelectorAll('.slider-image'); // Select all images

function showImage(index) {
    images.forEach((image, i) => {
        image.style.display = (i === index) ? 'block' : 'none'; // Show current image, hide others
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1; // Loop back to the last image
    showImage(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1; // Loop back to the first image
    showImage(currentIndex);
});

// Initial image display
showImage(currentIndex);



