document.getElementById('updated').innerHTML = document.lastModified;

let currentYear = new Date();
document.getElementById('currentYear').innerHTML = currentYear.getFullYear();

const toggleButton = document.getElementsByClassName('nav-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
	navbarLinks.classList.toggle('active');
});
