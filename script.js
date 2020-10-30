// Slide Navbar
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
nav.classList.toggle('slide');
});


// Page Mode switcher
function setDarkMode (isDark) {
    if (isDark) {
        document.body.setAttribute('id', 'darkmode');
        
    } else {
        document.body.setAttribute('id', '');

    }
};