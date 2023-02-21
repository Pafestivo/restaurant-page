function createWebsite() {
  const contentDiv = document.getElementById('content');

  const header = document.createElement('div');
  header.id = 'header';

  const h1 = document.createElement('h1');
  h1.textContent = "Franchitti's"

  const nav = document.createElement('ul');
  nav.id = 'nav';

  nav.appendChild(createLi('Home'));
  nav.appendChild(createLi('Menu'));
  nav.appendChild(createLi('Contact'));



  header.appendChild(h1);
  header.appendChild(nav);

  const main = document.createElement('div');
  main.id = 'main-content';

  const footer = document.createElement('footer');
  const footerP = document.createElement('p');
  footerP.textContent = 'Copyright &copy 2023 Franchitti Restaurant'
  footer.appendChild(footerP);


  contentDiv.appendChild(header);
  contentDiv.appendChild(main);
  contentDiv.appendChild(footer);
  
  return contentDiv;

}

function createLi(text) {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
}

function createElement(type, content, id) {
  const el = document.createElement(type);
  el.textContent = content;
  el.id = id;
  return el;
}

export { createWebsite };