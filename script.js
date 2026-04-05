let currentSlide = 1;
const totalSlides = 10;

// Initialize presentation
document.addEventListener('DOMContentLoaded', function() {
    updateProgress();

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            changeSlide(1);
        } else if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        }
    });

    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            changeSlide(1); // Swipe left
        }
        if (touchEndX > touchStartX + 50) {
            changeSlide(-1); // Swipe right
        }
    }
});

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');

    // Remove active class from current slide
    slides[currentSlide - 1].classList.remove('active');

    // Calculate new slide number
    currentSlide += direction;

    // Loop around if needed
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    } else if (currentSlide < 1) {
        currentSlide = totalSlides;
    }

    // Add active class to new slide
    slides[currentSlide - 1].classList.add('active');

    // Update progress bar
    updateProgress();
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progress = (currentSlide / totalSlides) * 100;
    progressFill.style.width = progress + '%';
}

// Optional: Auto-advance slides (commented out by default)
/*
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Change slide every 5 seconds
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Uncomment to enable auto-play
// startAutoPlay();

// Pause auto-play on user interaction
document.addEventListener('click', () => {
    stopAutoPlay();
});
*/
