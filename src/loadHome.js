function createHomePage() {
  const home = document.createElement('div');
  home.id = 'home';

  const infoBox = document.createElement('div');
  infoBox.id = 'info-box';

  const founderImg = document.createElement('img');
  founderImg.src = './images/founder-img.jpg';
  founderImg.alt = 'Giuseppe Franchitti';

  infoBox.appendChild(founderImg);
  infoBox.appendChild(createPara('Founded by Giuseppe Franchitti Cooking passionately since 1962'))


  home.appendChild(infoBox);

  return home;
}

function createPara(text) {
  const para = document.createElement("p");
  para.textContent = text;
  return para;
}

function loadHomePage() {
  const contentArea = document.getElementById('main-content');
  contentArea.appendChild(createHomePage());
}

export { loadHomePage };