function createWebsite() {
  const contentDiv = document.getElementById('content');

  //create header area
  const header = document.createElement('div');
  header.id = 'header';

  const h1 = document.createElement('h1');
  h1.textContent = "Franchitti's"

  //create nav bar
  const nav = document.createElement('ul');
  nav.id = 'nav';
  nav.appendChild(createLi('Home'));
  nav.appendChild(createLi('Menu'));
  nav.appendChild(createLi('Contact'));

  //append title and nav to header area
  header.appendChild(h1);
  header.appendChild(nav);

  //create main content area
  const main = document.createElement('div');
  main.id = 'main-content';

  //create footer area
  const footer = document.createElement('footer');
  const footerP = document.createElement('p');
  footerP.textContent = 'Copyright &copy 2023 Franchitti Restaurant'
  footer.appendChild(footerP);

  //append all areas to the main content div
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

export { createWebsite };