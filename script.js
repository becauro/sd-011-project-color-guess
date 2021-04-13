const getP = document.querySelector('#rgb-color');

function mathRandom() {
  return Math.floor(Math.random() * 255);
}

function rgbColor(value) {
  getP.innerHTML = value;
}
rgbColor(`rgb(${mathRandom()}, ${mathRandom()}, ${mathRandom()})`);
