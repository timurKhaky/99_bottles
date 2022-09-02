function generateSingleStanza(number) {
  let i = number - 1;
  let word1 =
    (number >= 10 && number <= 20) ||
    number % 10 === 0 ||
    (number % 10 > 4 && number % 10 < 10)
      ? "Бутылок"
      : number % 10 === 1
      ? "бутылка"
      : "бутылки";
  let word2 =
    (i >= 10 && i <= 20) || i % 10 === 0 || (i % 10 > 4 && i % 10 < 10)
      ? "Бутылок"
      : i % 10 === 1
      ? "бутылка"
      : "бутылки";
  console.log(
    `${number} ${
      (number >= 10 && number <= 20) ||
      number % 10 === 0 ||
      (number % 10 > 4 && number % 10 < 10)
        ? "Бутылок"
        : number % 10 === 1
        ? "бутылка"
        : "бутылки"
    } пива на стене, ${number} ${
      (number >= 10 && number <= 20) ||
      number % 10 === 0 ||
      (number % 10 > 4 && number % 10 < 10)
        ? "Бутылок"
        : number % 10 === 1
        ? "бутылка"
        : "бутылки"
    } пива!`
  );
  console.log(
    `Возьми одну, пусти по кругу, ${i} ${
      (i >= 10 && i <= 20) || i % 10 === 0 || (i % 10 > 4 && i % 10 < 10)
        ? "Бутылок"
        : i % 10 === 1
        ? "бутылка"
        : "бутылки"
    } пива на стене!`
  );
}
function generateSongText(number) {
  for (let i = number; i >= 1; i--) {
    generateSingleStanza(i);
  }
}
generateSongText(99);
