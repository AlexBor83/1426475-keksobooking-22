"use strict";

//Получение случайного целого числа в заданном интервале, включительно
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  if (min < 0 || max < 0) {
    throw Error('Диапазон может быть только положительный, включая ноль');
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

  if (min < 0 || max < 0) {
    throw Error('Диапазон может быть только положительный, включая ноль');
  }

  return Math.random() * (max - min) + min; //Максимум и минимум включаются
}

const types = ['palace', 'flat', 'house', 'bungalow'];
const checkins = ['12:00', '13:00', '14:00'];
const checkouts = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];


//Случайный элемент массива
const getElementArray = function(array) {
  const indexArray = getRandomNumber(0, array.length - 1);
  return array[indexArray];
};


//author, объект — описывает автора.
const createAuthor = () => {
  const avatarNumber ='0' + getRandomNumber(1, 8)
  const randomAvatar = 'img/avatars/user'+avatarNumber+'.png';

  return randomAvatar;
};

//offer, объект — содержит информацию об объявлении. Состоит из полей:

const createOffer = () => {

  //address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
  const createAddress = () => {
    const latitudeRandom = getRandomArbitrary(35.7, 35.65).toFixed(5);  // Добавил toFixed(5) еще чтоб было 5 знаков после заптой как в диапозоне
    const longitudeRandom = getRandomArbitrary(139.7, 139.8).toFixed(5); // Добавил toFixed(5) еще чтоб было 5 знаков после заптой как в диапозоне

    return `${latitudeRandom}, ${longitudeRandom}`;
  }

  //location, объект — местоположение в виде географических координат. Состоит из двух полей: ++
  //x, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
  //y, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000

  const randomLocation = {
    x: latitudeRandom,
    y: longitudeRandom,
  };


  return {
    title: 'лучшее жилье',
    address: createAddress(),
    price: Math.trunc(getRandomArbitrary(0, 1)*1000),
    type: getElementArray(types),
    rooms: getRandomArbitrary(0, 1).toFixed(1) * 10,
    guests: getRandomArbitrary(0, 1).toFixed(1) * 10,
    checkin: getElementArray(checkins),
    checkout: getElementArray(checkouts),
    description: 'комната',
    features: features.slice(getRandomNumber(1, 6)),
    photos:  new Array(getRandomNumber(1, photos.length)).fill('').map(() =>
      photos[getRandomNumber(0, photos.length - 1)]),
    location: createAddress(),
  };
};

const createObject = () => {
  return {
    author: createAuthor(),
    offer: createOffer(),
  }
};

const createArray = (elementArray) => {

  const objects = new Array(elementArray).fill('').map(() => createObject());

  return objects;
};

createArray(10);

console.log(createArray(10));



