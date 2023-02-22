import { makeEl } from "./makeEL";

function createHomePage() {

  const home = makeEl('div', 'home-container');
  const infoBox = makeEl('div', 'info-box');

  infoBox.append(
    makeEl('img', './images/founder-img.jpg', 'Giuseppe Franchitti'),
    makeEl('p', '', 'Founded by Giusepee Franchitti Cooking passionately since 1962')
  )

  home.appendChild(infoBox);

  return home;
}

function loadHomePage() {
  const contentArea = document.getElementById('main-content');
  contentArea.innerHTML = "";
  contentArea.appendChild(createHomePage());
}

export { loadHomePage };