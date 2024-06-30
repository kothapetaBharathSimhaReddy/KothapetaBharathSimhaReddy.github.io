document.addEventListener('DOMContentLoaded', () => {
    // Toggle the mobile menu
    document.getElementById('menu-toggle').addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('hidden');
    });

    // Initialize ScrollReveal for animation
    ScrollReveal().reveal('#about', { delay: 200 });
    ScrollReveal().reveal('#skills', { delay: 200 });
    ScrollReveal().reveal('#projects', { delay: 200 });
    ScrollReveal().reveal('#certifications', { delay: 200 });
    ScrollReveal().reveal('#contact', { delay: 200 });

    // Smooth scroll to section
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add hover effect to skill cards
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0 0 15px rgba(76, 81, 191, 0.5)';
        });
        card.addEventListener('mouseout', () => {
            card.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add hover effect to project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.boxShadow = '0 0 15px rgba(76, 81, 191, 0.5)';
        });
        card.addEventListener('mouseout', () => {
            card.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add hover effect to buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'translateY(-3px)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'translateY(0)';
        });
    });
});
