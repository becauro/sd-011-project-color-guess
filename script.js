function getRandomRGBColorString() {
  let finalString = '(';

  for (let i = 0; i < 3; i += 1) {
    const randomTone = Math.round(Math.random() * 255);

    finalString += randomTone.toString(10);
    if (i !== 2) {
      finalString += ', ';
    }
  }

  finalString += ')';
  return finalString;
}

console.log(getRandomRGBColorString());