'use strict';

//Получение случайного целого числа в заданном интервале, включительно
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

//Не понял, что надо сделать вот по этому условию - Учтите, что диапазон может быть только положительный, включая ноль?
//Добавил метод Math.abs(x) - чтоб было положительное число

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max > min) {
    return Math.abs(Math.floor(Math.random() * (max - min + 1)) + min); //Максимум и минимум включаются
  }  {
    return 'warning'; //если передать значение «до» меньшее, чем значение «от», или равное ему;
  }
}

//console.log (getRandomNumber(10, 20));

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// тот же вопрос

function getRandomArbitrary(min, max) {
  if (max > min) {
    return Math.abs(Math.random() * (max - min) + min); //Максимум и минимум включаются
  }  {
    return 'warning'; //если передать значение «до» меньшее, чем значение «от», или равное ему;
  }
}

//console.log (getRandomArbitrary(10, 20));



