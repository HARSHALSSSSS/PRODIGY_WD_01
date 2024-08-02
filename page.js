// scripts.js

// scripts.js

// Change navbar style on scroll
// scripts.js

// Change navbar style on scroll
// scripts.js

// Change navbar style on scroll
// scripts.js

// Function to update styles based on dark mode
// scripts.js

// Function to update styles based on dark mode
// scripts.js

// Function to update styles based on dark mode
// scripts.js

// Function to update styles based on dark mode
// scripts.js

// Function to update styles based on dark mode
function updateStyles(isDarkMode) {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const changeColorBtn = document.getElementById('changeColorBtn');

    if (isDarkMode) {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';

        sections.forEach(section => {
            section.style.backgroundColor = 'black';
            section.style.color = 'white';
        });

        navLinks.forEach(link => {
            link.style.color = 'white';
        });

        header.style.backgroundColor = 'black';
        navbar.style.backgroundColor = '#555'; // Grey color for navbar in dark mode
        navbar.style.color = 'white'; // White text color for navbar in dark mode
        changeColorBtn.style.color = 'black';
        changeColorBtn.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';

        sections.forEach(section => {
            section.style.backgroundColor = 'white';
            section.style.color = 'black';
        });

        navLinks.forEach(link => {
            link.style.color = 'black';
        });

        header.style.backgroundColor = 'white';
        navbar.style.backgroundColor = '#555'; // Default color for navbar in light mode
        navbar.style.color = 'white'; // White text color for navbar in light mode
        changeColorBtn.style.color = 'white';
        changeColorBtn.style.backgroundColor = 'black';
    }
}

// Change navbar style on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555'; // Grey color for navbar when scrolled in light mode
    } else {
        navbar.style.backgroundColor = isDarkMode ? '#555' : '#333';
    }
});

// Change navbar link color on hover
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#f0a500'; // Orange color on hover
    });
    link.addEventListener('mouseout', () => {
        link.style.color = isDarkMode ? 'white' : 'black';
    });
});

// Toggle background and text color on button click
let isDarkMode = false;
const changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    updateStyles(isDarkMode);
});

// Initial styles based on default mode (light mode)
updateStyles(isDarkMode);
