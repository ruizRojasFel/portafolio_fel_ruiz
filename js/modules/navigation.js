
// =====================================
// NAVIGATION ACTIVE STATE
// =====================================

// Update active navigation item based on scroll position and clicks
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    // Handle click events for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Remove active class and text-primary from all nav links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active', 'text-primary');
                navLink.classList.add('text-dark');
            });

            // Add active class and text-primary to clicked link
            this.classList.add('active', 'text-primary');
            this.classList.remove('text-dark');
        });
    });

    // Handle scroll spy for automatic highlighting
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function () {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        // Update navigation based on scroll position
        navLinks.forEach(link => {
            link.classList.remove('active', 'text-primary');
            link.classList.add('text-dark');

            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active', 'text-primary');
                link.classList.remove('text-dark');
            }
        });
    });
});
