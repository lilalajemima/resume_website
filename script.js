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

document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0; // Track the current image index
    const images = document.querySelectorAll('.slider-image'); 

    function showImage(index) {
        images.forEach((image, i) => {
            image.style.display = (i === index) ? 'block' : 'none'; 
        });
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1; 
        showImage(currentIndex);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1; 
        showImage(currentIndex);
    });

    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalImages; 
        showImage(currentIndex);
    }

    // Set an interval for automatic sliding
    const slideInterval = setInterval(autoSlide, 3000); 

    // Initial image display
    showImage(currentIndex);
});




