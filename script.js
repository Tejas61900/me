// script.js

document.addEventListener('DOMContentLoaded', function() {
    
    // --- Typing Effect ---
    const typingText = document.querySelector('.typing-effect');
    const words = ["B.A.M.S. Student", "Healer in Training", "Follower of Ayurveda", "Nature Enthusiast"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        typingText.textContent = currentChar;

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(type, 150);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 100);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(type, 1200);
        }
    }
    
    type();

    // --- Scroll Fade-in Effect ---
    const sections = document.querySelectorAll('.content-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});
