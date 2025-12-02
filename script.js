// === TOGGLE NAVBAR MENU ===
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// === ACTIVE NAVIGATION ON SCROLL ===
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    sections.forEach((section) => {
        const offset = section.offsetTop - 120; // slightly smoother
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
            // Set active nav link
            navLinks.forEach((link) => link.classList.remove('active'));

            const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('active');

            // Trigger section animation
            section.classList.add('show-animate');
        } else {
            section.classList.remove('show-animate');
        }
    });

    // === STICKY HEADER ===
    header.classList.toggle('sticky', scrollY > 100);

    // Auto-close navbar on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // === FOOTER ANIMATION ===
    const scrollBottom = window.innerHeight + scrollY >= document.documentElement.scrollHeight;
    footer.classList.toggle('show-animate', scrollBottom);
});
