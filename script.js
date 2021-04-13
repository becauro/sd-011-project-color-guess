const optionsContainer = document.getElementById('options-container');

const spanElement = document.createElement('span');

function createColorOptions(quantity) {
  for (let index = 0; index < quantity; index += 1) {
    const newSpan = spanElement.cloneNode();
    newSpan.classList.add('ball');
    optionsContainer.appendChild(newSpan);
  }
}

function onLoad() {
  createColorOptions(6);
}

window.onload = onLoad;
