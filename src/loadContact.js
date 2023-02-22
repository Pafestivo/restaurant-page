import { makeEl } from "./makeEL";

function createContact() {

  const contact = makeEl('div', 'contact-container');

  const callUs = makeEl('p', 'call-us', 'Call Us: 555-555-5555');
  const location = makeEl('p', 'location', '<i class="fa-sharp fa-solid fa-location-dot"></i> 86305 Ocean Ave.');
  const locationImg = makeEl('img', './images/map-pin.jpg', 'location');

  contact.append(callUs, location, locationImg);

  return contact;
}

function loadContact() {
    const contentArea = document.getElementById('main-content');
    contentArea.innerHTML = "";
    contentArea.appendChild(createContact());
}

export { loadContact };