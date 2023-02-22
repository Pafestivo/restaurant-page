import { makeEl } from "./makeEL";
function createHomePage() {
  // const home = document.createElement('div');
  // home.id = 'home-container';
  const home = makeEl('div', 'home-container');

  // const infoBox = document.createElement('div');
  // infoBox.id = 'info-box';
  const infoBox = makeEl('div', 'info-box');

  // const founderImg = document.createElement('img');
  // founderImg.src = './images/founder-img.jpg';
  // founderImg.alt = 'Giuseppe Franchitti';
  // const founderImg = makeEl('img', './images/founder-img.jpg', 'Giuseppe Franchitti');

  // infoBox.appendChild(founderImg);
  // infoBox.appendChild(createPara('Founded by Giuseppe Franchitti Cooking passionately since 1962'))
  infoBox.append(
    makeEl('img', './images/founder-img.jpg', 'Giuseppe Franchitti'),
    makeEl('p', '', 'Founded by Giusepee Franchitti Cooking passionately since 1962')
  )


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
  contentArea.innerHTML = "";
  contentArea.appendChild(createHomePage());
}

export { loadHomePage };