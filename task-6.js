'use strict'
// let input;
// const numbers = [];
// let total = 0;
// do{
//     input = prompt('Введите число');
//     if(input){
//         numbers.push(Number(input))
//     }
//     if(Number.isNaN(Number(input))){
//         numbers.pop();
//         alert('Это не число')
//     }
//     }while(input);
//     for(let number of numbers){
// total += number
//     }
//     console.log(`Общая сумма чисел равна ${total}`)

//version with 'While'
let input;
const numbers = [];
let total = 0;
while (input !== null) {
    input = prompt('Введите число')
    if (Number.isNaN(Number(input))) {
        alert('Это не число')
    } else {
        numbers.push(Number(input))
    }
}
// for (let i = 0; i < numbers.length; i++)
//     total += Number(numbers[i])

for (let num of numbers)
    total += Number(num)
console.log(`Общая сумма чисел равна ${total}`)
