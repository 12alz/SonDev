// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
} 
// // DARK / LIGHT MODE TOGGLE
// let themeToggle = document.querySelector('#theme-toggle');
// let body = document.body;

// Load saved theme from localStorage
if(localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    themeToggle.querySelector('i').classList.replace('bx-moon', 'bx-sun');
}

themeToggle.onclick = () => {
    body.classList.toggle('light-theme');

    // Change icon
    let icon = themeToggle.querySelector('i');
    if(body.classList.contains('light-theme')) {
        icon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('theme', 'dark');
    }
}
