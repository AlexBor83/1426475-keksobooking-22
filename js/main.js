'use strict';

//Получение случайного целого числа в заданном интервале, включительно
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber(a, b) {

  let max = Math.max(a, b);
  let min = Math.min(a, b);

  if (min<0 || max<0) {
    throw Error ('Диапазон может быть только положительный, включая ноль');
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

//console.log (getRandomNumber(5, 10));

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

function getRandomArbitrary(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  if (min<0 || max<0) {
    throw Error ('Диапазон может быть только положительный, включая ноль');
  }

  return Math.random() * (max - min) + min; //Максимум и минимум включаются
}

//console.log (getRandomArbitrary(1.1, 2));



