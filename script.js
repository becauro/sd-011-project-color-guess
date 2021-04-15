const rgbColor = document.getElementById('rgb-color');
window.onload = function generateRandomColor() {
  const redCode = Math.floor(Math.random() * 255);
  const greenCode = Math.floor(Math.random() * 255);
  const blueCode = Math.floor(Math.random() * 255);
  const rgbCode = `(${redCode}, ${greenCode}, ${blueCode})`;
  rgbColor.innerText = rgbCode;
};
