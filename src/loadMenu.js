import { makeEl } from "./makeEL";

function createMenu() {
  const menu = makeEl('div', 'menu-container');

  menu.append(
    createDish('Spaghetti Bolognese', 'Spaghetti made with minced beef, bacon and tomatoes.', 'bolognese'),
    createDish('Lasagne', 'SPasta sheets with sauce, meat and cheese in between.', 'Lasagna'),
    createDish('Fettuccine Alfredo', 'Fresh fettuccine tossed with butter and parmesan cheese.', 'Fettuccine-Alfredo'),
    createDish('Pasta Carbonara', 'Pasta made with eggs, cheese, cured pork and black pepper.', 'Carbonara'),
    createDish('Ravioli', 'Italian dumping stuffed with ricotta, meat, and cheese.', 'ravioli'),
    createDish('Pasta alla Norma', 'Sicilian pasta dish with eggplant, marinara and basil.', 'allanorma'),
    createDish('Spaghetti alle Vongole', 'Well made spaghetti served with high quality clams.', 'Vongole'),
    createDish('Macaroni Cheese', 'Macaroni pasta mixed with a cheesy sauce.', 'mac-cheese'),
  )
  return menu;
}

function createDish(title, description, img) {
  const dish = document.createElement('div');
  dish.classList.add('dish');
  const dishName = makeEl('p', '', title);
  dishName.classList.add('title');
  // const dishName = document.createElement('p');
  // dishName.classList.add('title');
  // dishName.textContent = title;

  const desc = makeEl('p', '', description)
  desc.classList.add('description');
  // const desc = document.createElement('p');
  // desc.classList.add('description');
  // desc.textContent = description;

  // const dishImg = makeEl('img', `./images/${img}.jpg`, `${img} dish`);
  // const dishImg = document.createElement('img');
  // dishImg.src = `./images/${img}.jpg`;
  // dishImg.alt = `${img} dish.`;

  dish.append(dishName, desc, makeEl('img', `./images/${img}.jpg`, `${img} dish`));

  return dish;
}

function loadMenu() {
  const contentArea = document.getElementById('main-content');
  contentArea.innerHTML = "";
  contentArea.appendChild(createMenu());
}

export { loadMenu }