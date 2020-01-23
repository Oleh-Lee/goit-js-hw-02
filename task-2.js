'use strict'
const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(" ");
  const total = words.length * pricePerWord;
  return total;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus", 10)
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus", 20)
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);

// const calculateEngravingPrice = function(message, pricePerWord) {
// const words = message.split(' ');
// let total = 0;
// for(const word of words){
// total += pricePerWord;
// }
// return total;
// }
// console.log(
// calculateEngravingPrice(
// "Proin sociis natoque et magnis parturient montes mus",10)
// );

// console.log(
// calculateEngravingPrice(
// "Proin sociis natoque et magnis parturient montes mus",20)
// );

// console.log(
// calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// );

// console.log(
// calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// );