function generateSingleStanza(number) {
  let i = number - 1;
  if (
    (number >= 10 && number <= 20) ||
    number % 10 === 0 ||
    (number % 10 > 4 && number % 10 < 10)
  ) {
    console.log(`${number} бутылок пива на стене, ${number} бутылок пива!`);
  } else if (number % 10 === 1) {
    console.log(`${number} бутылка пива на стене, ${number} бутылка пива!`);
  } else if (number % 10 > 1 && number % 10 < 5) {
    console.log(`${number} бутылки пива на стене, ${number} бутылки пива!`);
  }
  if ((i >= 10 && i <= 20) || i % 10 === 0 || (i % 10 > 4 && i % 10 < 10)) {
    console.log(`Возьми одну, пусти по кругу, ${i} бутылок пива на стене!`);
  } else if (i % 10 === 1) {
    console.log(`Возьми одну, пусти по кругу, ${i} бутылка пива на стене!`);
  } else if (i % 10 > 1 && i % 10 < 5) {
    console.log(`Возьми одну, пусти по кругу, ${i} бутылки пива на стене!`);
  }
}

function generateSongText(number) {
  for (let i = number; i >= 1; i--) {
    generateSingleStanza(i);
  }
}
generateSongText(99);
