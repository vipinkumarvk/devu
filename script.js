// Initialize AOS
AOS.init({
    duration: 1500,
    once: true
});

// Global Variables
const music = document.getElementById('music');
let fireworks;

// Page Load
window.addEventListener('load', () => {

    // Show Welcome Popup
    const modal = new bootstrap.Modal(
        document.getElementById('welcomeModal')
    );

    modal.show();

    // Enter Celebration Button
    document.getElementById('enterBtn')
        .addEventListener('click', () => {

            // Start Music
            music.play().catch(err => {
                console.log('Music autoplay blocked:', err);
            });

            // Start Fireworks
            startFireworks();

            // Close Popup
            modal.hide();
        });
});


// ================= MUSIC =================

function toggleMusic() {

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}


// ================= FIREWORKS =================

function startFireworks() {

    const container = document.getElementById(
        'fireworks-container'
    );

    if (!container) return;

    // Prevent multiple instances
    if (fireworks) return;

    fireworks = new Fireworks.default(container, {
        autoresize: true,
        opacity: 0.8,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 120,
        trace: 4,
        explosion: 8,
        intensity: 30,
        flickering: 50,
        lineStyle: 'round',
        hue: {
            min: 0,
            max: 360
        },
        delay: {
            min: 20,
            max: 40
        },
        rocketsPoint: {
            min: 20,
            max: 80
        }
    });

    fireworks.start();

    // Stop after 20 seconds
    setTimeout(() => {
        if (fireworks) {
            fireworks.stop();
            fireworks = null;
        }
    }, 20000);
}


// ================= FLOATING HEARTS =================

const heartsContainer =
    document.querySelector('.hearts');

function createHeart() {

    if (!heartsContainer) return;

    const heart = document.createElement('i');

    heart.classList.add(
        'fa-solid',
        'fa-heart',
        'heart'
    );

    // Random position
    heart.style.left = Math.random() * 100 + 'vw';

    // Random size
    const size = Math.random() * 25 + 15;
    heart.style.fontSize = size + 'px';

    // Random animation duration
    heart.style.animationDuration =
        (Math.random() * 5 + 5) + 's';

    // Colors
    const colors = [
        '#ff4d6d',
        '#ff758f',
        '#ff8fab',
        '#ffb3c1',
        '#ffc2d1',
        '#ff006e'
    ];

    heart.style.color =
        colors[Math.floor(
            Math.random() * colors.length
        )];

    heartsContainer.appendChild(heart);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

// Generate hearts continuously
setInterval(createHeart, 300);