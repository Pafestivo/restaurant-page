import { createWebsite } from "./scripts/loadWebsite";
import { loadHomePage  } from "./scripts/loadHome";
import { loadMenu } from "./scripts/loadMenu";
import { loadContact } from "./scripts/loadContact";
import './styles/contact.css';
import './styles/footer.css';
import './styles/general.css';
import './styles/header.css';
import './styles/home.css';
import './styles/menu.css';

//on first page load
createWebsite()
loadHomePage()

const homeNav = document.getElementById('home');
const menuNav = document.getElementById('menu');
const contactNav = document.getElementById('contact');

homeNav.addEventListener('click', loadHomePage);
menuNav.addEventListener('click', loadMenu);
contactNav.addEventListener('click', loadContact);
homeNav.addEventListener('click', highlight);
menuNav.addEventListener('click', highlight);
contactNav.addEventListener('click', highlight);

function highlight() {
  homeNav.classList.remove('highlight');
  menuNav.classList.remove('highlight');
  contactNav.classList.remove('highlight');

  this.classList.add('highlight');
}
