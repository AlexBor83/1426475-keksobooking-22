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

const avatarNumber ='0' + getRandomNumber(1, 8)

const types = ['palace', 'flat', 'house', 'bungalow'];

const checkins = ['12:00', '13:00', '14:00'];

const checkouts = ['12:00', '13:00', '14:00'];

const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditionerwifi',
  'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const latitudeRandom = getRandomArbitrary(35.7, 35.65).toFixed(5);  // Добавил toFixed(5) еще чтоб было 5 знаков после заптой как в диапозоне
const longitudeRandom = getRandomArbitrary(139.7, 139.8).toFixed(5); // Добавил toFixed(5) еще чтоб было 5 знаков после заптой как в диапозоне

//Случайный индекс массива
const getIndexArray = function(array) {
  const indexArray = getRandomNumber(0, array.length - 1);
  return array[indexArray];
};


//author, объект — описывает автора. Содержит одно поле:

const createAuthor = () => {
  //avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это случайное число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д.
  const randomAvatar = 'img/avatars/user'+avatarNumber+'.png';

  return randomAvatar;
};

//console.log(author)



//offer, объект — содержит информацию об объявлении. Состоит из полей:

const createOffer = () => {
  //title, строка — заголовок предложения. Придумайте самостоятельно.+
  const titleRoom = 'лучшее жилье';

  //address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.x}}, {{location.y}}.
  const randomaddress = `${latitudeRandom}, ${longitudeRandom}`;

  //price, число — стоимость. Любое положительное число.++
  const randomPrice = Math.trunc(getRandomArbitrary(0, 1)*1000);

  //type, строка — одно из четырёх фиксированных значений: palace, flat, house или bungalow.++
  const randomType = getIndexArray(types);

  //rooms, число — количество комнат. Любое положительное число++.
  const randomRoom = getRandomArbitrary(0, 1).toFixed(1) * 10; //Сделал не любое а в приделах разумного число комнат не может быть дробным

  //guests, число — количество гостей, которое можно разместить. Любое положительное число.++
  const randomGuest = getRandomArbitrary(0, 1).toFixed(1) * 10; //Сделал не любое а в приделах разумного число людей не может быть дробным

  // checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  const randomCheckin = getIndexArray(checkins);

  // checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  const randomcheckout = getIndexArray(checkouts);

  // features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner.
  //Значения не должны повторяться - yt gjkexbkjcmcl.
  const randomFeatures = new Array(getRandomNumber(1, features.length)).fill('').map(() =>
    features[getRandomNumber(0, features.length - 1)]);

  // description, строка — описание помещения. Придумайте самостоятельно.++
  const descriptionRoom = 'комната';

  //photos, массив строк — массив случайной длины:
  const randomPhoto = new Array(getRandomNumber(1, photos.length)).fill('').map(() =>
    photos[getRandomNumber(0, photos.length - 1)]);

  //location, объект — местоположение в виде географических координат. Состоит из двух полей: ++
  //x, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000
  //y, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000

  const randomLocation = {
    latitude: latitudeRandom,
    longitude: longitudeRandom,
  };


  return {
    title: titleRoom,
    address: randomaddress,
    price: randomPrice,
    type: randomType,
    rooms: randomRoom,
    guests: randomGuest,
    checkin: randomCheckin,
    checkout: randomcheckout,
    description: descriptionRoom,
    features: randomFeatures,
    photos: randomPhoto,
    location: randomLocation,
  };
};

const createObject = () => {

  return {
    author: createAuthor(),
    offer: createOffer(),
  }
};


const objects = new Array(10).fill('').map(() => createObject());

console.log(objects);



