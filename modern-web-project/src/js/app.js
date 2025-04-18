// This file contains the JavaScript code for the project. It can include functionality for interactivity and dynamic behavior of the web application.

document.addEventListener('DOMContentLoaded', () => {
    // Example: Toggle mobile navigation
    const navToggle = document.querySelector('.header-toggle');
    const navMenu = document.getElementById('navmenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Example: Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});