// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Load Navbar and Footer
function loadNavbarAndFooter() {
    const navbarPath = window.location.pathname.includes('/projects/') ? '../navbar.html' : 'navbar.html';
    const footerPath = window.location.pathname.includes('/projects/') ? '../footer.html' : 'footer.html';

    // Load Navbar
    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            initializeThemeToggle();
            initializeNavbarCollapse();

            // Apply the saved theme
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-theme');
            }

            // If the current page needs dynamic hero background
            if (typeof updateHeroBackground === 'function') {
                updateHeroBackground();
            }
        })
        .catch(error => console.error('Navbar load failed:', error));

    // Load Footer
    fetch(footerPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Footer load failed:', error));
}

// Theme toggle logic
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    themeToggle.style.cursor = 'pointer';

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }

        // Update hero background if the page supports it
        if (typeof updateHeroBackground === 'function') {
            updateHeroBackground();
        }
    });
}

// Collapse navbar when clicking outside
function initializeNavbarCollapse() {
    document.addEventListener('click', function (event) {
        const navbarCollapse = document.getElementById('navbarNav');
        if (!navbarCollapse) return;

        const isNavbarOpen = navbarCollapse.classList.contains('show');
        const isClickInsideNavbar = event.target.closest('#navbarNav') || event.target.closest('.navbar-toggler');

        if (isNavbarOpen && !isClickInsideNavbar) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
        }
    });
}

// Parallax effect
function initializeParallax() {
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        document.querySelectorAll('.parallax').forEach(function (el) {
            el.style.backgroundPositionY = (scrolled * 0.5) + 'px';
        });
    });
}

// Final Initialization
document.addEventListener('DOMContentLoaded', function () {
    loadNavbarAndFooter();
    initializeParallax();
});
