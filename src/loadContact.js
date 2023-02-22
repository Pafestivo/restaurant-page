function createContact() {
  const contact = document.createElement('div');
  contact.id = 'contact-container'

  const callUs = document.createElement('p');
  callUs.id = 'call-us';
  callUs.textContent = 'Call Us: 555-555-5555';

  const location = document.createElement('p');
  location.id = 'location';
  location.innerHTML = '<i class="fa-sharp fa-solid fa-location-dot"></i> 86305 Ocean Ave.';

  const locationImg = document.createElement('img');
  locationImg.src = "./images/map-pin.jpg";
  locationImg.alt = "location";

  contact.append(callUs, location, locationImg);

  return contact
}

function loadContact() {
    const contentArea = document.getElementById('main-content');
    contentArea.innerHTML = "";
    contentArea.appendChild(createContact());
}

export { loadContact };