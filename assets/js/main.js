//fonction js pour ouvrir et fermer le menu de navigation mobile
const navList = document.querySelector('.navbar ul');
const navLinks = document.querySelectorAll('.navbar a');
const hamburger = document.querySelector('.navbar__toggler');

hamburgerClick(() => {
    hamburger.classList.toggle('open__hamburger');
    navList.classList.toggle('open');
})

navLinks.forEach(e => e.addEventListener('click', linkClick));

linkClick(() => {
    if (navList.classList.contains('open')) {
        hamburger.click();
    }
})
