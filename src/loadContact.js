import { makeEl } from "./makeEL";

function createContact() {

  const contact = makeEl('div', 'contact-container');

  contact.append(
    makeEl('p', 'call-us', 'Call Us: 555-555-5555'), 
    makeEl('p', 'location', '<i class="fa-sharp fa-solid fa-location-dot"></i> 86305 Ocean Ave.'), 
    makeEl('img', '../src/images/map-pin.jpg', 'location'));

  return contact;
}

function loadContact() {
    const contentArea = document.getElementById('main-content');
    contentArea.innerHTML = "";
    contentArea.appendChild(createContact());
}

export { loadContact };