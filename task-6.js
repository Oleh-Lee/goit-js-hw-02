'use strict'
let input;
const numbers = [];
let total = 0;
do{
    input = prompt('Введите число');
    if(input){
        numbers.push(Number(input))
    }
    if(isNaN(input)){
        numbers.pop();
        alert('Это не число')
    }
    }while(input);
    for(let number of numbers){
total += number
    }
    console.log(`Общая сумма чисел равна ${total}`)