import { createWebsite } from "./loadWebsite";
import { loadHomePage  } from "./loadHome";
import { loadMenu } from "./loadMenu";
import { loadContact } from "./loadContact";

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
