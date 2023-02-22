import { createWebsite } from "./loadWebsite";
import { loadHomePage  } from "./loadHome";
import { loadMenu } from "./loadMenu";

//on first page load
createWebsite()
loadHomePage()

const homeNav = document.getElementById('home');
const menuNav = document.getElementById('menu');

homeNav.addEventListener('click', loadHomePage);
menuNav.addEventListener('click', loadMenu);

