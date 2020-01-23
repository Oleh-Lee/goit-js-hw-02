'use strict'
const formatString = function (string) {
  const cutedString = string.slice(0, 40)
  return (string.length <= cutedString.length) ? string : `${cutedString}...`
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка
console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка

// wrong but working version

// const formatString = function(string) {
//     const lettersOfString = string.split("");
//     const withoutExtra = lettersOfString.splice(0, 40);
//     const sewLeftLetters = withoutExtra.join("");
//     let message;
//     if (sewLeftLetters.length >= string.length) {
//       message = string;
//     } else if (sewLeftLetters.length < string.length) {
//       message = `${sewLeftLetters}...`;
//     }
//     return message;
//   };
//   console.log(formatString("Curabitur ligula sapien, tincidunt non."));
//   console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
//   console.log(formatString("Curabitur ligula sapien."));
//   console.log(
//     formatString(
//       "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//     )
//   );