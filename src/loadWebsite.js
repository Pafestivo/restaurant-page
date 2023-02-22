import { makeEl } from "./makeEL";

function createWebsite() {
  const contentDiv = document.getElementById('content');
  const header = makeEl('div', 'header');
  const h1 = makeEl('h1', '', "Franchitti's");
  const nav = makeEl('ul', 'nav');
  const main = makeEl('div', 'main-content');
  const footer = makeEl('footer');

  nav.append(
    makeEl('li', 'home', 'Home'),
    makeEl('li', 'menu', 'Menu'),
    makeEl('li', 'contact', 'Contact')
  )
  header.append(h1, nav);
  footer.append(makeEl('p', '', 'Copyright &copy 2023 Franchitti Restaurant'));
  //append all areas to the main content div
  contentDiv.append(header, main, footer);

  return contentDiv;
}

export { createWebsite };