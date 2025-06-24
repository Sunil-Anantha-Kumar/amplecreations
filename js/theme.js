AOS.init({
    duration: 1000,
    once: true
});

const themeToggle = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.parallax').forEach(function (el) {
        el.style.backgroundPositionY = (scrolled * 0.5) + 'px';
    });
});
// Theme toggle logic
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');

    if (!themeToggle) return; // Exit if themeToggle not present

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// Collapse navbar when clicking outside
function initializeNavbarCollapse() {
    document.addEventListener('click', function (event) {
        const navbarCollapse = document.getElementById('navbarNav');
        if (!navbarCollapse) return; // Exit if navbar is not present on this page

        const isNavbarOpen = navbarCollapse.classList.contains('show');
        const isClickInsideNavbar = event.target.closest('#navbarNav') || event.target.closest('.navbar-toggler');

        if (isNavbarOpen && !isClickInsideNavbar) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
        }
    });
}

// Initialize Parallax effect
function initializeParallax() {
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.parallax').forEach(function (el) {
            el.style.backgroundPositionY = (scrolled * 0.5) + 'px';
        });
    });
}

// Initialize all features when content is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeThemeToggle();
    initializeNavbarCollapse();
    initializeParallax();
});
