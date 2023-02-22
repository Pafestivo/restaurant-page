function makeEl(type, id, content) {

  content = content || '';
  const el = document.createElement(type);

  if(type === 'img') {
    el.src = id;
    el.alt = content;
  } else {
    el.id = id;
    el.innerHTML = content;
  }

  return el;
}

export { makeEl };